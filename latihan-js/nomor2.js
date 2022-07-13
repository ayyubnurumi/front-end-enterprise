//2. Write a JavaScript conditional statement to find the sign of product of three numbers. 
// Display an alert box with the specified sign.
var x=3;
var y=-7;
var z=2;
if (x>0 && y>0 && z>0)
{
    alert("the sign is +");
}
else if (x<0 && y<0 && z<0)
{
    console.log("the sign is -");
}
else if (x>0 && y<0 && z<0)
{
    console.log("the sign is +");
}
else if (x<0 && y>0 && z<0)
{
    console.log("the sign is +");
}
else 
{
    console.log(alert("the sign is -"));
}