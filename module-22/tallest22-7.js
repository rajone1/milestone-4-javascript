// find the largest number

function maxInarray(numbers) {
  //   console.log(number);
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    console.log(element);
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const height = [122, 34, 234, 52, 345, 644, 777];
const tallest = maxInarray(height);
console.log("tallest person is:", tallest);
