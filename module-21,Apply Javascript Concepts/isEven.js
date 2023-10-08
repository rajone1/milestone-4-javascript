// console.log(7 / 2);
// console.log(17 / 2);
// console.log(127 / 2);

// //

// console.log(7 % 2);
// console.log(17 % 2);
// console.log(127 % 2);

function FindEvenOdd(number) {
  let reminder = number % 2;
  //   console.log(reminder);

  if (reminder === 0) {
    console.log("its a even number:", number);
  } else {
    console.log("its a odd number:", number);
  }
}
FindEvenOdd(123);
FindEvenOdd(122);
// use return

function findEvenOdd(number) {
  const reminder = number % 2;
  if (reminder == 0) {
    return true;
  } else {
    return false;
  }
}

const WhatItis = findEvenOdd(122);
console.log(WhatItis, "what number");
