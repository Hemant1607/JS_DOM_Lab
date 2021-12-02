//4. [DOM] Use query selector to change to the background of odd place items as lightgray

//Step1: Get all the odd place items in variable 'oddItems' in Added Items using querySelector.
//Note the li class name of items is 'list-group-item'

var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');

//Step2: Iterate through above list and set the background color as 'lightgray'.
for(var i=0; i<oddItems.length; i++){
   //write the code here
   oddItems[i].style.backgroundColor='lightgray';
}

