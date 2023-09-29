const inputs = document.querySelectorAll("[required]");
inputs.forEach( (elemento)=>{
    elemento.addEventListener("blur",(evento)=>{
        validaCampo(evento.target);
    });
});

function validaCampo(campo){
    const msnErro  = campo.parentNode.querySelector("[data-erro]");
    if(campo.name ==="nome"){
        if(campo.value.length<2 || campo.value.length>150){
            msnErro.textContent = "O nome deve ter entre 2 e 150 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="sinopse"){
        if(campo.value.length<30 || campo.value.length>250){
            msnErro.textContent = "A sinopse deve ter entre 30 e 250 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="elenco"){
        if(campo.value.length<30 || campo.value.length>250){
            msnErro.textContent = "O elenco deve ter entre 30 e 250 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="produtora"){
        if(campo.value.length<2 || campo.value.length>150){
            msnErro.textContent = "A produtora deve ter entre 2 e 150 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="diretor"){
        if(campo.value.length<2 || campo.value.length>150){
            msnErro.textContent = "O diretor deve ter entre 2 e 150 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="email"){
        if(campo.value.length<10 || campo.value.length>250){
            msnErro.textContent = "O email deve ter entre 2 e 150 caracteres";
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="telefone"){
        if(campo.value.length<15 || campo.value.length>15){
            msnErro.textContent = "A quantidade de caracteres está equivocada";
        }else{
            msnErro.textContent = "";
        }
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var telefoneInput = document.getElementById("telefone");
    Inputmask("(99) 99999-9999").mask(telefoneInput);
  });
  function validarCPF(cpf) {
    // Remoção da máscara
    cpf = cpf.replace(/\D/g, '');

    // Verificação de 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validar o primeiro dígito
    if (!validarPrimeiroDigito(cpf)) {
        return false;
    }

    // Validar o segundo dígito
    if (!validarSegundoDigito(cpf)) {
        return false;
    }

    // CPF válido
    return true;
}

function validarPrimeiroDigito(cpf) {
    // Calcular o primeiro dígito verificador
    let soma = 0;
    let peso = 10;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    // Verificar se o dígito verificador é igual ao CPF fornecido
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    return true;
}

function validarSegundoDigito(cpf) {
    // Calcular o segundo dígito verificador
    let soma = 0;
    let peso = 11;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * peso;
        peso--;
    }

    let resto = (soma * 10) % 11;
    if (resto === 10) {
        resto = 0;
    }

    // Verificar se o dígito verificador é igual ao CPF fornecido
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

function formatarCPF(cpf) {
   
    cpf = cpf.replace(/\D/g, '');

    // Aplicar máscara
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

    return cpf;
}

function preencherMascara(event) {
    let input = event.target;
    let cpf = input.value;

    cpf = cpf.replace(/\D/g, '');

    cpf = formatarCPF(cpf);

    input.value = cpf;
}

function validar(event) {
    event.preventDefault();

    let input = document.getElementById("cpf");
    let cpf = input.value;


    cpf = cpf.replace(/\D/g, '');

    if (validarCPF(cpf)) {
        document.getElementById("resultado").textContent = "CPF válido";
        document.getElementById("cadastro-form").submit();

    } else {
        document.getElementById("resultado").textContent = "CPF inválido";
        document.getElementById('resultado').style.color ='purple'
    }
}
