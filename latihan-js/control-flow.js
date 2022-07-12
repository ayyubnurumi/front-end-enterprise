// berikut adalah contoh block data
var x = 4;{
    var x = 2;
var x = 5;
}
console.log(x);

// berikut adalah contoh if .. else
function checkData() {
    if (document.form1.ThreeChar.velue.length == 3) {
        return true;
    } else {
        alert(
            'Enter exactly three characters.' +
            `${document.form1.ThreeChar.velue}
            is not valid.`
        ); return false;
    }
}
//belum tau cara running atau liat output

// berikut adalah contoh switch
let fruitType = 'Apples'; //let ditambahkan untuk lihat output
switch (fruitType) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log(`Sorry, we are out of ${fruitType}.`);
  }
  console.log("Is there anything else you'd like?");

  console.log (fruitType) // output bisa dilihat dengan console.log

  //berikut contoh try .. catch statement
  function getMonthName(mo) {
    mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[mo]) {
      return months[mo];
    } else {
      throw 'InvalidMonthNo'; // throw keyword is used here
    }
  }
  try { // statements to try
    monthName = getMonthName(myMonth); // function could throw exception
  }
  catch (e) {
    monthName = 'unknown';
    logMyErrors(e); // pass exception object to error handler (i.e. your own function)
  }
  // belum bisa coba run function

  function f() {
    try {
      console.log(0);
      throw 'bogus';
    } catch(e) {
      console.log(1);
      return true;    // this return statement is suspended
                      // until finally block has completed
      console.log(2); // not reachable
    } finally {
      console.log(3);
      return false;   // overwrites the previous "return"
      console.log(4); // not reachable
    }
    // "return false" is executed now
    console.log(5);   // not reachable
  }
  console.log(f()); // 0, 1, 3, false
  