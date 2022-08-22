// 11. Write a JavaScript program to compute the greatest common divisor (GCD) of two positive integers.

var a = 2155;
var b = 460;
var gcd;
while (a!=b)
{
    if(a>b){
        a=a-b;
    } else {
        b=b-a;
    }
}
gcd=a;
console.log(gcd);