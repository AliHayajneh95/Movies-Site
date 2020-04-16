'use strict'
var x;
while(isNaN(x))
{
    x = window.prompt("enter your year of birth, must be a nubmer", "man you are so old, deal with it");
}
calculateAge();
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

function calculateAge()
{
    var y = new Date().getFullYear();
    var age = (y - x);
    alert(age);
}

function myFunction() {
    var person = prompt("Please enter your name", "");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }
  var i = prompt("how many movies suggestions would you like to recieve from us?");


  var elements = [document.createElement("a"), document.createElement("a"), document.createElement("a")];
  elements[0].href = "https://www.imdb.com/title/tt0298130";
  elements[0].text = "The ring ";
  elements[1].href = "https://www.imdb.com/title/tt0365748";
  elements[1].text = "Shaun of the Dead ";
  elements[2].href = "https://www.imdb.com/title/tt1396484";
  elements[2].text = "It ";

  for (i >= 0; i--;)
  {
    /*var element = document.createElement("a");
    element.href = "https://www.google.com"; //arr[1, i];
    element.text = "google ";//arr[0, i];*/
    if(i >= elements.length)
    {
        document.body.innerHTML = document.body.innerHTML + (elements[0]);
        continue;
    }
    document.body.innerHTML = document.body.innerHTML + (elements[i]);

  }
