// Adicionando uma função à variável gerarNumero
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; // Inicializa as tentativas

// Função sem parâmetro
let titulo = document.querySelector("h1");
titulo.innerHTML = "Jogo do número secreto";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

// Função com parâmetro
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag); // Seleciona o elemento HTML baseado no selector recebido (tag)
  campo.innerHTML = texto; // Adiciona o texto recebido ao conteúdo do elemento
}

// Chamada da função com parâmetros
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}
exibirMensagemInicial();

// função para verificar o chute do jogador
function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    exibirTextoNaTela("p", "O número secreto é menor. Tente novamente!");
  } else {
    exibirTextoNaTela("p", "O número secreto é maior. Tente novamente!");
  }
  // Registrar números de tentativas
  tentativas++;
  // Limpar campo input
  limparCampo();
}

// Função sem parâmetros usando return
function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // Retorna um número aleatório entre 1 e 10
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  // Verifica se o numeroEscolhido já está presente na listaDeNumerosSorteados
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    // includes é um método que verifica se um elemento está presente em um array
    // Se o número já foi sorteado, chama a função novamente
    return gerarNumeroAleatorio();
  } else {
    // Se o número não foi sorteado, adiciona o número à listaDeNumerosSorteados
    listaDeNumerosSorteados.push(numeroEscolhido); // Push é um método que adiciona um elemento ao final de um array
    // O array com os números sorteados é exibido no console
    console.log(listaDeNumerosSorteados);
    // O numeroEscolhido é retornado
    return numeroEscolhido;
  }
}

// Função para limpar o input
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
// Função para reiniciar o jogo
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  // Desabilita o botão "novo jogo" enquanto o jogador não descobriu o numeroSecreto
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
