// Seleção de elementos do DOM usando querySelector
var num_questao = document.querySelector(".num_questao");
var texto_questao = document.querySelector(".texto_questao");
var container_opcoes = document.querySelector(".container_opcoes");
var container_indicador_respostas = document.querySelector(".indicador_respostas");
var container_casa = document.querySelector(".container_casa");
var container_quiz = document.querySelector(".container_quiz");
var container_resultado = document.querySelector(".container_resultado");
var container_dash = document.querySelector(".container_dash");
var container = document.querySelector(".container");

// Configuração de variáveis para o quiz
var limite_de_questoes = 5;
var contador_questoes = 0;
var questao_atual;
var questoes_disponiveis = [];
var opcoes_disponiveis = [];
var respostas_corretas = 0;
var respostas_incorretas = 0;
var tentativa = 0;
var idUsuario = sessionStorage.ID_USUARIO;

// Função para configurar questões disponíveis com base em um conjunto de questões (quiz)
function set_questoes_disponiveis() {
  var total_questoes = quiz.length;

  for (var i = 0; i < total_questoes; i++) {
    questoes_disponiveis.push(quiz[i]);
  }
}

// Função para exibir uma nova questão no quiz
function nova_questao() {
  // Seleciona uma questão aleatória do conjunto de questões disponíveis
  var indice_questoes = questoes_disponiveis[Math.floor(Math.random() * questoes_disponiveis.length)];
  questao_atual = indice_questoes;
  texto_questao.innerHTML = questao_atual.q;

  // Atualiza o número da questão exibido
  num_questao.innerHTML = `Questão ${contador_questoes + 1} de ${limite_de_questoes}`;

  // Remove a questão atual das questões disponíveis
  var index1 = questoes_disponiveis.indexOf(indice_questoes);
  questoes_disponiveis.splice(index1, 1);

  // Configura as opções disponíveis para a questão atual
  var opcao_len = questao_atual.opcoes.length;

  for (var i = 0; i < opcao_len; i++) {
    opcoes_disponiveis.push(i);
  }

  // Limpa o conteúdo do container de opções
  container_opcoes.innerHTML = "";
  var animation_delay = 0.2;

  // Adiciona as opções ao container com animação
  for (var i = 0; i < opcao_len; i++) {
    var optonIndex = opcoes_disponiveis[Math.floor(Math.random() * opcoes_disponiveis.length)];

    var index2 = opcoes_disponiveis.indexOf(optonIndex);
    opcoes_disponiveis.splice(index2, 1);

    var opcao = document.createElement("div");
    opcao.innerHTML = questao_atual.opcoes[optonIndex];
    opcao.id = optonIndex;
    opcao.style.animation_delay = animation_delay + "s";
    animation_delay = animation_delay + 0.2;
    opcao.className = "opcao";
    container_opcoes.appendChild(opcao);
    opcao.setAttribute("onclick", "pegar_resultado(this)");
  }
  contador_questoes++;
}

// Função para processar a escolha do usuário e atualizar o resultado
function pegar_resultado(element) {
  var id = Number(element.id);

  if (id === questao_atual.resposta) {
    // Adiciona classe "correto" ao elemento escolhido se estiver correto
    element.classList.add("correto");
    // Atualiza o indicador de resposta
    atualizar_indicador_resposta("correto");
    respostas_corretas++;
  } else {
    // Adiciona classe "incorreto" ao elemento escolhido se estiver incorreto
    element.classList.add("incorreto");
    // Atualiza o indicador de resposta
    atualizar_indicador_resposta("incorreto");
    respostas_incorretas++;
  }

  // Adiciona classe "correto" à opção correta
  var opcao_len = container_opcoes.children.length;
  for (let i = 0; i < opcao_len; i++) {
    if (Number(container_opcoes.children[i].id) === questao_atual.resposta) {
      container_opcoes.children[i].classList.add("correto");
    }
  }
  // Torna as opções não clicáveis após a escolha do usuário
  opcoes_nao_clicaveis();
}

// Função para tornar as opções não clicáveis após a escolha do usuário
function opcoes_nao_clicaveis() {
  var opcao_len = container_opcoes.children.length;

  for (var i = 0; i < opcao_len; i++) {
    container_opcoes.children[i].classList.add("ja_respondido");
  }
}

// Função para exibir o indicador de respostas
function indicador_respostas() {
  container_indicador_respostas.innerHTML = "";
  var total_questoes = limite_de_questoes;

  // Adiciona indicadores para o número total de questões
  for (var i = 0; i < total_questoes; i++) {
    var indicator = document.createElement("div");
    container_indicador_respostas.appendChild(indicator);
  }
}

// Função para atualizar o indicador de resposta com a marcação (correto/incorreto)
function atualizar_indicador_resposta(markType) {
  container_indicador_respostas.children[contador_questoes - 1].classList.add(markType);
}

// Função para avançar para a próxima questão ou finalizar o quiz
function proxima() {
  var opcoesRespondidas = document.querySelectorAll(".opcao.ja_respondido");
  if (opcoesRespondidas.length === container_opcoes.children.length) {
    if (contador_questoes === limite_de_questoes) {
      fim_quiz();
    } else {
      nova_questao();
    }
  } else {
    alert("Por favor, responda à questão antes de passar para a próxima.");
  }
}

// Função para finalizar o quiz
function fim_quiz() {
  tentativa++;
  // Oculta o container do quiz e exibe o container de resultado
  container_quiz.classList.add("hide");
  container_resultado.classList.remove("hide");
  // Calcula e exibe o resultado final
  resultado_quiz();
  // Envia os resultados para o servidor usando fetch
  fetch("/quiz/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      respostas_corretasServer: respostas_corretas,
      respostas_incorretasServer: respostas_incorretas,
      fkUsuarioServer: idUsuario,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);
      if (resposta.ok) {
        console.log("Passou pelo Script do front");
      } else {
        throw "Houve um erro ao gravar a pontuação da partida no banco!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });
  return false;
}

// Função para exibir o resultado final do quiz
function resultado_quiz() {
  var porcentagem = (respostas_corretas / limite_de_questoes) * 100;
  // Atualiza os elementos HTML com os resultados
  container_resultado.querySelector(".total_questoes").innerHTML = limite_de_questoes;
  container_resultado.querySelector(".total_corretas").innerHTML = respostas_corretas;
  container_resultado.querySelector(".total_erradas").innerHTML = respostas_incorretas;
  container_resultado.querySelector(".porcentagem").innerHTML = porcentagem.toFixed(2) + "%";
  container_resultado.querySelector(".total_score").innerHTML = respostas_corretas + " / " + limite_de_questoes;
}

// Função para redefinir variáveis do quiz para reiniciar
function resetar_quiz() {
  contador_questoes = 0;
  respostas_corretas = 0;
  respostas_incorretas = 0;
  tentativa = 0;
  questoes_disponiveis = [];
}

// Função para tentar o quiz novamente
function tentar_novamente() {
  // Oculta o container de resultado e exibe o container do quiz
  container_resultado.classList.add("hide");
  container_quiz.classList.remove("hide");
  // Reseta as variáveis do quiz e inicia novamente
  resetar_quiz();
  iniciar_quiz();
}

// Função para voltar ao início (casa)
function volte_inicio() {
  // Oculta o container de resultado e dashboard, exibe o container da casa
  container_resultado.classList.add("hide");
  container_dash.classList.add("hide");
  container_casa.classList.remove("hide");
  // Reseta as variáveis do quiz
  resetar_quiz();
}

// Função para iniciar o quiz
function iniciar_quiz() {
  // Oculta o container da casa e exibe o container do quiz
  container_casa.classList.add("hide");
  container_quiz.classList.remove("hide");
  // Configura as questões disponíveis, exibe uma nova questão e o indicador de respostas
  set_questoes_disponiveis();
  nova_questao();
  indicador_respostas();
}

// Função para redirecionar para o painel de controle (dashboard)
function ver_dash() {
  window.location = `./dashboard/dashboard.html`;
}

// Função para desaparecer com a tela de apresentação
function desaparecer_pref() {
  container.classList.add("hide");
  container_casa.classList.remove("hide");
}

// Executa a função de desaparecimento após o carregamento da página
window.onload = function () {
  // Define o número total de questões na tela de apresentação
  container_casa.querySelector(".total_questoes").innerHTML = limite_de_questoes;
  // Aguarda 2500 milissegundos (2.5 segundos) e então executa a função de desaparecimento
  setTimeout(desaparecer_pref, 2500);
};