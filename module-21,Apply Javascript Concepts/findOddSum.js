/* function getSumOfAnArray(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    const index1 = i;

    const findvalue = number[index1];

    sum = sum + findvalue;
    //     sum += findvalue;
    console.log(index1, findvalue, sum);
  }
  return sum;
}

const array = [12, 33, 45, 455, 67, 78, 56];

const find = getSumOfAnArray(array); */
// console.log(find);

// module 21-6

/* function findOddNumber(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    const value2 = numbers[index];
    if (value2 % 2 !== 0) {
      console.log(index, value2);
    }
  }
}

const array2 = [12, 33, 45, 455, 67, 78, 56];
findOddNumber(array2); */

// return and odd number in a array
function findOddNumber(numbers) {
  let oddNumber = [];

  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    const value2 = numbers[index];
    if (value2 % 2 !== 0) {
      console.log(index, value2);

      oddNumber.push(value2);
    }
  }
  return oddNumber;
}

const array3 = [12, 33, 45, 455, 67, 78, 56];
let result = findOddNumber(array3);
console.log(result);
