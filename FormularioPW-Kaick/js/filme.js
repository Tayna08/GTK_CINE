const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento) => {
  elemento.addEventListener("blur", (evento) => {
    validaCampo(evento.target);
  });
});

function validaCampo(campo) {
  const msnErro = campo.parentNode.querySelector("[data-erro]");
  if (campo.name === "nome") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do filme completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "sinopse") {
    if (campo.value.length < 30 || campo.value.length>150) {
      msnErro.textContent = "Digite a sinopse completa";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "elenco") {
    if (campo.value.length < 30 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do elenco completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "produtor") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do produtor completo";
    } else {
      msnErro.textContent = "";
    }
  }
  if (campo.name === "diretor") {
    if (campo.value.length < 2 || campo.value.length>150) {
      msnErro.textContent = "Digite o nome do produtor completo";
    } else {
      msnErro.textContent = "";
    }
  }
}