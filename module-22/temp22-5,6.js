// value change =  tempo

// const first = 5;
// const second = 8;

// first = second;
// second = first;
// console.log(first, second);

//
let first1 = 5;
let second1 = 8;
let tempo = first1;
first1 = second1;
second1 = tempo;
console.log(first1, second1);

console.log(first1, second1);

// or
let first2 = 8;
let second2 = 15;
[first2, second2] = [second2, first2];

console.log(first2, second2);

// 22.6 problem ex

const jim = 84;
const dela = 99;
const chinku = 77;
if (jim > dela && jim > chinku) {
  console.log("jim will get rhe cake");
} else if (dela > jim && dela > chinku) {
  console.log("dela get the cake");
} else {
  console.log("chinku get the cake");
}
