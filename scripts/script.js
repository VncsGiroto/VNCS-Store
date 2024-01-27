var ContainerItems = document.querySelector("#ContainerItems");
var userbutton = document.querySelector("#userbutton");
let hasItem = false
var beforetype;

document.addEventListener("DOMContentLoaded", function() {
    CreateItems(lancamentos);
    hasItem = true;
});

function CreateItems(type){
    if (hasItem == true) {
        for(let i = 0; i < beforetype.length; i++){
            DeleteItems();
        }
    }
    for(let i = 0; i < type.length; i++){
        var card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = 
        `
            <img src="${type[i].Image}"/>
            <p>${type[i].Name}</p>
            <p>${type[i].Price}</p>
            <button onclick="Addcart('${type[i].Name}', '${type[i].Price}', '${type[i].Image}', '${type[i].Estoque}')"> Adicone ao carrinho</button>
        `
        ContainerItems.appendChild(card);
        beforetype = type;
    }
}

function Categorias(value){
    switch(value){
        case "lancamentos":
            CreateItems(lancamentos);
            break;
        case "acessorios":
            CreateItems(acessorios);
            break;
        case "moletom":
            CreateItems(moletom);
            break;
        case "calca":
            CreateItems(calca);
            break;
        case "camisas":
            CreateItems(camisas);
            break;
        case "bermudas":
            CreateItems(bermudas);
            break;
    }
}

function DeleteItems(){
    var card = document.querySelector(".card")
    card.remove();
}

