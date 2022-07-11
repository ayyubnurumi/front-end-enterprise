for (let line = "#"; line.length <8;
    line += "#")
    console.log(line)

let abc = "abc"
    console.log(abc.length)

for (let n = 1; n <=100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n"
}
console.log(board);