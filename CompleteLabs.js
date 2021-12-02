var title=document.getElementById('headerTitle');
title.style.backgroundColor = "yellow";
title.style.borderBottom = "solid 5px #000";


function GreenRed(){
var items=document.getElementsByClassName('list-group-item');

for(var i=0; i<items.length; i++){
    if(items[i].textContent.includes("Veg")){
        //set colour to green
        items[i].style.color='green';
    }
    else{
        //set colour to red
        items[i].style.color='red';
    }
}
}

GreenRed();

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);


function addItem(ev){
    ev.preventDefault();

 
    var newItem = document.getElementById('newitem').value;

    
    var li = document.createElement('li');
    
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    
    var deleteBtn =document.createElement('button');
    deleteBtn.className="btn btn-danger float-right btn-sm delete";

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

  
    var price = document.createElement('span');
    price.className="float-right";
    price.id="price-item";
    price.style="margin-right: 100px;";
    
    price.appendChild(document.createTextNode('180'));
    li.appendChild(price);

    itemList.appendChild(li);

    GreenRed();
    WhiteGray();
    ItemCount();
    TotalAmount();
    VegNonVeg();
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
            
            var oddItems=document.querySelectorAll('.list-group-item');

            for(var i=0; i<oddItems.length; i++){
            if(i%2==0)
            oddItems[i].style.backgroundColor='lightgray';
            else
            oddItems[i].style.backgroundColor='white';
            }

            ItemCount();
            TotalAmount();
            VegNonVeg();
        }
    }
}

function WhiteGray(){
var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');

for(var i=0; i<oddItems.length; i++){
   oddItems[i].style.backgroundColor='lightgray';
}
}

WhiteGray();

var itemPrices = document.querySelectorAll('#price-item');
var totalItem = document.querySelector('.total-item');

for(var count=0; count<itemPrices.length; count++){
    if(parseInt(itemPrices[count].textContent)>=200){
        
        let finalPrice = parseInt(itemPrices[count].textContent)-(0.1*parseInt(itemPrices[count].textContent));

        itemPrices[count].textContent=finalPrice;
    }
}

totalItem.textContent = count; 

function ItemCount(){
    var itemPrices = document.querySelectorAll('#price-item');
    var totalItem = document.querySelector('.total-item');

    for(var count=0; count<itemPrices.length; count++){
    }
    totalItem.textContent = count; 
}


var tipAmount = document.getElementById('tipAmount');

var add = (function () {
    //Write code here
    return function(){
        return parseInt(tipAmount.textContent)+1;
    }
})();
  
function addTip(){
    tipAmount.innerHTML = add();
    TotalAmount();
}

var subtract = (function () {
    //Write code here
    return function(){
        return parseInt(tipAmount.textContent)-1;
    }
})();
  
function subtractTip(){
    tipAmount.innerHTML = subtract();
    TotalAmount();
}

function TotalAmount(){
var priceItems = document.querySelectorAll('#price-item');

function priceDisplay(amount){
    //Write code here
    document.getElementById('totalAmount').innerHTML=amount;
}
 

function priceCalculation(priceItems, myCallback){
    var total = 0;
    for(var i=0; i<priceItems.length; i++){
        total += parseInt(priceItems[i].textContent);
    }

    total+=parseInt(document.getElementById('tipAmount').textContent);
    myCallback(total);
}

priceCalculation(priceItems,priceDisplay);
}

TotalAmount();

function VegNonVeg(){
var items = document.getElementsByClassName('list-group-item');

function displayItemMessage(msg){
    document.getElementById('warning-mess').innerHTML=msg;
}

let PromiseCheck=new Promise(function(resolve,reject){
    let checkVeg=true;
    for(var i=0;i<items.length;i++){
        if(!items[i].textContent.includes('Veg')){
            checkVeg=false;
        }
    }

    if(checkVeg){
        resolve("It does not contain any non veg item");
    }
    else{
        reject("Warning!It contains one or more non veg items");
    }
})

PromiseCheck.then(
    function(value){
        displayItemMessage(value);
    },
    function(error){
        displayItemMessage(error);
    }
)
}

VegNonVeg();

var form = document.getElementById('ratingForm');
form.addEventListener('submit', rateFunction);

async function rateFunction(e) {
    e.preventDefault();

    var select = document.getElementById('ratingId');

    let myPromise = new Promise(function(myResolve, myReject) {
        if(parseInt(select.value)>3) {
            myResolve('Thank You');
        } else {
            myReject('Sorry for Inconvenience');
        }
    });

    document.getElementById('rateMessage').innerHTML = await myPromise;
}


