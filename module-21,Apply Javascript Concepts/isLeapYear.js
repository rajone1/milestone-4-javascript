function isLeapyear(number) {
  const find = number % 2;
  if (find === 0) {
    return true;
  } else {
    return false;
  }
}

const calculate1 = isLeapyear(1952);
console.log("leap Year:", calculate1);
const calculate2 = isLeapyear(1971);
console.log("leap year:", calculate2);
