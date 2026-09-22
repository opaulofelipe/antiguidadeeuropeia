const COURSE_DATA = {
  meta: {
    title: 'Antiguidade Europeia',
    subtitle: 'Sociedades, poderes, conflitos e culturas do Bronze Final à Antiguidade Tardia',
    description: 'Um curso interativo que trata a Europa antiga como uma rede de sociedades conectadas ao Mediterrâneo, ao Mar Negro, ao norte da África e ao Oriente Próximo — sem reduzir o tema a uma sequência de "grandes civilizações".',
    version: '1.0.0'
  },
  modules: [
    {
      id: 'm1', number: 1, title: 'Como estudar a Antiguidade europeia', period: 'c. 2000 a.C.–500 d.C.',
      summary: 'Periodização, fontes, arqueologia e os problemas de projetar identidades nacionais modernas sobre sociedades antigas.',
      lessons: [
        { id:'m1l1', title:'O que chamamos de Antiguidade?', duration:'12 min', intro:'“Antiguidade” não é uma categoria usada pelos próprios antigos. É uma periodização construída por historiadores para organizar processos muito diferentes no tempo e no espaço.', sections:[
          ['Periodizar é interpretar','Na tradição escolar europeia, a Antiguidade costuma começar com a escrita e terminar com a deposição de Rômulo Augústulo em 476 d.C. Essas datas são úteis como referências, mas não funcionam igualmente para toda a Europa. Comunidades sem escrita coexistiram com cidades altamente letradas, e a transformação do Império Romano foi gradual, desigual e regional.'],
          ['Europa não era uma unidade','Gregos, romanos, etruscos, celtas, iberos, trácios, dácios e muitos outros grupos não pensavam em “Europa” como uma comunidade política ou cultural única. Redes marítimas, rotas fluviais, guerras, migrações, escravidão e comércio conectavam o continente a Anatólia, Levante, Egito e norte da África.'],
          ['Uma abordagem relacional','Em vez de estudar povos como caixas isoladas, este curso acompanha contatos, disputas, empréstimos culturais e assimetrias de poder. Isso ajuda a entender por que alfabetos, moedas, formas urbanas, cultos, tecnologias e instituições circularam sem produzir sociedades idênticas.']
        ], terms:['periodização','evidência','anacronismo','conectividade'] },
        { id:'m1l2', title:'Fontes: texto, objeto e paisagem', duration:'14 min', intro:'A História Antiga combina documentos escritos, arqueologia, epigrafia, numismática, iconografia, paleogenética e estudos ambientais.', sections:[
          ['Fontes não “falam” sozinhas','Uma inscrição pública, uma moeda ou uma crônica foi produzida em uma situação específica. Perguntar quem produziu, para quem, com que finalidade e em qual contexto é tão importante quanto ler o conteúdo.'],
          ['O silêncio documental','Grande parte da população antiga deixou poucos textos próprios. Mulheres, pessoas escravizadas, camponeses e grupos sem tradição escrita aparecem muitas vezes por meio de documentos produzidos por elites. A arqueologia pode ampliar — mas não eliminar — essas lacunas.'],
          ['Cruzar evidências','Um relato de guerra pode ser comparado a fortificações, cemitérios, destruições arqueológicas, moedas e inscrições. Quando fontes diferentes convergem, uma hipótese ganha força; quando divergem, o problema histórico fica mais interessante e exige cautela.']
        ], terms:['arqueologia','epigrafia','numismática','proveniência'] },
        { id:'m1l3', title:'Povos, etnias e identidades', duration:'13 min', intro:'Nomes como “celtas” ou “germanos” podem encobrir enorme diversidade. A linguagem das fontes antigas precisa ser tratada criticamente.', sections:[
          ['Rótulos antigos e modernos','Autores gregos e romanos classificavam populações externas com categorias próprias. “Bárbaro”, por exemplo, carregava uma oposição cultural. Usar esses termos sem crítica transforma o ponto de vista de uma fonte em descrição neutra.'],
          ['Identidade é situacional','Pertencimento podia envolver cidade, linhagem, língua, culto, comunidade militar, estatuto jurídico ou região. Uma mesma pessoa podia combinar várias identidades, e essas identidades mudavam ao longo da vida e das conjunturas políticas.'],
          ['Cuidado com nacionalismos retrospectivos','Projetar na Antiguidade as fronteiras e identidades dos Estados atuais distorce o passado. O estudo histórico deve trabalhar com os contextos próprios de cada sociedade, reconhecendo continuidades sem inventar equivalências diretas.']
        ], terms:['etnogênese','identidade','bárbaro','anacronismo'] }
      ]
    },
    {
      id:'m2', number:2, title:'Egeu na Idade do Bronze', period:'c. 3000–1100 a.C.',
      summary:'Cíclades, Creta minoica, mundo micênico e o colapso dos sistemas palacianos.',
      lessons:[
        {id:'m2l1',title:'Cíclades e Creta minoica',duration:'15 min',intro:'O Egeu da Idade do Bronze reuniu sociedades marítimas conectadas a Egito, Anatólia e Levante.',sections:[
          ['Redes insulares','As ilhas Cíclades ocuparam posição estratégica em rotas do Egeu. Objetos, metais e estilos artísticos mostram circulação intensa e especialização artesanal muito antes das pólis gregas.'],
          ['Palácios minoicos','Em Creta, centros como Cnossos, Festos e Mália organizaram produção, armazenagem, cerimônias e administração. O termo “palácio” não deve ser entendido apenas como residência real: eram complexos econômicos e rituais.'],
          ['Escrita e poder','A escrita Linear A, ainda não decifrada de modo conclusivo, revela administração complexa. A presença posterior da Linear B em Creta evidencia forte influência micênica.']
        ],terms:['Cnossos','Linear A','palácio','talassocracia']},
        {id:'m2l2',title:'Os micênicos',duration:'16 min',intro:'Entre os séculos XVI e XII a.C., centros fortificados do continente grego formaram sociedades palacianas hierarquizadas.',sections:[
          ['Centros fortificados','Micenas, Tirinto, Pilos e Tebas combinavam fortificações, armazéns, oficinas e estruturas palacianas. Túmulos monumentais e bens de prestígio revelam elites guerreiras.'],
          ['Linear B','Tabuinhas administrativas escritas em Linear B registram uma forma antiga da língua grega e permitem observar tributação, rebanhos, terras, ofícios e redistribuição de bens.'],
          ['Mediterrâneo conectado','Cerâmica micênica aparece muito além da Grécia, enquanto produtos de outras regiões chegavam aos palácios. O sistema dependia de redes marítimas amplas, não de isolamento continental.']
        ],terms:['Micenas','Linear B','wanax','redistribuição']},
        {id:'m2l3',title:'O colapso do Bronze Final',duration:'16 min',intro:'Por volta de 1200 a.C., muitos centros do Mediterrâneo oriental sofreram crises e destruições. Não existe uma causa única aceita.',sections:[
          ['Uma crise sistêmica','Mudanças climáticas, conflitos, deslocamentos populacionais, rebeliões internas, ruptura de rotas e fragilidade de sistemas palacianos são hipóteses que podem ter atuado em conjunto.'],
          ['Depois dos palácios','O desaparecimento da burocracia palaciana não significou o “fim da sociedade”. Algumas regiões diminuíram, outras se reorganizaram, e sítios como Lefkandi mostram contatos e diferenciação social no período posterior.'],
          ['Memória e épica','Séculos depois, poemas atribuídos a Homero transformaram lembranças, tradições orais e valores aristocráticos em narrativas épicas. Eles não são relatos jornalísticos da Idade do Bronze, mas são fontes essenciais para a cultura grega posterior.']
        ],terms:['Bronze Final','Lefkandi','tradição oral','colapso sistêmico']}
      ]
    },
    {
      id:'m3', number:3, title:'Grécia Arcaica: pólis e expansão', period:'c. 800–480 a.C.', summary:'Formação das pólis, colonização, cidadania, conflitos sociais e cultura arcaica.',
      lessons:[
        {id:'m3l1',title:'A formação da pólis',duration:'15 min',intro:'A pólis era uma comunidade política de cidadãos, território, cultos e instituições — não apenas uma cidade física.',sections:[
          ['Comunidade política','A pólis reunia centro urbano e território rural. A cidadania era restrita e variava entre cidades, mas envolvia participação em deveres militares, cultos e decisões coletivas.'],
          ['Conflitos internos','Disputas entre aristocratas, pequenos proprietários, devedores e novos grupos enriquecidos impulsionaram reformas, leis escritas e, em algumas cidades, tiranias.'],
          ['Hoplitismo e política','A expansão da infantaria hoplítica foi relacionada à ascensão de proprietários capazes de arcar com armamento. Hoje, historiadores discutem até que ponto a mudança militar causou — ou apenas acompanhou — transformações políticas.']
        ],terms:['pólis','cidadania','hoplita','tirania']},
        {id:'m3l2',title:'Colonização e redes mediterrânicas',duration:'14 min',intro:'Entre os séculos VIII e VI a.C., comunidades gregas fundaram assentamentos do Mar Negro à Península Ibérica.',sections:[
          ['Por que fundar colônias?','Pressões por terra, conflitos políticos, oportunidades comerciais e estratégias locais variavam de caso a caso. Não houve um único “projeto colonial grego”.'],
