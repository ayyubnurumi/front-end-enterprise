// 7. Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

for (var a =1; a<=100; a++)
{
    if (a%2 ===0 && a%5===0)
    {
        console.log(a+" anjayGurinjay");
    }
    else if (a%2===0)
    {
        console.log(a+" anjay");
    }
    else if(a%5===0)
    {
        console.log(a+" Gurinjay");
    }
    else
    {
        console.log(a);}
}