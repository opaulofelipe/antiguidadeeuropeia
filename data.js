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
          ['Guerras samnitas','Nos séculos IV e III a.C., Roma enfrentou os samnitas em conflitos prolongados pelo controle da Itália central e meridional. A vitória romana foi gradual e custosa.'],
          ['Alianças e incorporação','Roma combinou conquista, tratados, colônias, cidadania em graus distintos e redes viárias. Esse modelo flexível ajudou a mobilizar recursos humanos muito superiores aos de uma única cidade.']
        ],terms:['samnitas','foedus','colônia','socii']},
        {id:'m6l3',title:'Roma: monarquia, república e memória',duration:'16 min',intro:'A tradição situa a fundação de Roma em 753 a.C., mas a arqueologia mostra formação urbana gradual.',sections:[
          ['Do mito à arqueologia','Narrativas de Rômulo, Remo e reis preservam memórias e ideologias posteriores. O sítio de Roma revela ocupação antiga e integração progressiva de assentamentos ao redor do Tibre.'],
          ['A República','A tradição data a expulsão do último rei em 509 a.C. A ordem republicana dividia poder entre magistraturas, Senado e assembleias, mas era dominada inicialmente por aristocracias.'],
          ['Conflito das ordens','As tensões entre patrícios e plebeus produziram mudanças como tribunos da plebe, Lei das Doze Tábuas e acesso gradual a magistraturas. O processo foi longo e não eliminou desigualdades.']
        ],terms:['Rômulo','República','patrícios','tribunos da plebe']}
      ]
    },
    {
      id:'m7', number:7, title:'República Romana e expansão', period:'264–27 a.C.', summary:'Guerras Púnicas, expansão mediterrânica, escravidão, conflitos sociais e guerras civis.',
      lessons:[
        {id:'m7l1',title:'Guerras Púnicas e conquista do Mediterrâneo',duration:'18 min',intro:'O conflito entre Roma e Cartago transformou uma potência itálica em potência mediterrânica.',sections:[
          ['Primeira Guerra Púnica','A disputa pela Sicília obrigou Roma a desenvolver grande capacidade naval. A vitória abriu caminho para províncias fora da Itália.'],
          ['Aníbal e a Segunda Guerra','Aníbal atravessou os Alpes e derrotou exércitos romanos, inclusive em Canas. Roma resistiu, explorou sua rede de aliados e levou a guerra à África, onde Cipião venceu em Zama.'],
          ['Consequências','A expansão trouxe riqueza, escravizados, terras e oportunidades políticas, mas também agravou competição aristocrática e desigualdades. Guerras externas e crise interna tornaram-se inseparáveis.']
        ],terms:['Cartago','Aníbal','Canas','Zama']},
        {id:'m7l2',title:'Sociedade, escravidão e conflito agrário',duration:'18 min',intro:'A expansão republicana alterou profundamente trabalho, propriedade e relações sociais.',sections:[
          ['Escravidão em escala','Prisioneiros de guerra alimentaram mercados de escravizados. O trabalho compulsório existiu em casas, minas, oficinas e propriedades rurais, com enorme variedade de condições.'],
          ['Os Gracos','Tibério e Caio Graco propuseram reformas agrárias e outras medidas em meio a forte conflito político. Ambos morreram violentamente, sinalizando a normalização da violência na disputa interna.'],
          ['Aliados itálicos','Comunidades aliadas forneciam soldados sem possuir sempre os mesmos direitos políticos dos cidadãos romanos. A Guerra Social levou à extensão ampla da cidadania pela Itália.']
        ],terms:['latifúndio','Gracos','Guerra Social','manumissão']},
        {id:'m7l3',title:'Guerras civis e fim da República',duration:'19 min',intro:'No século I a.C., exércitos, patronagem e competição entre elites romperam limites institucionais.',sections:[
          ['Mário e Sula','Conflitos entre facções culminaram em marchas armadas sobre Roma, proscrições e ditadura de Sula. A violência política passou a operar em escala inédita.'],
          ['César e Pompeu','A aliança entre César, Pompeu e Crasso se desfez. César cruzou o Rubicão, derrotou Pompeu e acumulou poderes antes de ser assassinado em 44 a.C.'],
          ['Otaviano e Antônio','Nova guerra civil terminou com a vitória de Otaviano em Ácio, em 31 a.C. Em 27 a.C., ele recebeu o título de Augusto e inaugurou uma nova estrutura monárquica sob linguagem republicana.']
        ],terms:['proscrição','Rubicão','Júlio César','Ácio']}
      ]
    },
    {
      id:'m8', number:8, title:'O Principado romano', period:'27 a.C.–235 d.C.', summary:'Augusto, administração imperial, cidades, economia, exército, religião e vida cotidiana.',
      lessons:[
        {id:'m8l1',title:'Augusto e a nova ordem imperial',duration:'18 min',intro:'Augusto evitou o título de rei, mas concentrou poderes militares, políticos e religiosos.',sections:[
          ['Monarquia sem nome de monarquia','O princeps apresentava-se como primeiro entre cidadãos, enquanto controlava províncias estratégicas, exércitos e sucessão. A linguagem republicana ajudava a legitimar uma realidade nova.'],
          ['Propaganda e urbanismo','Moedas, monumentos, literatura e rituais apresentavam a nova ordem como restauração da paz. A Ara Pacis e fóruns imperiais articulavam espaço urbano e ideologia.'],
          ['Sucessão','A ausência de uma regra constitucional clara tornava sucessões delicadas. Dinastias, adoções, apoio militar e reconhecimento senatorial se combinaram de formas diferentes.']
        ],terms:['princeps','Augusto','Ara Pacis','Pax Romana']},
        {id:'m8l2',title:'Províncias, cidades e cidadania',duration:'17 min',intro:'O Império Romano governava vastos territórios por meio de cidades, elites locais, exército e tributação.',sections:[
          ['Governar à distância','Roma não possuía uma burocracia comparável à de Estados modernos. Governadores e procuradores dependiam de elites municipais, contratos, censos e redes locais.'],
          ['Romanização em debate','“Romanização” já foi entendida como difusão unilateral da cultura romana. Hoje, prefere-se analisar apropriações, negociações, resistências e identidades provinciais múltiplas.'],
          ['Cidadania em expansão','O estatuto de cidadão se ampliou gradualmente. Em 212 d.C., a Constitutio Antoniniana concedeu cidadania romana à maioria dos habitantes livres do império.']
        ],terms:['província','municipium','romanização','Constitutio Antoniniana']},
        {id:'m8l3',title:'Economia, escravidão e vida cotidiana',duration:'18 min',intro:'O Mediterrâneo romano integrava regiões por impostos, mercados, transporte marítimo e redes urbanas.',sections:[
          ['Produção e comércio','Grãos, vinho, azeite, cerâmica, metais e outros produtos circularam em grande escala. Ânforas, naufrágios e resíduos portuários ajudam a reconstruir essas rotas.'],
          ['Trabalho livre e não livre','Pessoas escravizadas, libertas, camponeses, artesãos, soldados e comerciantes participavam de uma economia heterogênea. Não existe um único “modelo” de trabalho romano.'],
          ['Cidade e desigualdade','Aquedutos, banhos, anfiteatros e fóruns conviviam com habitação precária, incêndios, dependência de abastecimento e forte hierarquia social. A monumentalidade não deve esconder a desigualdade.']
        ],terms:['ânfora','liberto','annona','insula']}
      ]
    },
    {
      id:'m9', number:9, title:'Europa além das cidades greco-romanas', period:'c. 800 a.C.–200 d.C.', summary:'Celtas, iberos, lusitanos, trácios, dácios, ilírios e povos germânicos em seus próprios contextos.',
      lessons:[
        {id:'m9l1',title:'Celtas: uma categoria complexa',duration:'18 min',intro:'“Celta” descreve fenômenos linguísticos e arqueológicos amplos, mas não um povo politicamente unificado.',sections:[
          ['Hallstatt e La Tène','Arqueólogos usam esses termos para conjuntos materiais da Idade do Ferro na Europa central e ocidental. Objetos semelhantes não provam identidade política única.'],
          ['Elites e redes','Sepultamentos ricos, fortalezas e importações mediterrânicas mostram elites conectadas a longas rotas comerciais. Vinho e objetos de prestígio circularam para além do mundo greco-romano.'],
          ['Conquista romana','A expansão romana na Gália e em outras regiões reconfigurou comunidades locais. A resistência de Vercingetórix é conhecida sobretudo por fontes romanas, que precisam ser lidas criticamente.']
        ],terms:['Hallstatt','La Tène','oppidum','Vercingetórix']},
        {id:'m9l2',title:'Península Ibérica: iberos, celtiberos e lusitanos',duration:'17 min',intro:'A Península Ibérica reunia sociedades diversas, conectadas a fenícios, gregos, cartagineses e romanos.',sections:[
          ['Diversidade regional','Iberos ocupavam sobretudo leste e sul; comunidades chamadas celtiberas viviam em áreas interiores; lusitanos e outros grupos ocupavam o oeste e noroeste. Os nomes vêm em grande parte de autores externos.'],
