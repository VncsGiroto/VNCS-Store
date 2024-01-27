cart = document.querySelector(".cart")
cartlist = document.querySelector(".cartlist")

btncart = document.querySelector(".btn-cart");
var btncartdata = 0;

var h = 0;

function OpenCart(){
    cart.style.display = "block";
}

function CloseCart(){
    cart.style.display = "none";
}

function Addcart(Name, Price, Image, Estoque){
    if(CanCheckout()){
        if(hasInCart(Name)){
            sessionStorage.setItem(`Name${h}`, Name);

            var li = document.createElement("li");
            li.classList.add(`li${h}`);
            xitemoncart[h] = 1;
            li.innerHTML =
            `
                <img id="img${h}" src="${Image}" alt="">
                <p id="name${h}"> ${Name} </p>
                <p id="xcart${h}">${xitemoncart[h]}x</p> 
                <button onclick="ChangeXoncart('${h}', +1, '${Estoque}', '${Price}')">+</button> 
                <button onclick="ChangeXoncart('${h}', -1, '${Estoque}', '${Price}')">-</button>
                <p id="price${h}"> ${Price}</p>
            `
            cartlist.appendChild(li);
            h++;
            btncartdata++;
            btncart.setAttribute("data-quantity", `${btncartdata}`); 
        }
    }
}

function ChangeXoncart(o, value, Estoque, Price){
    var onitemxcart = document.querySelector(`#xcart${o}`);

    if((value < 0) && (xitemoncart[o] == 1)){
        var lidelete = document.querySelector(`.li${o}`);
        sessionStorage.removeItem(`Name${o}`);
        lidelete.remove();
        btncartdata--;
        btncart.setAttribute("data-quantity", `${btncartdata}`); 
    }
    else if(xitemoncart[o] < Estoque){
        xitemoncart[o] += value;
        UpdatePrice(xitemoncart[o], o, Price);
    }
    else if(value < 0){
        xitemoncart[o]--;
        UpdatePrice(xitemoncart[o], o, Price);
    }

    onitemxcart.textContent = xitemoncart[o] + "x";
}

function UpdatePrice(NitemOncart, o, Price){
    var textprice = document.querySelector(`#price${o}`);
    textprice.textContent = Math.floor(Price * NitemOncart) + '.00';
}

function hasInCart(Name){
    for(let i = 0; i < h; i++){
        if(Name == sessionStorage.getItem(`Name${i}`)){
            return false;
        }
    }
    return true;
}
