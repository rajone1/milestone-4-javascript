/* 
function functionname (parametere){
function body
return body variable name;

}
var retur value = functionname(paremetre value)
console.log(return value)
*/
function getAvarage(asin1, asin2, asin3) {
  const total = asin1 + asin2 + asin3;
  const avarage = total / 3;
  return avarage;
}

const as1marks = 10;
const as2marks = 15;
const as3marks = 20;
// var myAvarage = getAvarage(10, 15, 20);
var myAvarage = getAvarage(as1marks, as2marks, as3marks);
console.log(myAvarage);

// or

function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
const re1 = add(10, 20);
const re2 = add(20, 30);
const all = add(re1, re2);
console.log(all);
