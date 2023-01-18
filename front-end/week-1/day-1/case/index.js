let nomer = 1;
nomer = 2;

let string = `apa`;
let integer = 3;
let boolean = false;
let undifined = undefined;
let isNan = NaN;
let isNull = null;
let symbol1 = Symbol("simbol");
let symbol2 = Symbol("simbol");

let array = [{}, "data", {}];
let object = {
  "name bauh": "jeruk",
  rasa: "mangga",
  warna: "pink",
  harga: [{ kecil: 1000 }, { sedeng: 5000 }, { gede: 10000 }],
};

let a = 10;
let b = 3;
let c = 4;
let d = a / 5;

let hujan = true;
let sehat = true;
let restuOrangTua = false;
sehat
  ? hujan
    ? restuOrangTua
      ? console.log("hujan-hujanan")
      : console.log("ngaji dirumah")
    : console.log("jalan-jalan")
  : console.log("tidur");

if (sehat) {
  if (hujan) {
    if (restuOrangTua) {
      console.log("hujan-hujanan");
    } else {
      console.log("ngaji dirumah");
    }
  } else {
    console.log("jalan-jalan");
  }
} else {
  console.log("tidur");
}

let weather = "rainy";
if (weather == "rainy") {
  console.log("You need a rain coat.");
} else if (weather == "cloudy") {
  console.log("It might be cold, you need a jacket.");
} else if (weather == "sunny") {
  console.log("Go out freely.");
} else {
  console.log("No need for rain coat.");
}

weather == "rainy"
  ? console.log("You need a rain coat.")
  : weather == "cloudy"
  ? console.log("It might be cold, you need a jacket.")
  : weather == "sunny"
  ? console.log("Go out freely.")
  : console.log("No need for rain coat.");
