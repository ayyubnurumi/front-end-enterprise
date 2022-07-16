//6. Write a JavaScript program which compute, 
// the average marks of the following students Then, 
// this average is used to determine the corresponding grade.

var murid = [
    ['david', 80],
    ['idin', 77],
    ['arta', 88],
    ['ayyub', 95],
    ['surya', 68]];
var rerata = 0;
for (var i=0; i<murid.length; i++) {
    rerata += murid[i][1];
    var avg = (rerata/murid.length);
}
console.log("rata-rata nilai: " + (rerata)/murid.length);
if (avg < 60){
    console.log("nilai : F");
} else if (avg < 70){
    console.log("nilai : D");
} else if(avg < 80){
    console.log("nilai : C");
} else if(avg < 90){
    console.log("nilai : B");
} else if(avg < 100){
    console.log("nilai : A");
}