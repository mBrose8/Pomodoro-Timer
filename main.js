const start = document.getElementById("iniciar");
const stop = document.getElementById("pausar");
const reset = document.getElementById("resetar");

const workMinutes = document.getElementById("workMinutes");
const workSeconds = document.getElementById("workSeconds");

const breakMinutes = document.getElementById("breakMinutes");
const breakSeconds = document.getElementById("breakSeconds");

// Armazena uma referência a uma variavel do timer
let startTimer;

start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("O tempo continua correndo");
  }
});

reset.addEventListener("click", function () {
  workMinutes.innerText = 25;
  workSeconds.innerText = "00";

  breakMinutes.innerText = 5;
  breakSeconds.innerText = "00";

  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Função que inicia o relogio
function timer() {
  //Contagem regressiva do temporizador
  if (workSeconds.innerText != 0) {
    workSeconds.innerText--;
  } else if (workMinutes.innerText != 0 && workSeconds.innerText == 0) {
    workSeconds.innerText = 59;
    workMinutes.innerText--;
  }

  //Contagem regressiva do temporizador de pausa
  if (workMinutes.innerText == 0 && ws.innerText == 0) {
    if (breakSeconds.innerText != 0) {
      breakSeconds.innerText--;
    } else if (breakMinutes.innerText != 0 && breakSeconds.innerText == 0) {
      breakSeconds.innerText = 59;
      breakMinutes.innerText--;
    }
  }
  //Adicionar ao contador em 1 se um ciclo completo for concluído
  if (
    workMinutes.innerText == 0 &&
    workSeconds.innerText == 0 &&
    breakMinutes.innerText == 0 &&
    breakSeconds.innerText == 0
  ) {
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById("counter").innerText++;
  }
}

//Pausa a função timer
function stopInterval() {
  clearInterval(startTimer);
}
