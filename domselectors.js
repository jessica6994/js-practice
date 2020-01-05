 var listItem1 = document.getElementById("highlight");

 var ListItems23 = document.getElementsByClassName("bolded");

 var liTags = document.getElementsByTagName("li"); //will select all li
 var li1 = document.getElementsByTagName("li")[0]; //will give first instance of li

var list1 = document.querySelector("#highlight"); //newer method  - uses css-style selector .class or #id
var list2 = document.querySelector(".bolded"); //only gives us the first match, always only returns 1 element
//all css selectors work in querySelector:
//eg select all anchor tags with the class special that are nested inside an li
// var li = document.querySelector("li a.special");

var h1 =  document.querySelectorAll("h1"); //works exactly the same as querySelector
//but will return ALL instances of the css selector used


//dom selectors exercise
//1.
var p = document.getElementsByTagName("p");
var p = document.getElementById("first");
var p = document.getElementByClassName("special")[0];
var p = document.querySelector("#first");
var p = document.querySelectorAll("#first")[0];
var p = document.querySelector(".special");
var p = document.querySelectorAll(".special")[0];
var p = document.querySelector("p");
var p = document.querySelectorAll("p")[0];
//select the p directly after the h1 - more complex css selector:
var p = document.querySelector("h1 + p");
