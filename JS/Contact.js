function loadHeader() {
  const headerContainer = document.querySelector(".header");
  const width = window.innerWidth;

  if (width >= 1024) {
    fetch("/Web-y-Componentes/Componentes/Desktop/header.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
      });
  } else {
    fetch("/Web-y-Componentes/Componentes/Mobile/header.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
      });
  }
}

function loadFooter() {
  const headerContainer = document.querySelector(".footer");
  const width = window.innerWidth;

  if (width >= 1024) {
    fetch("/Web-y-Componentes/Componentes/Desktop/footer.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
      });
  } else {
    fetch("/Web-y-Componentes/Componentes/Mobile/footer.html")
      .then((response) => response.text())
      .then((data) => {
        headerContainer.innerHTML = data;
      });
  }
}

window.onload = function () {
  loadHeader();
  loadFooter();
};

window.onresize = function () {
  loadHeader();
  loadFooter();
};

function buttonEnviar() {
  const buttonContainer = document.querySelector(".button-enviar");

  fetch("/Web-y-Componentes/Componentes/Boton/boton.html")
    .then((response) => response.text())
    .then((data) => {
      const template = document.createElement("template");
      template.innerHTML = data;

      const clone = document.importNode(template.content, true);
      buttonContainer.appendChild(clone);
    });
}

buttonEnviar();
