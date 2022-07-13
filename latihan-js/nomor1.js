//1. Write a JavaScript program that accept two integers and display the larger.
var num1,num2;
num1 = window.prompt("input the first intiger","0");
num2 = window.prompt("input the second intiger","0");

if(parseInt(num1,10)>parseInt(num2,10))
{
console.log("the larger of " + num1 + "and" + num2 + "is" + num1 +".");
} 
else if(parseInt(num2,10)>parseInt(num1,10))
{
    console.log("the larger of" + num1 + " and " + num2 + "is" + num2 +".");
} 
else 
{
    console.log("the values" + num1 + "and" + num2 + "are equal");
}