let friends = ["a", "b", "c", "d", "e"];
friends[2] = "shaon";
let find = friends[2];

console.log(find);
// inch to fet
const myinches = 125;
const myFeet = myinches / 12;
console.log("My inches:", myFeet);

function inchToFeet(inches) {
  const feet = inches / 12;
  return feet;
}
const input = 144;

const find1 = inchToFeet(input);
console.log(find1);
//

function calculatemile(input) {
  let kilo = 1.66;
  let mile = kilo * input;
  return mile;
}

let find3 = 15;
let find4 = calculatemile(find3);
