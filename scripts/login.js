avisotext = document.getElementById("aviso");

login = document.querySelector("#loginpage");
register = document.querySelector("#registerpage");

Rusuario = document.getElementById("Rusuario");
Rsenha = document.getElementById("Rsenha");

Lusuario = document.getElementById("usuario");
Lsenha = document.getElementById("senha");

cep = document.getElementById("cep");
bairro = document.getElementById("bairro");
rua = document.getElementById("rua");
numero = document.getElementById("numerodacasa");

buttonToRegisterPage = document.querySelector("#changePageToRegister");

let loginon = false;

document.addEventListener("DOMContentLoaded", function(){
    checkHasRegister();
});

function Registrar(){
    if (checkRegistroInputValue()){
        localStorage.setItem("usuario",Rusuario.value);
        localStorage.setItem("senha",Rsenha.value);
        localStorage.setItem("cep",cep.value);
        localStorage.setItem("bairro",bairro.value);
        localStorage.setItem("rua",rua.value);
        localStorage.setItem("numero",numero.value);
        avisotext.textContent = "Registro Completo!";
        checkHasRegister();
    }
    else{
        avisotext.textContent ="Registro Falhou";
    }

}

function checkHasRegister(){
    ChangePage();
    if(localStorage.getItem("usuario") != null){
        ChangePage();
        buttonToRegisterPage.style.display = "none";
    }
}

function ChangePage(){
    avisotext.textContent = "";
    if(loginon == false){
        register.style.display = "none";
        login.style.display = "flex";
        loginon = true;
    }
    else if(localStorage.getItem("usuario") == null){
        login.style.display = "none";
        register.style.display = "flex";
        loginon = false;
    }
    
}

function Logar(){
    var usuario = localStorage.getItem("usuario");
    var senha = localStorage.getItem("senha");
    if ((usuario == Lusuario.value) && (senha == Lsenha.value)){
        window.location.replace('index.html');
        sessionStorage.setItem('Logado', true);
    }
    else{
        avisotext.textContent = "Login Falhou";
    }
}

function checkRegistroInputValue(){
    if((cep.value == "") || (bairro.value == "") || (rua.value == "") || (numero.value =="") || (Rusuario.value =="") || (Rsenha.value == "")){
        return false;
    }
    else{
        return true;
    }
}