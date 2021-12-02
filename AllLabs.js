var title=document.getElementById('headerTitle');
title.style.backgroundColor = "yellow";
title.style.borderBottom = "solid 5px #000";

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

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

//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);


function addItem(ev){
    ev.preventDefault();

    //Step2: Get the input value from input tag whose id is 'newitem'.
    var newItem = document.getElementById('newitem').value;

    //creare li element
    var li = document.createElement('li');
    //Add class
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));

    //adding delelte button
    //Step3: Create the delete button with class names "btn btn-danger float-right btn-sm delete"
    var deleteBtn =document.createElement('button');
    deleteBtn.className="btn btn-danger float-right btn-sm delete";

    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    //assigning price
    //Step4: Similarly create span for price with class name "float-right" and 
    //id "price-item" add default price of 180 to the item. 
    //Set the style of span as 'margin-right: 100px;'. 
    var price = document.createElement('span');
    price.className="float-right";
    price.id="price-item";
    price.style="margin-right: 100px;";
    
    price.appendChild(document.createTextNode('180'));
    li.appendChild(price);

    if(li.textContent.includes("Veg")){
        //set colour to green
        li.style.color='green';
    }
    else{
        //set colour to red
        li.style.color='red';
    }
    
    itemList.appendChild(li);

    var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');

    //Step2: Iterate through above list and set the background color as 'lightgray'.
    for(var i=0; i<oddItems.length; i++){
       //write the code here
       oddItems[i].style.backgroundColor='lightgray';
    }

    var itemPrices = document.querySelectorAll('#price-item');
    var totalItem = document.querySelector('.total-item');
    for(var count=0; count<itemPrices.length; count++){
        
    }
    
    totalItem.textContent = count;

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

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);

            var oddItems=document.querySelectorAll('.list-group-item');

            //Step2: Iterate through above list and set the background color as 'lightgray'.
            for(var i=0; i<oddItems.length; i++){
            //write the code here
            if(i%2!=0)
            oddItems[i].style.backgroundColor='white';
            else
            oddItems[i].style.backgroundColor='lightgray';
            }

            var itemPrices = document.querySelectorAll('#price-item');
            var totalItem = document.querySelector('.total-item');
            for(var count=0; count<itemPrices.length; count++){
        
            }
    
            totalItem.textContent = count;

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
    }
}

var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');

//Step2: Iterate through above list and set the background color as 'lightgray'.
for(var i=0; i<oddItems.length; i++){
   //write the code here
   oddItems[i].style.backgroundColor='lightgray';
}


var itemPrices = document.querySelectorAll('#price-item');
var totalItem = document.querySelector('.total-item');

//Iterate through the price item and check if price is greater than or equal to 200.
for(var count=0; count<itemPrices.length; count++){
    if(parseInt(itemPrices[count].textContent)>=200){
        //Step2: If yes, then give a discount of 10%. (Item final price = Earlier Price - (0.1*Earlier Price)).
        let finalPrice = parseInt(itemPrices[count].textContent)-(0.1*parseInt(itemPrices[count].textContent));


        //Step3: Change the ealier price with the new price.
        //write code here
        itemPrices[count].textContent=finalPrice;
    }
}

totalItem.textContent = count;

var tipAmount = document.getElementById('tipAmount');

var add = (function () {
    //Write code here
    return function(){
        return parseInt(tipAmount.textContent)+1;
    }
})();
  
function addTip(){
    tipAmount.innerHTML = add();

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

//Create subtract() closure function to decrement the tip amount
//Write code here
var subtract = (function () {
    //Write code here
    return function(){
        return parseInt(tipAmount.textContent)-1;
    }
})();
  
function subtractTip(){
    tipAmount.innerHTML = subtract();

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

var form = document.getElementById('ratingForm');
form.addEventListener('submit', rateFunction);

async function rateFunction(e) {
    e.preventDefault();

    var select = document.getElementById('ratingId');

    let myPromise = new Promise(function(myResolve, myReject) {
        if(parseInt(select.value)>3) {
            myResolve('Thank You');
        } 
        else {
            myReject('Sorry for Inconvenience');
        }
    });

    document.getElementById('rateMessage').innerHTML = await myPromise;
    
}

