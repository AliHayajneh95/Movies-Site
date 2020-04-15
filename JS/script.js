'use strict'
window.prompt("enter your age", "man you are so old, deal with it");
var a = prompt('1+1 = ?');
var a2 = prompt('What is your favorite movie?');
var a3 = prompt('Type your 1st, 2nd, 3rd name');
var res ;
if (a == 2){
    res = 'you are smart good';
}
else {
    res = 'wrong try again';
}
document.write('<p id="a2">'+res+'</p>');
document.write('<p id="a2">'+a2+'</p>');
document.write('<p id="a3">'+a3+'</p>');

function myFunction() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }