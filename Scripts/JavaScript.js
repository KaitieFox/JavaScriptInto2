//console.log("Hello!");
//var name = "Kait";

//console.log("Hello " + name);

//for (i = 0; i < 11; i++)
//{
//    console.log(i);
//}

//function helloWorld() {
//    var greeting = "Hello world!";
//    alert(greeting);
//}
//helloWorld();

function add(a,b){
    return a+b;
}
console.log(add(9, 8));

console.log(add(5, "cat"));


//this is called an anonymous function
var otherFunction = function (a, b) {
    return a + b;
}
console.log(otherFunction(2, .4));

//write a function that takes in a name and writes hello [name]

function yourName(name) {
    console.log("Hello, " + name);
    //return "Hello " + name;
}
yourName("Kait");
//console.log(yourName("Kait"));

function updateDiv()
{
    var outputString = "Hello and welcome to my webpage.";
    document.getElementById("sectionOne").innerHTML = "<p>" + outputString + "</p>";
}

function swap()
{
    var imageSrc = document.getElementById("swapImage").src;
    
    if (imageSrc.includes("planet"))
    {
        document.getElementById("swapImage").src = "Images/time-2919087_1920.jpg";
    }
    else
    {
        document.getElementById("swapImage").src = "Images/planet-1702788_1920.jpg";
    }
    console.log(document.getElementById("swapImage").src);
}

function printArray()
{
    var favFoods = ["Pizza", "Pasta", "Tacos", "Burritos", "Purritos"];
    var outputText = "<ul>";

    for(i=0; i<favFoods.length; i++)
    {
        outputText += "<li>" + favFoods[i] + "</li>";
    }
    outputText += "</ul>";
    document.getElementById("sectionTwo").innerHTML += outputText;
}