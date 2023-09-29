const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento) => {
  elemento.addEventListener("blur", (evento) => {
    validaCampo(evento.target);
  });
});

function validaCampo(campo) {
  const msnErro = campo.parentNode.querySelector("[data-erro]");
  if (campo.name === "filme") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do filme completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "cena") {
    if (campo.value.length < 10 || campo.value.length>250) {
      msnErro.textContent = "Digite a cena completa";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "cine") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite a cinematrografia completa";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "personagem") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do personagem completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "diretor") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do diretor completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "ator") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome completo";
    } else {
      msnErro.textContent = "";
    }
  }
}