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
          ['Contato e conflito','Novos assentamentos negociaram, guerrearam e misturaram práticas com populações locais. Cerâmicas e alfabetos circularam em ambientes culturalmente híbridos.'],
          ['Magna Grécia','No sul da Itália e Sicília, cidades como Tarento, Siracusa e Síbaris tornaram-se importantes centros políticos e econômicos. A presença grega influenciou profundamente a história itálica.']
        ],terms:['apoikia','metrópole','Magna Grécia','Mar Negro']},
        {id:'m3l3',title:'Atenas e Esparta antes das Guerras Médicas',duration:'17 min',intro:'Atenas e Esparta desenvolveram instituições muito diferentes, ambas baseadas em fortes exclusões sociais.',sections:[
          ['Atenas e as reformas','Sólon enfrentou endividamento e tensões sociais; Clístenes reorganizou corpos cívicos e instituições, contribuindo para uma democracia que se consolidaria no século V a.C.'],
          ['Esparta e o sistema lacedemônio','A sociedade espartana distinguia esparciatas, periecos e hilotas. A cidadania plena dependia de educação militar e participação em refeições coletivas, sustentadas pelo trabalho de populações subordinadas.'],
          ['Comparar sem caricaturar','Atenas não era uma democracia universal, e Esparta não era apenas um “quartel”. Ambas tinham instituições complexas, conflitos internos, desigualdades e transformações históricas.']
        ],terms:['Sólon','Clístenes','hilotas','ephoroi']}
      ]
    },
    {
      id:'m4', number:4, title:'Grécia Clássica', period:'480–323 a.C.', summary:'Guerras Médicas, democracia ateniense, imperialismo, Guerra do Peloponeso e hegemonias do século IV.',
      lessons:[
        {id:'m4l1',title:'Guerras Médicas e hegemonia ateniense',duration:'17 min',intro:'As guerras entre cidades gregas e o Império Aquemênida alteraram o equilíbrio político do Egeu.',sections:[
          ['Uma guerra desigual, não simples','O Império Persa possuía recursos muito superiores, mas a geografia, as alianças e as escolhas estratégicas gregas foram decisivas em batalhas como Maratona, Salamina e Plateia.'],
          ['Liga de Delos','Criada para continuar a guerra contra os persas, a liga passou progressivamente à liderança coercitiva de Atenas. Tributos financiaram frota, obras e poder imperial.'],
          ['Democracia e império','A democracia ateniense coexistiu com escravidão, exclusão feminina, limitação a cidadãos homens e dominação de aliados. Esse contraste é central para compreender a experiência política ateniense.']
        ],terms:['Maratona','Salamina','Liga de Delos','tributo']},
        {id:'m4l2',title:'Democracia ateniense e sociedade',duration:'18 min',intro:'A democracia direta ateniense exigia participação intensa, mas definia de forma estreita quem podia participar.',sections:[
          ['Instituições','A Assembleia votava decisões; o Conselho dos Quinhentos preparava pautas; magistraturas podiam ser sorteadas ou eleitas; tribunais populares mobilizavam grande número de cidadãos.'],
          ['Trabalho e desigualdade','A economia incluía pequenos produtores, artesãos, comerciantes, metecos e grande número de pessoas escravizadas. A participação cívica de alguns dependia de uma sociedade profundamente desigual.'],
          ['Cultura pública','Teatro, festivais, retórica, filosofia e monumentos estavam ligados à vida cívica. A cultura clássica foi também um campo de disputa sobre guerra, gênero, poder e moralidade.']
        ],terms:['ekklesia','boulé','meteco','ostracismo']},
        {id:'m4l3',title:'Guerra do Peloponeso e crise das hegemonias',duration:'18 min',intro:'A rivalidade entre Atenas e Esparta desencadeou um conflito longo e destrutivo entre 431 e 404 a.C.',sections:[
          ['Sistemas de alianças','A Liga de Delos e a Liga do Peloponeso estruturavam rivalidades. O conflito envolveu recursos navais, terrestres, revoltas, epidemias, intervenções persas e mudanças de alianças.'],
          ['Depois de 404 a.C.','A vitória espartana não produziu estabilidade. Tebas, Atenas, Esparta e outras cidades disputaram hegemonia, enquanto a Pérsia continuou interferindo na política grega.'],
          ['Ascensão macedônica','Filipe II reformou o exército, explorou divisões entre as cidades e venceu em Queroneia, em 338 a.C. A Macedônia passou a dominar o sistema político grego.']
        ],terms:['Peloponeso','hegemonia','Queroneia','Filipe II']}
      ]
    },
    {
      id:'m5', number:5, title:'Macedônia e mundo helenístico', period:'359–31 a.C.', summary:'Filipe II, Alexandre, reinos helenísticos e transformações culturais que repercutiram na Europa.',
      lessons:[
        {id:'m5l1',title:'Filipe II e Alexandre',duration:'16 min',intro:'A Macedônia converteu recursos, diplomacia e inovação militar em hegemonia sobre a Grécia.',sections:[
          ['Reformas macedônicas','Filipe II combinou falange armada com sarissas, cavalaria, infantaria especializada, cerco e diplomacia. Seu poder foi resultado de um sistema, não de uma única arma.'],
          ['Conquistas de Alexandre','Alexandre destruiu o Império Aquemênida e chegou ao noroeste do subcontinente indiano. O império foi rápido e vasto, mas politicamente frágil após sua morte em 323 a.C.'],
          ['Construindo legitimidade','Alexandre adotou práticas locais e símbolos diversos em diferentes regiões. Essas escolhas geraram tensões entre elites macedônicas e mostram que conquista exigia negociação cultural.']
        ],terms:['sarissa','heteroi','Alexandre','Aquemênidas']},
        {id:'m5l2',title:'Os reinos helenísticos',duration:'15 min',intro:'Depois de Alexandre, generais e dinastias disputaram seu legado e criaram novos Estados.',sections:[
          ['Diádocos','Ptolomeus no Egito, Selêucidas em grande parte da Ásia e Antigônidas na Macedônia foram algumas das principais dinastias. Fronteiras mudaram repetidamente.'],
          ['Cidades e circulação','Fundação e expansão de cidades facilitaram administração, comércio e difusão da língua grega koiné. Isso não apagou línguas e culturas locais; produziu combinações variadas.'],
          ['A Europa helenística','Macedônia, Grécia, Epiro, Trácia e o Adriático continuaram em intensa disputa. Roma, inicialmente uma potência itálica, acabaria intervindo e submetendo os reinos macedônicos.']
        ],terms:['diádocos','koiné','Antigônidas','sincretismo']},
        {id:'m5l3',title:'Cultura helenística',duration:'14 min',intro:'O período helenístico ampliou redes intelectuais e artísticas em um espaço político fragmentado.',sections:[
          ['Novos centros','Alexandria, Pérgamo e Rodes juntaram bibliotecas, cortes, cientistas, artistas e mercados. Atenas continuou importante, mas já não monopolizava a produção intelectual grega.'],
          ['Filosofias para um mundo instável','Estoicismo e epicurismo formularam respostas diferentes para ética, felicidade e vida em comunidade. O ceticismo também ganhou força.'],
          ['Arte e poder','Escultura, arquitetura e urbanismo exploraram dramatização, monumentalidade e representação de múltiplos grupos sociais. A produção artística estava ligada à competição dinástica.']
        ],terms:['estoicismo','epicurismo','Pérgamo','cosmopolitismo']}
      ]
    },
    {
      id:'m6', number:6, title:'Itália antes da hegemonia romana', period:'c. 1000–264 a.C.', summary:'Etruscos, latinos, samnitas, gregos da Itália e a formação de Roma em um mosaico regional.',
      lessons:[
        {id:'m6l1',title:'Etruscos e a Itália central',duration:'17 min',intro:'As cidades etruscas formaram uma das culturas urbanas mais influentes da Itália pré-romana.',sections:[
          ['Cidades e elites','Tarquinia, Veios, Cerveteri e outras cidades possuíam aristocracias poderosas, redes comerciais e tradições religiosas próprias. Não existiu um “Império Etrusco” centralizado.'],
          ['Contato mediterrânico','Arte e escrita etruscas mostram contatos com gregos, fenícios e povos itálicos. O alfabeto etrusco foi adaptado de modelos gregos e influenciou alfabetos posteriores na península.'],
          ['Relações com Roma','Tradições romanas lembravam reis de origem etrusca. Mesmo quando Roma se expandiu sobre cidades etruscas, elementos religiosos, políticos e artísticos continuaram influentes.']
        ],terms:['Etrúria','Veios','Tarquinia','haruspício']},
        {id:'m6l2',title:'Samnitas, latinos e outros povos itálicos',duration:'15 min',intro:'A península Itálica era linguisticamente e politicamente plural.',sections:[
          ['Mosaico itálico','Latinos, sabinos, oscos, úmbrios, samnitas, volscos e outros grupos ocupavam territórios próximos, frequentemente organizados em cidades, comunidades rurais e ligas.'],
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
          ['Colonização mediterrânica','Fenícios e gregos estabeleceram entrepostos e cidades costeiras. Cartago ampliou presença na península antes da Segunda Guerra Púnica. Metais e produtos agrícolas eram importantes nas trocas.'],
          ['Conquista longa','A submissão romana levou gerações. Guerras contra lusitanos e celtiberos, como o cerco de Numância, mostram que a expansão foi fragmentada e contestada.']
        ],terms:['ibero','celtibero','lusitano','Numância']},
        {id:'m9l3',title:'Bálcãs, Dácia e povos germânicos',duration:'18 min',intro:'Trácios, ilírios, dácios e grupos germânicos formaram sociedades variadas nas fronteiras e além delas.',sections:[
          ['Trácios e ilírios','Esses rótulos cobrem várias comunidades dos Bálcãs. Reinos, chefias, cidades e contatos com gregos e macedônicos coexistiram em diferentes épocas.'],
          ['Dácia','Ao norte do Danúbio, o reino de Decébalo tornou-se rival de Roma. Trajano conquistou parte da Dácia em 106 d.C.; a região era valorizada também por seus recursos minerais.'],
          ['“Germanos”','Autores romanos agrupavam diferentes povos sob essa categoria. Relações de comércio, serviço militar, diplomacia e guerra atravessavam a fronteira do Reno e do Danúbio.']
        ],terms:['Trácios','Dácia','Decébalo','limes']}
      ]
    },
    {
      id:'m10', number:10, title:'Sociedade, gênero, religião e cultura', period:'Antiguidade comparada', summary:'Estruturas sociais, família, escravidão, religião, educação e produção cultural em perspectiva comparada.',
      lessons:[
        {id:'m10l1',title:'Família, gênero e cidadania',duration:'18 min',intro:'Normas de gênero e família variavam, mas sociedades antigas eram marcadamente hierárquicas.',sections:[
          ['Casa e poder','O oikos grego e a domus romana articulavam parentesco, patrimônio, trabalho e autoridade. A casa era uma unidade econômica e política, não apenas privada.'],
          ['Mulheres e agência','A exclusão formal de instituições políticas não significa ausência de ação social. Mulheres podiam exercer papéis religiosos, econômicos, familiares e, em contextos específicos, políticos.'],
          ['Lei e estatuto','Direitos dependiam de cidadania, liberdade, idade, sexo e posição familiar. Comparar sociedades exige evitar a ideia de uma única “condição feminina” ou “família antiga”.']
        ],terms:['oikos','domus','paterfamilias','estatuto']},
        {id:'m10l2',title:'Religiões antigas',duration:'17 min',intro:'Religião antiga estava profundamente integrada à vida cívica, doméstica e política.',sections:[
          ['Culto antes de dogma','Em muitos contextos greco-romanos, práticas rituais, sacrifícios, festivais e obrigações comunitárias importavam mais do que adesão a um credo único.'],
          ['Sincretismos e traduções','Deuses podiam ser identificados, aproximados ou reinterpretados entre sociedades. Isso não significa que todas as divindades fossem consideradas idênticas.'],
          ['Cultos e império','O culto imperial ajudou a expressar lealdade política em muitas províncias. Judaísmo e cristianismo criaram tensões específicas por suas próprias tradições e formas de exclusividade religiosa.']
        ],terms:['culto cívico','sacrifício','sincretismo','culto imperial']},
        {id:'m10l3',title:'Conhecimento, educação e memória',duration:'17 min',intro:'A produção intelectual antiga esteve ligada a escolas, patronos, cidades e redes de circulação.',sections:[
          ['Oralidade e escrita','Mesmo em sociedades letradas, leitura pública, memorização e performance oral permaneceram centrais. A alfabetização era desigual e variava muito por região e grupo social.'],
          ['Educação','Em contextos gregos e romanos, elites valorizavam gramática, retórica, literatura e filosofia. A educação era também mecanismo de distinção social.'],
          ['Memória política','Monumentos, funerais, calendários e narrativas do passado ajudavam comunidades a produzir identidades. Controlar a memória podia ser uma forma de controlar legitimidade.']
        ],terms:['retórica','paideia','patronato','memória coletiva']}
      ]
    },
    {
      id:'m11', number:11, title:'Fronteiras, exército e integração imperial', period:'séculos I–III d.C.', summary:'Legiões, auxiliares, limes, mobilidade e transformações nas províncias europeias.',
      lessons:[
        {id:'m11l1',title:'O exército romano',duration:'18 min',intro:'O exército era instrumento de conquista, defesa, mobilidade social e circulação cultural.',sections:[
          ['Legiões e auxiliares','Legionários eram cidadãos; tropas auxiliares recrutavam muitos não cidadãos. Ao final do serviço, auxiliares podiam receber cidadania, integrando famílias e comunidades ao sistema imperial.'],
          ['Mais que combate','Soldados construíam estradas, fortes e infraestrutura, movimentavam salários e abastecimento e formavam comunidades nas fronteiras.'],
          ['Política imperial','Exércitos podiam decidir sucessões. O chamado “Ano dos Quatro Imperadores”, em 69 d.C., mostrou como a lealdade das tropas era decisiva para o poder.']
        ],terms:['legião','auxilia','diploma militar','castrum']},
        {id:'m11l2',title:'Reno, Danúbio e o limes',duration:'17 min',intro:'Fronteira romana não era uma muralha contínua e impermeável.',sections:[
          ['Zonas de contato','Fortes, rios, estradas e postos de controle regulavam movimentos, mas comércio, migração, diplomacia e contrabando atravessavam as fronteiras.'],
          ['Britânia','A muralha de Adriano organizava circulação e presença militar no norte da província. Seu objetivo era controle territorial, não separar dois mundos completamente isolados.'],
          ['Danúbio','O corredor danubiano conectava províncias, exércitos e mercados. Também foi palco recorrente de guerras com dácios, sármatas, godos e outros grupos.']
        ],terms:['limes','Muralha de Adriano','Reno','Danúbio']},
        {id:'m11l3',title:'Mobilidade e identidades provinciais',duration:'16 min',intro:'O Império Romano colocou pessoas de regiões distantes em contato cotidiano.',sections:[
          ['Soldados e migrantes','Unidades militares podiam servir longe de sua região de origem. Comerciantes, escravizados, administradores e famílias também atravessavam o império.'],
          ['Culturas locais','Inscrições mostram nomes, deuses e línguas locais convivendo com práticas romanas. Identidade provincial podia ser simultaneamente local e imperial.'],
          ['Cidades como nós','Cidades organizavam tributação, cultos, mercados e status cívico. Em algumas regiões, sua expansão mudou profundamente formas anteriores de organização do território.']
        ],terms:['mobilidade','provincial','epigrafia','civitas']}
      ]
    },
    {
      id:'m12', number:12, title:'Crise e Antiguidade Tardia', period:'235–500 d.C.', summary:'Crise do século III, reformas, cristianização, migrações e transformação do Império Romano no Ocidente.',
      lessons:[
        {id:'m12l1',title:'A crise do século III',duration:'18 min',intro:'Entre 235 e 284 d.C., o império enfrentou sucessões rápidas, guerras civis, invasões, epidemias e dificuldades fiscais.',sections:[
          ['Crise política','Vários imperadores chegaram ao poder com apoio militar e foram derrubados rapidamente. Regiões chegaram a formar poderes separados, como o chamado Império Gálico.'],
          ['Pressões múltiplas','A fronteira persa no Oriente e grupos além do Reno e Danúbio pressionaram o império. Problemas monetários e epidemias agravaram a instabilidade.'],
          ['Capacidade de recuperação','O século III não foi apenas “decadência”. O Estado reorganizou exército, fiscalidade e administração, preparando reformas posteriores.']
        ],terms:['anarquia militar','Império Gálico','Aureliano','inflação']},
        {id:'m12l2',title:'Diocleciano, Constantino e cristianização',duration:'19 min',intro:'As reformas do final do século III e início do IV alteraram a estrutura do governo imperial.',sections:[
          ['Tetrarquia','Diocleciano tentou dividir responsabilidades entre governantes para responder melhor às crises. A experiência reduziu distâncias administrativas, mas não eliminou disputas sucessórias.'],
          ['Constantino','Constantino venceu rivais, reunificou o império e fundou Constantinopla como nova capital imperial. Seu apoio ao cristianismo transformou relações entre religião e Estado.'],
          ['Cristianização desigual','O cristianismo cresceu por redes urbanas, patronagem, instituições e decisões imperiais. Práticas tradicionais continuaram por muito tempo; a mudança foi gradual e conflitiva.']
        ],terms:['Tetrarquia','Constantino','Constantinopla','cristianização']},
        {id:'m12l3',title:'476 e a transformação do Ocidente',duration:'20 min',intro:'A deposição de Rômulo Augústulo em 476 é uma referência simbólica, não um “apagão” instantâneo da civilização romana.',sections:[
          ['Migrações e federações','Godos, vândalos, suevos, burgúndios e outros grupos entraram no império em circunstâncias diversas: invasão, migração, recrutamento, alianças e assentamentos negociados.'],
          ['Reinos pós-romanos','Novos reis utilizaram instituições, leis, elites e símbolos romanos. Na Itália ostrogoda, por exemplo, administração romana continuou coexistindo com poder militar godo.'],
          ['Continuidade e ruptura','O desaparecimento do imperador no Ocidente mudou a política, mas cidades, Igreja, latim, direito, fiscalidade e hierarquias sociais não desapareceram de uma vez. A Antiguidade Tardia é melhor entendida como transformação histórica.']
        ],terms:['foederati','Ostrogodos','476','Antiguidade Tardia']}
      ]
    }
  ],
  glossary: [
    ['Anacronismo','Aplicação indevida de conceitos, valores ou instituições de uma época a outra.'],
    ['Apoikia','Termo grego para assentamento fundado por uma comunidade de origem; não equivale exatamente ao colonialismo moderno.'],
    ['Boulé','Conselho cívico; em Atenas clássica, o Conselho dos Quinhentos preparava assuntos para a Assembleia.'],
    ['Civitas','Pode indicar cidadania, comunidade cívica ou unidade político-administrativa, conforme o contexto romano.'],
    ['Diádocos','Generais e sucessores que disputaram o império de Alexandre após 323 a.C.'],
    ['Ekklesia','Assembleia dos cidadãos em várias pólis gregas; em Atenas, principal espaço de decisão política direta.'],
    ['Epigrafia','Estudo histórico de inscrições gravadas em pedra, metal, cerâmica e outros suportes duráveis.'],
    ['Etnogênese','Processo histórico de formação e transformação de identidades coletivas.'],
    ['Foederati','Grupos vinculados ao Império Romano por tratados militares e políticos, especialmente na Antiguidade Tardia.'],
    ['Hegemonia','Predominância política ou militar de uma potência sobre outras sem necessariamente implicar anexação direta.'],
    ['Koiné','Forma comum da língua grega difundida amplamente no período helenístico.'],
    ['Limes','Sistema de fronteira romano composto por fortes, estradas, rios, muralhas e zonas controladas; não apenas uma linha fixa.'],
    ['Numismática','Estudo de moedas e sistemas monetários como fontes históricas.'],
    ['Oppidum','Termo latino aplicado a grandes assentamentos fortificados, especialmente na Europa da Idade do Ferro.'],
    ['Pólis','Comunidade política grega que integrava corpo cívico, instituições, território e cultos.'],
    ['Princeps','“Primeiro cidadão”; título e linguagem política usados pelos imperadores do início do Principado.'],
    ['Romanização','Conceito historiográfico para mudanças sob domínio romano; hoje usado com cautela para evitar a ideia de assimilação unilateral.'],
    ['Sincretismo','Combinação, aproximação ou reelaboração de elementos religiosos e culturais de tradições diferentes.'],
    ['Tetrarquia','Sistema criado por Diocleciano com múltiplos governantes para administrar o império.'],
    ['Wanax','Título do governante em documentos micênicos em Linear B.']
  ],
  timeline: [
    [-1600,'Ascensão dos centros micênicos no continente grego'],[-1450,'Forte presença micênica em Creta'],[-1200,'Crises do Bronze Final e destruição de vários centros palacianos'],[-800,'Consolidação de pólis e expansão das redes gregas'],[-594,'Reformas atribuídas a Sólon em Atenas'],[-508,'Reformas de Clístenes em Atenas'],[-490,'Batalha de Maratona'],[-480,'Batalha de Salamina'],[-431,'Início da Guerra do Peloponeso'],[-404,'Derrota de Atenas por Esparta'],[-338,'Filipe II vence em Queroneia'],[-323,'Morte de Alexandre'],[-509,'Data tradicional da criação da República Romana'],[-396,'Roma conquista Veios'],[-264,'Início da Primeira Guerra Púnica'],[-218,'Início da Segunda Guerra Púnica'],[-146,'Destruição de Cartago e Corinto'],[-91,'Início da Guerra Social na Itália'],[-49,'César cruza o Rubicão'],[-44,'Assassinato de Júlio César'],[-31,'Batalha de Ácio'],[-27,'Otaviano recebe o título de Augusto'],[43,'Conquista romana da Britânia iniciada sob Cláudio'],[69,'Ano dos Quatro Imperadores'],[106,'Trajano conquista parte da Dácia'],[212,'Constitutio Antoniniana amplia a cidadania'],[235,'Início convencional da crise do século III'],[284,'Ascensão de Diocleciano'],[313,'Acordos de Milão e tolerância ao cristianismo'],[330,'Dedicação de Constantinopla'],[378,'Batalha de Adrianópolis'],[410,'Saque de Roma pelos visigodos'],[476,'Deposição de Rômulo Augústulo no Ocidente']
  ],
  sources: [
    {name:'Metropolitan Museum of Art — Heilbrunn Timeline of Art History',note:'Cronologias e ensaios sobre mundo egeu, Grécia, Itália, Roma e arte do Mediterrâneo antigo.'},
    {name:'British Museum',note:'Coleções e materiais de referência sobre sociedades da Idade do Ferro, mundo romano e contatos culturais.'},
    {name:'Oxford Classical Dictionary',note:'Obra de referência acadêmica para instituições, pessoas, conceitos e cronologias do mundo clássico.'},
    {name:'The Cambridge Ancient History',note:'Síntese acadêmica multivolume para história política, social, econômica e cultural da Antiguidade.'},
    {name:'W3C — Web Content Accessibility Guidelines (WCAG) 2.2',note:'Referência de acessibilidade usada no desenho das interações.'},
    {name:'Nielsen Norman Group',note:'Referências de usabilidade, especialmente hierarquia, feedback e divulgação progressiva de complexidade.'}
  ]
};

const ACTIVITIES = [
  {id:'a1',module:'m1',type:'choice',title:'Periodização sob crítica',prompt:'Qual afirmação melhor representa a abordagem histórica do curso?',options:['476 encerrou a Antiguidade de forma igual em toda a Europa.','A Antiguidade é uma periodização útil, mas suas fronteiras variam conforme o problema histórico.','A escrita separa de forma absoluta povos históricos e pré-históricos.','Europa antiga era uma unidade cultural consciente de si.'],answer:1,explain:'Periodizações são ferramentas analíticas. Datas de corte ajudam a organizar, mas não descrevem transições simultâneas em todas as regiões.'},
  {id:'a2',module:'m1',type:'sort',title:'Método histórico',prompt:'Ordene uma sequência plausível de trabalho com uma fonte.',items:['Contextualizar quem produziu e para quem','Descrever o documento ou objeto','Comparar com outras evidências','Formular uma interpretação provisória'],answer:['Descrever o documento ou objeto','Contextualizar quem produziu e para quem','Comparar com outras evidências','Formular uma interpretação provisória']},
  {id:'a3',module:'m1',type:'match',title:'Ferramentas do historiador',prompt:'Associe cada campo ao objeto principal.',pairs:[['Epigrafia','inscrições'],['Numismática','moedas'],['Arqueologia','cultura material e contextos'],['Paleografia','formas de escrita manuscrita']]},
  {id:'a4',module:'m1',type:'truefalse',title:'Identidades antigas',prompt:'“Celtas” designa necessariamente um único povo com Estado, língua e identidade política comum.',answer:false,explain:'O termo cobre fenômenos linguísticos e culturais diversos; não existiu um Estado celta unificado.'},

  {id:'a5',module:'m2',type:'choice',title:'Palácios minoicos',prompt:'Qual descrição é mais adequada?',options:['Eram apenas residências privadas de reis.','Funcionavam como complexos administrativos, econômicos e rituais.','Eram fortalezas romanas adaptadas.','Foram construídos depois de Alexandre.'],answer:1,explain:'Os complexos palacianos de Creta articulavam armazenagem, produção, administração e ritual.'},
  {id:'a6',module:'m2',type:'match',title:'Egeu do Bronze',prompt:'Associe.',pairs:[['Linear A','escrita minoica ainda não plenamente decifrada'],['Linear B','registro de uma forma antiga do grego'],['Micenas','centro palaciano fortificado'],['Cnossos','grande centro palaciano de Creta']]},
  {id:'a7',module:'m2',type:'sort',title:'Sequência egeia',prompt:'Ordene do mais antigo ao mais recente.',items:['Colapso dos palácios micênicos','Apogeu micênico','Grandes palácios minoicos','Período pós-palacial'],answer:['Grandes palácios minoicos','Apogeu micênico','Colapso dos palácios micênicos','Período pós-palacial']},
  {id:'a8',module:'m2',type:'choice',title:'Colapso do Bronze Final',prompt:'Qual explicação é mais consistente com o estado atual do debate?',options:['Uma única invasão explica todo o colapso.','Um terremoto simultâneo destruiu todo o Mediterrâneo.','Múltiplos fatores podem ter interagido em uma crise sistêmica.','Nada mudou depois de 1200 a.C.'],answer:2,explain:'A pesquisa discute combinações de conflitos, deslocamentos, clima, ruptura de redes e fragilidade interna.'},

  {id:'a9',module:'m3',type:'choice',title:'O que era a pólis?',prompt:'Assinale a melhor definição.',options:['Somente o centro urbano murado.','Uma comunidade política com cidadãos, instituições, território e cultos.','Uma província do Império Persa.','Uma aldeia sem instituições.'],answer:1,explain:'A pólis incluía cidade, território rural e comunidade cívica.'},
  {id:'a10',module:'m3',type:'match',title:'Atenas e Esparta',prompt:'Associe conceito e contexto.',pairs:[['Clístenes','reorganização cívica ateniense'],['Hilotas','população subordinada no sistema espartano'],['Sólon','reformas sociais e jurídicas em Atenas'],['Periecos','comunidades livres sem cidadania espartiata plena']]},
  {id:'a11',module:'m3',type:'truefalse',title:'Colonização grega',prompt:'As fundações gregas dos séculos VIII–VI a.C. obedeceram todas a um único plano centralizado.',answer:false,explain:'Motivações e relações locais variaram muito; não houve uma autoridade grega central coordenando todo o processo.'},
  {id:'a12',module:'m3',type:'sort',title:'Do conflito à reforma',prompt:'Ordene a sequência conceitual.',items:['Reformas e leis escritas','Tensões sociais','Reorganização das instituições','Novas formas de participação'],answer:['Tensões sociais','Reformas e leis escritas','Reorganização das instituições','Novas formas de participação']},

  {id:'a13',module:'m4',type:'choice',title:'Liga de Delos',prompt:'Como ela se transformou ao longo do século V a.C.?',options:['De aliança anti-persa em instrumento da hegemonia ateniense.','De império ateniense em liga liderada por Esparta.','De colônia romana em reino macedônico.','De conselho religioso em exército persa.'],answer:0,explain:'Atenas passou a controlar tributos, frota e a autonomia de vários aliados.'},
  {id:'a14',module:'m4',type:'match',title:'Instituições de Atenas',prompt:'Associe.',pairs:[['Ekklesia','assembleia de cidadãos'],['Boulé','conselho que preparava assuntos'],['Ostracismo','procedimento de afastamento político'],['Meteco','estrangeiro residente sem cidadania plena']]},
  {id:'a15',module:'m4',type:'truefalse',title:'Democracia e exclusão',prompt:'A democracia ateniense clássica incluía igualmente mulheres, escravizados, metecos e cidadãos homens.',answer:false,explain:'A participação política formal era restrita a uma parcela da população.'},
  {id:'a16',module:'m4',type:'sort',title:'Do século V ao IV a.C.',prompt:'Ordene.',items:['Guerra do Peloponeso','Guerras Médicas','Batalha de Queroneia','Hegemonias de Esparta e Tebas'],answer:['Guerras Médicas','Guerra do Peloponeso','Hegemonias de Esparta e Tebas','Batalha de Queroneia']},

  {id:'a17',module:'m5',type:'choice',title:'Hegemonia macedônica',prompt:'Qual combinação explica melhor o sucesso de Filipe II?',options:['Apenas a sarissa.','Reformas militares, diplomacia, recursos e exploração das divisões gregas.','Superioridade naval absoluta sobre Cartago.','Apoio direto de Roma.'],answer:1,explain:'A força macedônica resultou de um sistema político-militar e não de uma única inovação.'},
  {id:'a18',module:'m5',type:'match',title:'Mundo helenístico',prompt:'Associe.',pairs:[['Ptolomeus','Egito'],['Antigônidas','Macedônia'],['Selêucidas','grande parte da Ásia'],['Koiné','grego de ampla circulação']]},
  {id:'a19',module:'m5',type:'truefalse',title:'Helenização',prompt:'A difusão da língua e cultura gregas apagou completamente as culturas locais dos territórios conquistados.',answer:false,explain:'O período foi marcado por combinações, persistências e negociações culturais.'},
  {id:'a20',module:'m5',type:'choice',title:'Depois de Alexandre',prompt:'O que ocorreu após 323 a.C.?',options:['O império permaneceu unificado por séculos.','Roma assumiu imediatamente todos os territórios.','Generais e dinastias dividiram e disputaram o império.','A Macedônia deixou de existir no mesmo ano.'],answer:2,explain:'As guerras dos diádocos produziram vários reinos helenísticos.'},

  {id:'a21',module:'m6',type:'choice',title:'Etruscos',prompt:'Qual afirmação é mais adequada?',options:['Formavam um império centralizado único.','Viviam apenas em aldeias isoladas.','Organizavam-se em várias cidades com fortes conexões mediterrânicas.','Eram uma colônia romana desde o século X a.C.'],answer:2,explain:'A Etrúria era composta por cidades politicamente autônomas, conectadas por cultura, religião e redes.'},
  {id:'a22',module:'m6',type:'match',title:'Itália plural',prompt:'Associe.',pairs:[['Samnitas','Apeninos centro-meridionais'],['Etruscos','Itália central'],['Magna Grécia','sul da Itália e Sicília'],['Latinos','Lácio']]},
  {id:'a23',module:'m6',type:'truefalse',title:'Fundação de Roma',prompt:'A data de 753 a.C. deve ser tratada como fato arqueológico exato e incontestável.',answer:false,explain:'É uma data tradicional; a arqueologia indica um processo gradual de formação urbana.'},
  {id:'a24',module:'m6',type:'sort',title:'Expansão romana na Itália',prompt:'Ordene em lógica histórica geral.',items:['Hegemonia sobre grande parte da Itália','Conflitos com vizinhos latinos e etruscos','Guerras Samnitas','Integração por tratados, colônias e cidadania diferenciada'],answer:['Conflitos com vizinhos latinos e etruscos','Guerras Samnitas','Integração por tratados, colônias e cidadania diferenciada','Hegemonia sobre grande parte da Itália']},

  {id:'a25',module:'m7',type:'choice',title:'Segunda Guerra Púnica',prompt:'Qual fator ajudou Roma a sobreviver às derrotas contra Aníbal?',options:['Ausência de aliados itálicos.','Capacidade de mobilizar sua rede de aliados e continuar levantando exércitos.','Controle prévio do Egito.','Aliança militar com Alexandre.'],answer:1,explain:'A rede de aliados itálicos forneceu profundidade estratégica e recursos humanos.'},
  {id:'a26',module:'m7',type:'sort',title:'Crise republicana',prompt:'Ordene cronologicamente.',items:['Assassinato de César','Guerra Social','Batalha de Ácio','Ditadura de Sula'],answer:['Guerra Social','Ditadura de Sula','Assassinato de César','Batalha de Ácio']},
  {id:'a27',module:'m7',type:'match',title:'Personagens da República tardia',prompt:'Associe.',pairs:[['Tibério Graco','reforma agrária'],['Sula','ditadura e proscrições'],['Júlio César','cruzou o Rubicão'],['Otaviano','vencedor em Ácio']]},
  {id:'a28',module:'m7',type:'truefalse',title:'Expansão e conflito interno',prompt:'A conquista mediterrânica reduziu a competição política entre as elites romanas.',answer:false,explain:'A expansão ampliou riquezas, comandos militares e oportunidades de patronagem, intensificando rivalidades.'},

  {id:'a29',module:'m8',type:'choice',title:'O Principado',prompt:'Por que Augusto preservou linguagem republicana?',options:['Porque não possuía nenhum poder militar.','Porque ajudava a legitimar uma concentração de poder sem assumir o título de rei.','Porque o Senado aboliu todas as suas funções.','Porque Roma voltou a ser uma democracia direta.'],answer:1,explain:'A nova ordem imperial procurou apresentar-se como restauração, não ruptura aberta.'},
  {id:'a30',module:'m8',type:'match',title:'Sociedade imperial',prompt:'Associe.',pairs:[['Liberto','ex-escravizado juridicamente libertado'],['Annona','abastecimento e distribuição de grãos'],['Insula','edifício residencial urbano'],['Província','território administrado sob autoridade romana']]},
  {id:'a31',module:'m8',type:'truefalse',title:'Romanização',prompt:'Hoje, historiadores tendem a tratar “romanização” como simples substituição das culturas locais pela cultura romana.',answer:false,explain:'A abordagem atual enfatiza apropriações, adaptações, resistências e identidades híbridas.'},
  {id:'a32',module:'m8',type:'choice',title:'212 d.C.',prompt:'Qual medida é associada a Caracala?',options:['Criação da democracia ateniense.','Constitutio Antoniniana e ampliação da cidadania.','Fim do Império Romano do Ocidente.','Fundação de Constantinopla.'],answer:1,explain:'A Constitutio Antoniniana ampliou a cidadania romana à maioria dos habitantes livres do império.'},

  {id:'a33',module:'m9',type:'choice',title:'“Celtas”',prompt:'Qual uso é mais cuidadoso?',options:['Tratar todos os celtas como membros de um Estado único.','Usar o termo como categoria ampla e discutir diversidade regional e limites do conceito.','Assumir que falavam latim.','Identificar todos como romanos.'],answer:1,explain:'O conceito é útil, mas pode esconder diferenças políticas, regionais e cronológicas.'},
  {id:'a34',module:'m9',type:'match',title:'Povos e regiões',prompt:'Associe.',pairs:[['Dácios','norte do Danúbio'],['Lusitanos','oeste da Península Ibérica'],['Celtiberos','interior da Península Ibérica'],['Trácios','Bálcãs orientais']]},
  {id:'a35',module:'m9',type:'truefalse',title:'Fronteiras culturais',prompt:'Povos além das fronteiras romanas viviam sem comércio ou contato com o império.',answer:false,explain:'Mercadorias, pessoas, serviço militar, diplomacia e conflito atravessavam continuamente as fronteiras.'},
  {id:'a36',module:'m9',type:'choice',title:'Dácia',prompt:'Quem foi o rei dácio derrotado nas guerras de Trajano?',options:['Decébalo','Vercingetórix','Aníbal','Alarico'],answer:0,explain:'Decébalo enfrentou Roma até a conquista trajânica de 106 d.C.'},

  {id:'a37',module:'m10',type:'choice',title:'Religião antiga',prompt:'Qual formulação evita uma comparação inadequada com religiões modernas?',options:['Cultos antigos eram sempre baseados em um credo único.','Ritual, festival e dever cívico podiam ser tão importantes quanto crenças doutrinárias.','Todos os cultos antigos eram privados.','Religião e política nunca se cruzavam.'],answer:1,explain:'Muitos cultos antigos eram práticos, comunitários e integrados à vida cívica.'},
  {id:'a38',module:'m10',type:'match',title:'Casa e sociedade',prompt:'Associe.',pairs:[['Oikos','unidade doméstica grega'],['Domus','casa e unidade social romana'],['Paterfamilias','autoridade jurídica masculina na família romana'],['Paideia','ideal de formação cultural grega']]},
  {id:'a39',module:'m10',type:'truefalse',title:'Agência feminina',prompt:'A exclusão formal das instituições políticas significa que mulheres não exerciam nenhum papel social, econômico ou religioso.',answer:false,explain:'As possibilidades eram limitadas e desiguais, mas variavam por estatuto, cidade, riqueza e contexto.'},
  {id:'a40',module:'m10',type:'choice',title:'Memória e poder',prompt:'Por que monumentos são fontes políticas?',options:['Porque apenas decoravam cidades.','Porque selecionavam eventos, personagens e valores a serem lembrados publicamente.','Porque não tinham inscrições.','Porque eram sempre privados.'],answer:1,explain:'Monumentos organizavam narrativas de legitimidade e identidade.'},

  {id:'a41',module:'m11',type:'choice',title:'Limes',prompt:'Qual definição é mais precisa?',options:['Uma muralha contínua separando totalmente Roma do exterior.','Um sistema variável de fronteira com fortes, vias, rios, controles e zonas de contato.','Uma moeda militar.','Um cargo senatorial.'],answer:1,explain:'As fronteiras romanas eram sistemas regionais de controle e interação.'},
  {id:'a42',module:'m11',type:'match',title:'Exército romano',prompt:'Associe.',pairs:[['Legião','unidade formada por cidadãos no Principado'],['Auxilia','tropas recrutadas amplamente entre não cidadãos'],['Castrum','acampamento ou forte militar'],['Diploma militar','documento ligado a direitos concedidos após serviço']]},
  {id:'a43',module:'m11',type:'truefalse',title:'Fronteira romana',prompt:'A Muralha de Adriano impedia absolutamente qualquer circulação entre os dois lados.',answer:false,explain:'Fronteiras controlavam e canalizavam movimentos, mas não eliminavam trocas.'},
  {id:'a44',module:'m11',type:'choice',title:'Ano dos Quatro Imperadores',prompt:'O ano 69 d.C. demonstra sobretudo:',options:['Que o exército podia ser decisivo em sucessões imperiais.','Que Roma aboliu suas legiões.','Que Cartago voltou a controlar a Itália.','Que a cidadania foi extinta.'],answer:0,explain:'Diferentes exércitos provinciais proclamaram e sustentaram candidatos ao trono.'},

  {id:'a45',module:'m12',type:'choice',title:'Crise do século III',prompt:'Qual interpretação é mais adequada?',options:['Foi apenas uma crise econômica.','Foi apenas uma invasão externa.','Combinou instabilidade política, guerra, epidemias e problemas fiscais, mas também gerou reformas.','Foi o fim imediato do Império Romano.'],answer:2,explain:'A crise foi multidimensional e o império se reorganizou depois dela.'},
  {id:'a46',module:'m12',type:'match',title:'Antiguidade Tardia',prompt:'Associe.',pairs:[['Diocleciano','Tetrarquia'],['Constantino','Constantinopla'],['Adrianópolis','derrota romana em 378'],['Rômulo Augústulo','deposto em 476']]},
  {id:'a47',module:'m12',type:'sort',title:'Do século III ao V',prompt:'Ordene.',items:['Fundação de Constantinopla','Ascensão de Diocleciano','Saque de Roma pelos visigodos','Deposição de Rômulo Augústulo'],answer:['Ascensão de Diocleciano','Fundação de Constantinopla','Saque de Roma pelos visigodos','Deposição de Rômulo Augústulo']},
  {id:'a48',module:'m12',type:'truefalse',title:'476',prompt:'A deposição de Rômulo Augústulo destruiu instantaneamente instituições, língua, Igreja, cidades e direito romanos no Ocidente.',answer:false,explain:'476 é um marco simbólico importante, mas processos de continuidade e transformação atravessaram os séculos V e VI.'}
];
