// Elementos
const tentativasText = document.getElementById("tentativas");
const chute = document.getElementById("chute");
const chutarButton = document.getElementById("chutarButton");
const resultText = document.getElementById("result");

let secretNumber, tentativasRestantes, acertou;

function init() {
  console.log("Executando função --> init");
  tentativasRestantes = 3;
  tentativasText.innerHTML = "Você tem " + tentativasRestantes + " tentativas";
  chute.value = "";
  chutarButton.innerHTML = "Chutar";
  chutarButton.setAttribute("onclick", "jogar()");
  resultText.innerHTML = "";
  secretNumber = Math.floor(Math.random() * 11);
}

init();

function checarChuteValido() {
  console.log("Executando função --> checarChuteValido");
  return chute.value && chute.value >= 0 && chute.value <= 10;
}

function endGame() {
  console.log("Executando função --> endGame");
  chutarButton.innerHTML = "Jogar novamente?";
  chutarButton.setAttribute("onclick", "init()");
}

function jogar() {
  console.log("Executando função --> jogar");
  if (checarChuteValido()) {
    chutar();
  } else {
    resultText.innerHTML = "Você deve digitar um número de 0 a 10";
  }
}

function chutar() {
  console.log("Executando função --> chutar");
  const chuteValue = parseInt(chute.value);
  let text = "";
  if (chuteValue === secretNumber) {
    text += "Você acertou. Parabéns!";
    endGame();
  } else {
    text += "Você errou.";
    if (tentativasRestantes > 1) {
      if (chuteValue > secretNumber) {
        text += " Tente um número menor.";
      } else {
        text += " Tente um número maior.";
      }
    }
    tentativasRestantes--;
    checarTentativas();
  }
  resultText.innerHTML = text;
}

function checarTentativas() {
  console.log("Executando função --> checarTentativas");
  let text = "";
  if (tentativasRestantes === 0) {
    text += "Acabaram suas tentativas";
    endGame();
  } else {
    text += "Você tem " + tentativasRestantes + " tentativas";
  }
  tentativasText.innerHTML = text;
}
