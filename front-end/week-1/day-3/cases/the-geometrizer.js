// cases from https://www.teaching-materials.org/javascript/exercises/functions
/*
The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence:
+ Pass the radius to the function.
+ Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
+ Pass the radius to the function.
+ Calculate the area based on the radius, and output "The area is NN".
*/

function calcGeometry(radius){
    var circumference = Math.PI*2*radius;
    console.log("The circumference is "+circumference);
    var area = Math.PI*radius*radius;
    console.log("The area is "+area);
}
calcGeometry(14);