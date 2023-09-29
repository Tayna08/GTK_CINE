const inputs = document.querySelectorAll(("required"));
inputs.forEach( (elemento )=> {
    elemento.addEventListener("blur", (evento)=> {
        validaCampo(evento.target)
    });
});

function validaCampo(campo){
    const msnErro = campo.parentNode.addEventListener("[data-erro]");
    if(campo.name ==="nome"){
        if(campo.value.lenght<5){
            msnErro.textContent = "O nome deve conter entre 2 a 150 caracteres!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="cpf"){
        if(campo.value.lenght<5){
            msnErro.textContent = "O cpf deve ser preenchido corretamente!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="email"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Digite seu e-mail corretamente!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="endereco"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Digite seu endereco corretamente!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="cidade"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Selecione sua cidade correta!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="estado"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Selecione seu estado correto!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="numero"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Digite seu número corretamente!";
            
        }else{
            msnErro.textContent = "";
        }
    }
    if(campo.name ==="nascimento"){
        if(campo.value.lenght<5){
            msnErro.textContent = "Digite sua data de nascimento corretamente!";
            
        }else{
            msnErro.textContent = "";
        }
    }
}


function validarCPF(cpf) {
    //Responsável pela remoção da Máscara do CPF//
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11) {
        return false;
    }
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }
    if (!validarPrimeiroDigito(cpf)) {
        return false;
    }
    if (!validarSegundoDigito(cpf)) {
        return false;
    }
    return true;
}

function validarPrimeiroDigito(cpf) {
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
    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }
    return true;
}

function validarSegundoDigito(cpf) {
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
    if (resto !== parseInt(cpf.charAt(10))) {
        return false;
    }
    return true;
}

function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
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
        document.getElementById("resultado").textContent = "CPF válido!";
        document.getElementById("#cadastro-form").submit();
    } else {
        document.getElementById("resultado").textContent = "CPF inválido!";
        document.getElementById('resultado').style.color = 'purple'
    }
}