// let sum = 0;

// for (let i = 0; i <= 7; i++) {
//   sum = sum + i;
//   console.log(i, sum);
// }

/* function sumofNumber(number) {
  let sum = 0;

  for (let i = 1; i <= 7; i++) {
    sum = sum + i;
    //     console.log(i, sum);
  }
  return sum;
}

let sum2 = sumofNumber(7);

console.log(sum2);
 */
// multiplication
// factorial !4= 4*3*2*1
/* function factorial(number) {
  let result = 1;
  for (let i = 1; i <= 7; i++) {
    result = result * i;
  }
  return result;
}

let result1 = factorial(7);
console.log(result1);
 */
// factorial 2

// function factorial(number) {
//   for (let i = number; i >= 1; i--) {
//     console.log(i);
//   }
// }
// factorial(9);

function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;

    console.log(i);
  }
  return result;
}
let num1 = 6;
let re = factorial(num1);
console.log("factorial ", num1, "=", re);
// factorial 3 while loop

function factorial3(number) {
  let result = 1;
  let num3 = 1;
  while (num3 <= 7) {
    result = result * num3;

    console.log(num3);
    num3++;
  }

  return result;
}

let a = factorial3(1);
console.log(a);

// factorial 4

function factorial4(number) {
  let i = number;
  let result = 1;
  while (i >= 1) {
    result = result * number;
    i--;
    console.log(i);
  }
  return result;
}
let findFactorial = factorial4(6);
console.log(findFactorial);
