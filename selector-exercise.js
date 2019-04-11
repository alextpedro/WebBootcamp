//4 different ways to select the first paragraph

var way1 = document.getElementById("first");
var way2 = document.getElementsByTagName("p")[0];
var way3 = document.querySelector(".special"); //query selector only selects the first element
var way4 = document.querySelectorAll("p")[0];