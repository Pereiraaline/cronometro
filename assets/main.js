function relogio() {
  const relogio = document.querySelector(".relogio");
  let segundos = 0;
  let timer;

  function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaSegundos(segundos);
    }, 1000);
  }

  document.addEventListener("click", function (event) {
    //coloca o evento de clique na página
    const element = event.target; // capta o elemento que foi clicado na página

    if (element.classList.contains("zerar")) {
      clearInterval(timer);
      segundos = 0;
      relogio.innerHTML = "00:00:00";
      relogio.classList.remove("pausado");
    }

    if (element.classList.contains("pausar")) {
      clearInterval(timer);
      relogio.classList.add("pausado");
    }

    if (element.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }
  });
}

relogio();
