var checkoutlist = document.querySelector('#checkoutlist');
var endereco = document.querySelector('.container');
var finalprice = document.querySelector('#finalprice');
var total = 0;

document.addEventListener("DOMContentLoaded", function(){
    CreateEndereco();
    CreateCheckout();
});

function CreateEndereco(){
        var ul = document.createElement("ul");
        ul.innerHTML = `
            <li class="cep"><p class="txtcep">Cep: ${localStorage.getItem("cep")} </p></li>
            <li class="bairro"><p class="txtbairro">Bairro: ${localStorage.getItem("bairro")} </p></li>
            <li class="rua" ><p class="txtrua">Rua: ${localStorage.getItem("rua")} </p></li>
            <li class="numero"><p class="txtnumero">Número: ${localStorage.getItem("numero")} </p></li>
        `
        endereco.appendChild(ul);
}


function CreateCheckout(){
    itemsInCart = sessionStorage.getItem("itemsInCart");
    for(i = 0; i <= itemsInCart; i++){
        var li = document.createElement("li");
        li.innerHTML = `
            <img class="img" src="${sessionStorage.getItem(`CImage${i}`)}">
            <p class="text"> ${sessionStorage.getItem(`CName${i}`)} </p>
            <p class="text">${sessionStorage.getItem(`CXitems${i}`)}</p> 
            <p class="text">${sessionStorage.getItem(`CPrice${i}`)}</p>
        `
        checkoutlist.appendChild(li);
        total += Math.floor(sessionStorage.getItem(`CPrice${i}`));
    }
    finalprice.textContent = "Total : R$" + total + ".00";
}
function Bought(){
    window.location.replace('bought.html');
}
function Back(){
    sessionStorage.removeItem(`itemsInCart`);
    for(let i = 0; i <= itemsInCart; i++){
        sessionStorage.removeItem(`CImage${i}`);
        sessionStorage.removeItem(`CName${i}`);
        sessionStorage.removeItem(`CXitems${i}`);
        sessionStorage.removeItem(`CPrice${i}`);
        sessionStorage.removeItem(`Name${i}`);
    }
    window.location.replace('index.html');
}
