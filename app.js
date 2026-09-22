(() => {
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const main = $('#main');
  const storeKey = 'antiguidadeEuropeiaStateV1';
  const state = loadState();
  let route = 'home';
  let currentLessonId = null;
  let activeActivityId = null;
  let matchState = {left:null,right:null,solved:[]};
  let sortState = [];

  function loadState(){
    try {
      return Object.assign({completedLessons:[],completedActivities:[],activityAttempts:{},theme:'light'}, JSON.parse(localStorage.getItem(storeKey)||'{}'));
    } catch { return {completedLessons:[],completedActivities:[],activityAttempts:{},theme:'light'}; }
  }
  function saveState(){ localStorage.setItem(storeKey, JSON.stringify(state)); updateProgressUI(); }
  function escapeHTML(str=''){ return String(str).replace(/[&<>'"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function totalLessons(){ return COURSE_DATA.modules.reduce((n,m)=>n+m.lessons.length,0); }
  function progressPercent(){
    const total = totalLessons()+ACTIVITIES.length;
    const done = state.completedLessons.length+state.completedActivities.length;
    return Math.round(done/total*100);
  }
  function updateProgressUI(){
    const p = progressPercent();
    $('#progressMiniText').textContent = `${p}%`;
    $('#progressMiniBar').style.width = `${p}%`;
  }
  function toast(message){
    const el=document.createElement('div'); el.className='toast'; el.textContent=message; $('#toastRegion').appendChild(el);
    setTimeout(()=>el.remove(),2600);
  }
  function moduleById(id){ return COURSE_DATA.modules.find(m=>m.id===id); }
  function lessonById(id){
    for(const m of COURSE_DATA.modules){ const l=m.lessons.find(x=>x.id===id); if(l) return {lesson:l,module:m}; }
    return null;
  }
  function activityById(id){ return ACTIVITIES.find(a=>a.id===id); }
  function formatYear(y){ return y < 0 ? `${Math.abs(y)} a.C.` : `${y} d.C.`; }

  function setRoute(next, payload={}){
    route=next;
    if(payload.lessonId) currentLessonId=payload.lessonId;
    if(payload.activityId) activeActivityId=payload.activityId;
    $$('.nav-item').forEach(b=>b.classList.toggle('is-active', b.dataset.route===route || (route==='lesson'&&b.dataset.route==='course')));
    render();
    window.scrollTo({top:0,behavior:'smooth'});
    setTimeout(()=>main.focus({preventScroll:true}),0);
  }

  function render(){
    const map={home:renderHome,course:renderCourse,lesson:renderLesson,activities:renderActivities,timeline:renderTimeline,glossary:renderGlossary,sources:renderSources};
    (map[route]||renderHome)();
  }

  function renderHome(){
    const next = findNextLesson();
    main.innerHTML = `
      <section class="hero">
        <div class="eyebrow">História antiga • Europa em perspectiva conectada</div>
        <h1>${COURSE_DATA.meta.title}</h1>
        <p>${COURSE_DATA.meta.description}</p>
        <div class="hero-actions">
          <button class="btn primary" data-action="continue">${state.completedLessons.length ? 'Continuar curso' : 'Começar curso'}</button>
          <button class="btn ghost" data-route-go="activities">Praticar atividades</button>
        </div>
      </section>
      <section class="stats-grid" aria-label="Resumo do curso">
        ${stat('12','módulos temáticos')}${stat('36','aulas guiadas')}${stat('48','atividades interativas')}${stat(progressPercent()+'%','progresso geral')}
      </section>
      <section class="section">
        <div class="section-head"><div><div class="eyebrow">Trilha principal</div><h2>Do Bronze Final à Antiguidade Tardia</h2></div><p>Sem reduzir a Antiguidade a Grécia + Roma.</p></div>
        <div class="module-grid">${COURSE_DATA.modules.map(moduleCard).join('')}</div>
      </section>
      <section class="section">
        <div class="panel">
          <div class="section-head"><div><div class="eyebrow">Retomar</div><h2>${next ? escapeHTML(next.lesson.title) : 'Curso concluído'}</h2></div></div>
          <p class="muted">${next ? escapeHTML(next.module.title)+' · '+escapeHTML(next.lesson.duration) : 'Você concluiu todas as aulas. Use as atividades para revisar.'}</p>
          ${next ? `<button class="btn primary" data-lesson="${next.lesson.id}">Abrir próxima aula</button>` : `<button class="btn primary" data-route-go="activities">Revisar atividades</button>`}
        </div>
      </section>`;
    bindCommon();
    $('[data-action="continue"]')?.addEventListener('click',()=> next ? setRoute('lesson',{lessonId:next.lesson.id}) : setRoute('course'));
  }
  function stat(value,label){ return `<div class="stat-card"><strong>${value}</strong><span>${label}</span></div>`; }
  function moduleCard(m){
    const done=m.lessons.filter(l=>state.completedLessons.includes(l.id)).length;
    return `<article class="module-card"><div class="number">Módulo ${m.number} · ${escapeHTML(m.period)}</div><h3>${escapeHTML(m.title)}</h3><p>${escapeHTML(m.summary)}</p><div class="meta"><span class="pill">${done}/${m.lessons.length} aulas</span><button class="btn small" data-module="${m.id}">Explorar</button></div></article>`;
  }

  function renderCourse(){
    main.innerHTML = `<header class="page-head"><div class="eyebrow">Curso completo</div><h1>Trilha de aprendizagem</h1><p>As aulas combinam narrativa histórica, conceitos, comparação entre regiões e exercícios. Você pode seguir a ordem sugerida ou entrar em qualquer módulo.</p></header>
    <div class="course-layout">
      <div class="module-accordion">${COURSE_DATA.modules.map(m=>`
        <details class="module-block" id="${m.id}">
          <summary><div><span>Módulo ${m.number} · ${escapeHTML(m.period)}</span><strong>${escapeHTML(m.title)}</strong></div><span>${m.lessons.filter(l=>state.completedLessons.includes(l.id)).length}/${m.lessons.length} concluídas</span></summary>
          <div class="module-block-content"><p class="muted">${escapeHTML(m.summary)}</p><div class="lesson-list">${m.lessons.map((l,i)=>lessonRow(l,i)).join('')}</div></div>
        </details>`).join('')}</div>
      <aside class="panel"><h3>Seu progresso</h3><div class="score-box"><div class="score-ring" style="--score:${progressPercent()}%"><strong>${progressPercent()}%</strong></div><div><strong>${state.completedLessons.length}/${totalLessons()}</strong><div class="muted">aulas concluídas</div><strong>${state.completedActivities.length}/${ACTIVITIES.length}</strong><div class="muted">atividades concluídas</div></div></div><hr style="border:0;border-top:1px solid var(--line);margin:20px 0"><p class="muted">O progresso fica salvo neste navegador. Nenhuma conta é necessária.</p></aside>
    </div>`;
    bindCommon();
  }
  function lessonRow(l,i){
    const done=state.completedLessons.includes(l.id);
    return `<div class="lesson-row"><div class="lesson-index">${i+1}</div><div><h4>${escapeHTML(l.title)}</h4><p>${escapeHTML(l.duration)} · ${l.terms.length} conceitos-chave</p></div><div class="check ${done?'done':''}" aria-label="${done?'Concluída':'Pendente'}">${done?'✓':''}</div><button class="btn small" data-lesson="${l.id}">Abrir</button></div>`;
  }

  function renderLesson(){
    const found=lessonById(currentLessonId)||findNextLesson(); if(!found){setRoute('course');return}
    const {lesson,module}=found; currentLessonId=lesson.id;
    const all=COURSE_DATA.modules.flatMap(m=>m.lessons.map(l=>({lesson:l,module:m})));
    const idx=all.findIndex(x=>x.lesson.id===lesson.id); const prev=all[idx-1], next=all[idx+1];
    const done=state.completedLessons.includes(lesson.id);
    main.innerHTML = `<article class="lesson-page">
      <button class="btn small" data-route-go="course">← Voltar ao curso</button>
      <header class="lesson-top"><div><div class="eyebrow">Módulo ${module.number} · ${escapeHTML(module.period)}</div><h1>${escapeHTML(lesson.title)}</h1><p>${escapeHTML(lesson.intro)}</p></div><span class="pill">${escapeHTML(lesson.duration)}</span></header>
      ${lesson.sections.map(s=>`<section class="lesson-section"><h2>${escapeHTML(s[0])}</h2><p>${escapeHTML(s[1])}</p></section>`).join('')}
      <section class="lesson-section"><h2>Conceitos-chave</h2><div class="terms">${lesson.terms.map(t=>`<button class="pill" data-glossary="${escapeHTML(t)}">${escapeHTML(t)}</button>`).join('')}</div></section>
      <section class="lesson-section"><h2>Fechamento</h2><p>Conclua a aula quando você conseguir explicar, com suas próprias palavras, os processos principais e relacioná-los ao contexto do módulo.</p><button class="btn ${done?'':'primary'}" id="completeLesson">${done?'✓ Aula concluída':'Marcar aula como concluída'}</button> <button class="btn" id="practiceModule">Praticar módulo</button></section>
      <nav class="lesson-nav" aria-label="Navegação entre aulas"><div>${prev?`<button class="btn" data-lesson="${prev.lesson.id}">← ${escapeHTML(prev.lesson.title)}</button>`:''}</div><div>${next?`<button class="btn" data-lesson="${next.lesson.id}">${escapeHTML(next.lesson.title)} →</button>`:''}</div></nav>
    </article>`;
    bindCommon();
    $('#completeLesson').addEventListener('click',()=>{
      if(!state.completedLessons.includes(lesson.id)){state.completedLessons.push(lesson.id);saveState();toast('Aula marcada como concluída.');renderLesson();}
    });
    $('#practiceModule').addEventListener('click',()=>{activeActivityId=ACTIVITIES.find(a=>a.module===module.id)?.id; setRoute('activities');});
    $$('[data-glossary]').forEach(b=>b.addEventListener('click',()=>{setRoute('glossary');setTimeout(()=>{const q=$('#glossarySearch'); q.value=b.dataset.glossary; q.dispatchEvent(new Event('input'));},10);}));
  }

  function renderActivities(){
    const current=activityById(activeActivityId)||ACTIVITIES[0]; activeActivityId=current.id;
    const currentModule=moduleById(current.module);
    main.innerHTML = `<header class="page-head"><div class="eyebrow">Prática ativa</div><h1>Atividades interativas</h1><p>Exercícios curtos no estilo Wordwall, mas integrados ao conteúdo do curso. O feedback explica o raciocínio, em vez de apenas indicar certo ou errado.</p></header>
      <div class="activity-toolbar">
        <select id="moduleFilter" aria-label="Filtrar módulo"><option value="all">Todos os módulos</option>${COURSE_DATA.modules.map(m=>`<option value="${m.id}" ${m.id===current.module?'selected':''}>${m.number}. ${escapeHTML(m.title)}</option>`).join('')}</select>
        <button class="btn" id="randomActivity">Atividade aleatória</button><span class="pill">${state.completedActivities.length}/${ACTIVITIES.length} concluídas</span>
      </div>
      <div class="course-layout"><section id="activityStage">${activityHTML(current)}</section><aside class="panel"><h3>Banco de atividades</h3><p class="muted">${escapeHTML(currentModule.title)}</p><div class="lesson-list">${ACTIVITIES.filter(a=>a.module===current.module).map(a=>`<button class="option-btn ${state.completedActivities.includes(a.id)?'correct':''}" data-activity="${a.id}">${state.completedActivities.includes(a.id)?'✓ ':''}${escapeHTML(a.title)}</button>`).join('')}</div></aside></div>`;
    bindCommon(); bindActivity(current);
    $('#moduleFilter').addEventListener('change',e=>{const list=e.target.value==='all'?ACTIVITIES:ACTIVITIES.filter(a=>a.module===e.target.value);activeActivityId=list[0].id;renderActivities();});
    $('#randomActivity').addEventListener('click',()=>{const f=$('#moduleFilter').value;const list=f==='all'?ACTIVITIES:ACTIVITIES.filter(a=>a.module===f);activeActivityId=list[Math.floor(Math.random()*list.length)].id;renderActivities();});
    $$('[data-activity]').forEach(b=>b.addEventListener('click',()=>{activeActivityId=b.dataset.activity;renderActivities();}));
  }
  function activityHTML(a){
    const number=ACTIVITIES.indexOf(a)+1;
    return `<article class="activity-card"><div class="eyebrow">Atividade ${number}/${ACTIVITIES.length} · ${typeLabel(a.type)}</div><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.prompt)}</p><div id="activityBody">${activityBody(a)}</div><div id="activityFeedback"></div></article>`;
  }
  function typeLabel(t){return ({choice:'múltipla escolha',truefalse:'verdadeiro ou falso',match:'associação',sort:'ordenação'})[t]||t}
  function activityBody(a){
    if(a.type==='choice') return `<div class="options">${a.options.map((o,i)=>`<button class="option-btn" data-choice="${i}">${escapeHTML(o)}</button>`).join('')}</div>`;
    if(a.type==='truefalse') return `<div class="options"><button class="option-btn" data-tf="true">Verdadeiro</button><button class="option-btn" data-tf="false">Falso</button></div>`;
    if(a.type==='match') {
      matchState={left:null,right:null,solved:[]};
      const left=shuffle(a.pairs.map(p=>p[0])); const right=shuffle(a.pairs.map(p=>p[1]));
      return `<div class="match-grid"><div class="match-col">${left.map(x=>`<button class="match-item" data-match-left="${escapeHTML(x)}">${escapeHTML(x)}</button>`).join('')}</div><div class="match-col">${right.map(x=>`<button class="match-item" data-match-right="${escapeHTML(x)}">${escapeHTML(x)}</button>`).join('')}</div></div>`;
    }
    if(a.type==='sort'){
      sortState=shuffle([...a.items]); return sortHTML();
