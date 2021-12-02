//9. [Async/await] Use Async Programming for displaying a Thank You message if customer gives rating more than 3.

//Step1: Get the form whose id is 'ratingForm'. 
var form = document.getElementById('ratingForm');
form.addEventListener('submit', rateFunction);

//Step2: Create a async function rateFunction.
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

//Step2.a: Get the rating value from select id 'ratingId'.
//Step2.b: Create a promise to get the succes message "Thank You!" if rating is greater then 3.
//Step2.c: Use 'await' to make sure async function is executed and diaplay the message of promise in 'p' id of 'rateMessage'.





