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
