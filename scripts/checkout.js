let itensin;
let itemsInCart = 0;
var checklist = document.querySelector('checkoutlist');



function CanCheckout(){
    if(sessionStorage.getItem('Logado') != null){
        return true;
    }
    else{
        window.location.replace('login.html');
    }

}

function Checkout(){
    if (CanCheckout()){
        for(itensin = 0; itensin < h; itensin++){
            var li = document.querySelector(`.li${itensin}`);
            if(li != null){
                sessionStorage.setItem(`CImage${itemsInCart}`, document.getElementById(`img${itensin}`).src);
                sessionStorage.setItem(`CName${itemsInCart}`, document.getElementById(`name${itensin}`).textContent);
                sessionStorage.setItem(`CXitems${itemsInCart}`, document.getElementById(`xcart${itensin}`).textContent);
                sessionStorage.setItem(`CPrice${itemsInCart}`, document.getElementById(`price${itensin}`).textContent);
                sessionStorage.setItem("itemsInCart", itemsInCart);
                itemsInCart++;
            }
        }
        window.location.replace('checkou.html');
    }

}

