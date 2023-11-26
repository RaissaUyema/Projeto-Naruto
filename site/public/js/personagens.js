

function sobre_person(person){
  var modal = document.getElementById('modal_informacao_person');

  if(person == 'naruto'){
      tipo_person.innerHTML = `<h1> Naruto Uzumaki </h1>
      <p><span class="informacoes">Origem:</span>Órfão e membro do clã Uzumaki e do clã Namikaze.
      Nasceu em Konohagakure como Jinchuriki da Kyuubi (Nove Caudas).</p>
  <p><span class="informacoes"> História de Fundo:</span>Cresceu como um ninja desconsiderado e rejeitado devido à presença da Kyuubi.
      Busca se tornar o Hokage para ganhar reconhecimento e superar a solidão.</p>
  <p><span class="informacoes"> Objetivo Principal:</span>Objetivo Principal: Inicialmente, deseja ser reconhecido como um herói e se tornar Hokage.
      Mais tarde, procura alcançar a paz e compreensão entre vilas.</p>
  <p><span class="informacoes">Equipe e Relações:</span>Membro do Time 7, com Sasuke Uchiha e Sakura Haruno, liderados por Kakashi Hatake.
      Desenvolve laços significativos com Jiraiya, Hinata, e outros personagens ao longo da série.</p>
  <p><span class="informacoes">Técnicas e Habilidades:</span>Jinchuriki da Kyuubi, concedendo-lhe poderes excepcionais.
      Desenvolve o Rasengan e, mais tarde, a forma aprimorada, Rasenshuriken.
      Desperta o Modo Sábio dos Seis Caminhos.</p>
  <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Evolui de um ninja desprezado para um herói amado.
      Enfrenta desafios, fazendo amizades e aprendendo lições ao longo de sua jornada.</p>
    <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
    <p><span class="informacoes">Kage:</span>Hokage</p>
  
    `

  } else if(person == 'sakura'){
      tipo_person.innerHTML = ` <h1>Sakura Haruno</h1>
      <p><span class="informacoes">Origem:</span> Ninja da Vila da Folha (Konohagakure).</p>
    
      <p><span class="informacoes"> História de Fundo:</span>Inicialmente, foco em se tornar mais forte para atrair Sasuke.
        Treinou sob a supervisão de Tsunade, buscando se tornar uma médica habilidosa.</p>
    
      <p><span class="informacoes"> Objetivo Principal:</span> Inicialmente, busca a atenção e reconhecimento de Sasuke.
        Mais tarde, dedica-se a se tornar uma médica talentosa para contribuir com a equipe.</p>
    
      <p><span class="informacoes">Equipe e Relações:</span>Membro original do Time 7, junto com Naruto e Sasuke.
        Desenvolve fortes laços com Naruto e se torna uma amiga leal.</p>
    
      <p><span class="informacoes">Técnicas e Habilidades:</span>Habilidosa em ninjutsu médico, capaz de curar ferimentos e doenças.
        Desenvolve habilidades de combate, incluindo força física aprimorada.
          Desperta o Modo Sábio dos Seis Caminhos.</p>
    
      <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Passa por uma evolução significativa, deixando de lado a dependência emocional de Sasuke.
        Torna-se uma ninja forte e independente, desempenhando papel crucial nas batalhas.</p>
        <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
        <p><span class="informacoes">Kage:</span>Hokage</p>
    `

  } else if(person == 'sasuke'){
      tipo_person.innerHTML = `<h1>Sasuke Uchiha</h1>
      <p><span class="informacoes">Origem:</span> Membro do clã Uchiha da Vila da Folha.</p>
    
      <p><span class="informacoes"> História de Fundo:</span>Clã Uchiha massacrado; busca vingança contra irmão, Itachi.</p>
    
      <p><span class="informacoes"> Objetivo Principal:</span>Ganhar poder para vingar sua família e derrotar Itachi.
      </p>
    
      <p><span class="informacoes">Equipe e Relações:</span>Inicialmente, faz parte do Time 7 com Naruto e Sakura.
        Abandona Konoha para treinar com Orochimaru.</p>
    
      <p><span class="informacoes">Técnicas e Habilidades:</span>Sharingan: Permite prever movimentos e copiar técnicas.
        Mangekyō Sharingan: Desbloqueia habilidades avançadas.
        Chidori: Técnica de movimento rápido e cortante.</p>
    
      <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Jornada marcada por conflitos internos, desafios e reflexões.
        Questiona motivações e enfrenta escolhas difíceis.</p>
        <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
        <p><span class="informacoes">Kage:</span>Hokage</p>`
 
  } else if(person == 'kakashi'){
      tipo_person.innerHTML = `<h1>Kakashi Hatake</h1>
      <p><span class="informacoes">Origem:</span> Ninja da Vila da Folha (Konohagakure).
        Conhecido como "Kakashi o Ninja Copiador" devido à sua habilidade de copiar técnicas.</p>
    
      <p><span class="informacoes"> História de Fundo:</span>Filho de Sakumo Hatake, um lendário ninja.
        Líder do Time 7, composto por Naruto, Sasuke e Sakura.</p>
    
      <p><span class="informacoes"> Objetivo Principal:</span>Inicialmente, foca em cumprir missões e seguir as regras.
        Desenvolve um papel de mentor e protetor para o Time 7.
      </p>
    
      <p><span class="informacoes">Equipe e Relações:</span>Líder do Time 7, com forte vínculo com seus membros.
        Mentor de Naruto, Sasuke e Sakura, desempenhando papel crucial em seus desenvolvimentos.</p>
    
      <p><span class="informacoes">Técnicas e Habilidades:</span>Sharingan (implantado por Obito Uchiha), permitindo copiar técnicas.
        Raikiri (Chidori), uma técnica de alto nível de taijutsu.
        Hatake Kakashi é conhecido por sua habilidade tática e estratégica.</p>
    
      <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Inicialmente, retratado como um ninja misterioso.
        Ao longo da série, revela mais sobre seu passado e motivações.</p>
        <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
        <p><span class="informacoes">Kage:</span>Hokage</p>
    `
  }
  else if(person == 'jiraiya'){
      tipo_person.innerHTML = `<h1>Jiraiya </h1>
      <p><span class="informacoes">Origem:</span> Ninja lendário da Vila da Folha (Konohagakure).
        Conhecido como o "Ero-Sennin" (Sábio Pervertido).</p>
    
      <p><span class="informacoes"> História de Fundo:</span>Ex-aluno do Terceiro Hokage e mentor de Minato Namikaze (Quarto Hokage).
        Autor de romances populares.</p>
    
      <p><span class="informacoes"> Objetivo Principal:</span>Inicialmente, busca conhecimento para proteger a vila.
        Desempenha papel fundamental na proteção de Naruto e na busca por informações sobre as Akatsuki.
      </p>
    
      <p><span class="informacoes">Equipe e Relações:</span>Parte do Time Sarutobi, junto com Orochimaru e Tsunade.
        Mentor de Naruto Uzumaki.</p>
    
      <p><span class="informacoes">Técnicas e Habilidades:</span>Mestre em ninjutsu e taijutsu.
        Possui a invocação de sapos, incluindo o grande sapo Gamabunta.
        Jutsus poderosos, como o "Rasengan."</p>
    
      <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Inicialmente, retratado como um personagem cômico.
        Ao longo da série, revela-se como um ninja sábio e corajoso, enfrentando ameaças perigosas.</p>
        <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
        <p><span class="informacoes">Kage:</span>Hokage</p>
    `

  } else if(person == 'hinata'){
    tipo_person.innerHTML = `<h1>Hinata Hyuga</h1>
    <p><span class="informacoes">Origem:</span> Membro do clã Hyuga da Vila da Folha (Konohagakure).
      Inicialmente, é uma ninja tímida e insegura.</p>
  
    <p><span class="informacoes"> História de Fundo:</span>Filha do chefe do clã Hyuga, Hiashi Hyuga.
      Desde jovem, enfrentou desafios devido à sua falta de confiança.</p>
  
    <p><span class="informacoes"> Objetivo Principal:</span>Inicialmente, seu foco é ganhar a aprovação do pai e se tornar uma ninja mais forte.
      Desenvolve sentimentos românticos por Naruto Uzumaki.
    </p>
  
    <p><span class="informacoes">Equipe e Relações:</span>Membro do Time Kurenai, com Kurenai Yuhi como mentora.
      Desenvolve uma relação próxima com Naruto ao longo da série.</p>
  
    <p><span class="informacoes">Técnicas e Habilidades:</span>Usuária do Byakugan, um kekkei genkai do clã Hyuga.
      Habilidades em taijutsu, com destaque para o "Gentle Fist."</p>
  
    <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Passa por uma notável transformação, ganhando confiança e coragem.
      Torna-se uma ninja valente, disposta a arriscar tudo por aqueles que ama.</p>
      <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
      <p><span class="informacoes">Kage:</span>Hokage</p>
  `

  } else if(person == 'gaara'){
    tipo_person.innerHTML = `<h1>Gaara</h1>
    <p><span class="informacoes">Origem:</span> Ninja da Vila da Areia (Sunagakure).
      Possui o Bijuu Shukaku, o Tanuki de Uma Cauda, selado em seu corpo.</p>
  
    <p><span class="informacoes"> História de Fundo:</span>Nasceu como o filho mais novo do Quarto Kazekage.
      Desde jovem, é hostilizado devido à presença do Bijuu em seu corpo.</p>
  
    <p><span class="informacoes"> Objetivo Principal:</span> Inicialmente, focado em provar seu valor e conquistar respeito.
      Desenvolve um desejo de se tornar Kazekage para proteger sua vila.
    </p>
  
    <p><span class="informacoes">Equipe e Relações:</span>Líder do Time Gaara, composto por Kankurō e Temari.
      Desenvolve laços significativos com Naruto e outros ao longo da série.</p>
  
    <p><span class="informacoes">Técnicas e Habilidades:</span>Controle de areia através do Jinchuriki Shukaku.
      Jutsus poderosos, como o "Sabaku Kyu" (Prisão de Areia).
      Habilidades aprimoradas após se tornar Kazekage.</p>
  
    <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Inicialmente, um personagem sombrio e isolado.
      Ao longo da série, experimenta uma transformação emocional, encontrando amizade e aceitação.
  </p>
  <p><span class="informacoes">Aldeia:</span>Vila da Areia</p>
    <p><span class="informacoes">Kage:</span> Kazekage</p>`

  } else if(person == 'shikamru'){
    tipo_person.innerHTML = `<h1>Shikamaru Nara</h1>
    <p><span class="informacoes">Origem:</span>  Membro do clã Nara na Vila da Folha (Konohagakure).
      Conhecido por sua inteligência e estratégias.</p>
  
    <p><span class="informacoes"> História de Fundo:</span>Filho de Shikaku Nara, conselheiro estratégico da vila.
      Inicialmente, retratado como um ninja preguiçoso devido à sua natureza tranquila.</p>
  
    <p><span class="informacoes"> Objetivo Principal:</span> Busca uma vida simples, sem grandes responsabilidades.
      Desenvolve um papel crucial como estrategista na proteção da vila.
    </p>
  
    <p><span class="informacoes">Equipe e Relações:</span>Membro original do Time 10, com Ino Yamanaka e Choji Akimichi.
      Desenvolve laços fortes com seus companheiros de equipe.</p>
  
    <p><span class="informacoes">Técnicas e Habilidades:</span>Usa técnicas de sombras (kagemane) para controlar e prender oponentes.
      Habilidade excepcional em pensar estrategicamente durante batalhas.</p>
  
    <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Evolui de um ninja aparentemente preguiçoso para um estrategista valorizado.
      Assuma papéis de liderança e se torna um dos ninjas mais confiáveis da vila.
  </p>
  <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
    <p><span class="informacoes">Kage:</span>Hokage</p>
`

  } else if(person == 'neji'){
    tipo_person.innerHTML = `<h1>Neji Hyuga</h1>
    <p><span class="informacoes">Origem:</span>  Membro talentoso do clã Hyuga na Vila da Folha (Konohagakure).
      Inicialmente, demonstra uma visão fatalista do destino.</p>
  
    <p><span class="informacoes"> História de Fundo:</span>Primo de Hinata Hyuga.
      Lutou contra a rigidez do sistema de clãs, contestando seu próprio destino.</p>
  
    <p><span class="informacoes"> Objetivo Principal:</span> Inicialmente, busca superar os limites impostos pelo destino.
      Participa em lutas para provar que o destino pode ser mudado.
    </p>
  
    <p><span class="informacoes">Equipe e Relações:</span>Membro do Time Guy, liderado por Might Guy.
      Desenvolve relações complexas com Hinata e outros membros do clã.</p>
  
    <p><span class="informacoes">Técnicas e Habilidades:</span>Possui o Byakugan, assim como outros membros do clã Hyuga.
      Especializado em taijutsu, com destaque para o "Gentle Fist" e técnicas avançadas.</p>
  
    <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Passa por uma mudança significativa, abandonando a visão fatalista.
      Sacrifica-se para proteger seus companheiros durante a Quarta Grande Guerra Ninja.
  </p>
  <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
    <p><span class="informacoes">Kage:</span>Hokage</p>
`

  } else if(person == 'minato'){
    tipo_person.innerHTML = `<h1>Minato Namikaze</h1>
    <p><span class="informacoes">Origem:</span>Ninja da Vila da Folha (Konohagakure).
      Quarto Hokage e pai de Naruto Uzumaki.</p>
   
    <p><span class="informacoes"> História de Fundo:</span>Reconhecido como um gênio desde jovem, se formou como Hokage mais jovem na história.
      Lutou na Terceira Grande Guerra Ninja.</p>
  
    <p><span class="informacoes"> Objetivo Principal:</span> Tornou-se Hokage para proteger a vila e seus habitantes.
      Sacrificou-se para selar a Kyuubi (Nove Caudas) em Naruto.
    </p>
  
    <p><span class="informacoes">Equipe e Relações:</span>Líder do Time Minato, com Kakashi Hatake, Rin Nohara e Obito Uchiha.
      Casado com Kushina Uzumaki e pai de Naruto.</p>
  
    <p><span class="informacoes">Técnicas e Habilidades:</span>Renomado por sua velocidade e domínio do "Hiraishin no Jutsu" (Técnica do Deus Voador do Trovão).
      Utiliza o Rasengan, uma técnica poderosa de ninjutsu.</p>
  
    <p><span  class="informacoes">Desenvolvimento do Personagem:</span>Inicialmente, é retratado como um ninja exemplar e líder habilidoso.
      Sua morte precoce e sacrifício têm um impacto significativo na história e no desenvolvimento de Naruto.
  </p>
  <p><span class="informacoes">Aldeia:</span>Vila da Folha</p>
    <p><span class="informacoes">Kage:</span>Hokage</p>
`

  }

  modal.style = "display: flex";
}

function fechar_modal(){
  var modal_person = document.getElementById("modal_informacao_person");

  modal_person.style.display = 'none';
}

window.addEventListener('click', (e) => {
  var modal_person = document.getElementById("modal_informacao_person");
  if (e.target == modal_person ){

      fechar_modal()
  }
}
)

function favoritos(){
  fetch("/personagens/favoritar", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      respostas_corretasServer: respostas_corretas,
      respostas_incorretasServer: respostas_incorretas,
      fkUsuarioServer: idUsuario 
    }),
  })
    .then(function (resposta) {

      console.log("resposta: ", resposta);
      if (resposta.ok) {
        console.log("Passou pelo Script do front")
      } else {
        throw "Houve um erro ao gravar a pontuação da partida no banco!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  return false;
}
