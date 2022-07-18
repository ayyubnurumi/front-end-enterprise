/*
We want to write a program that prints two numbers: 
the numbers of cows and chickens on a farm, 
with the words Cows and Chickens after them and 
zeros padded before both numbers so that they are always 
three digits long.

007 Cows
011 Chickens

This asks for a function of 
two arguments—the number of cows and the number of chickens. 
Let’s get coding.
*/

function printFarmInventory(cows, chickens){
    let cowString = String(cows);
    while (cowString.length < 3){
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3){
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

/*
Mission accomplished! But just as we are about to send 
the farmer the code (along with a hefty invoice), 
she calls and tells us she’s also started keeping pigs, 
and couldn’t we please extend the software to also print pigs?

We sure can. But just as we’re in the process of copying and 
pasting those four lines one more time, we stop and reconsider. 
There has to be a better way. Here’s a first attempt:
*/

function printZeroPaddedWithLabel(number, label){
    let numberString = String(number);
    while (numberString.length < 3){
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

// It works! But that name, printZeroPaddedWithLabel, is a little awkward.
// Instead of lifting out the repeated part of our program wholesale, 
// let’s try to pick out a single concept.

function zeroPad(number, width){
    let string = String(number);
    while (string.length < width){
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs){
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);