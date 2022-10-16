/* JavaScript BASIC SYSTEMS */

/* ADDED ASSETS in JavaScript */


// SCRIPT TIME //



let time = document.getElementById("current-time");

setInterval(() => {

    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();

}, 1000);


let timesec = document.getElementById("a4");


setInterval(() => {
   
    let date = new Date();
    timesec.innerHTML = date.toLocaleDateString();

}, 1000);
