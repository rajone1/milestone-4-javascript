// 22-4 Math, abs, pow, round, ceil, floor, and random number

const result = Math.pow(3, 3);

console.log(result);

// abs ,absulate value bar korar jonno

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

console.log(gap);
if (gap < 5) {
  console.log("can be friend");
} else {
  console.log("stay a part");
}

// its wrong because the value is -20
console.log(gap);
if (gap < 5) {
  console.log("can be friend");
} else {
  console.log("stay a part");
}

// round, ceil , floor

const number = 12.566666;
// const number = 12.49004006099;
const number1 = Math.round(number);
const number2 = Math.ceil(9.4445);
const number3 = Math.floor(9.34455);
const number5 = Math.max(1, 9, 3, 5, 7, 10);
const number6 = Math.min(1, 9, 3, 5, 7, 10);

console.log(number1);
console.log(number2);
console.log(number3);
console.log(number5);
console.log(number6);
// random number
const randomnumber1 = Math.random();
const randomnumber2 = Math.random() * 100;
const randomnumber3 = Math.round(Math.random() * 100);

console.log(randomnumber1);
console.log(randomnumber2);
console.log(randomnumber3);

// we can use loop

for (let i = 0; i < 5; i++) {
  const number4 = Math.round(Math.random() * 6);
  console.log(number4);
}
