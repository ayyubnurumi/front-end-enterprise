let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
} 
console.log(n)
  
let a = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log('anjayy: ' + a);
  a += 1;
  z = 1;
  while (true) {
    console.log('wkwkwk: ' + z);
    z += 1;
    if (z === 8 && a === 8) {
      break labelCancelLoops;
    } else if (z === 8) {
      break;
    }
  }
}