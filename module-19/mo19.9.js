var fruits = ["Apple", "Banana", "Orenge"];

var findIndex = fruits.indexOf("Banana");

console.log(findIndex);
fruits[1] = "Mango";
console.log(fruits);
fruits.pop();
fruits.push("Watermelon");
console.log(fruits);

// problem 2

var Marks = 85;

if (Marks >= 80) {
  console.log("A grade");
} else if (Marks >= 60) {
  console.log("B grade");
} else if (Marks >= 50) {
  console.log("c Grade");
} else if (Marks >= 40) {
  console.log("D grade");
} else if (Marks <= 39) {
  console.log("F grade");
} else {
  console.log("Problem");
}

// problem 3
// konta boro
var num1 = 80;
var num2 = 10;
var num3 = 30;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

// or use else if
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else if (num2 > num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// problem 3 somodi bahu find
var side1 = 9;
var side2 = 8;
var side3 = 9;
if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("isosceles");
}

// module 19.5
for (var i = 581; i <= 623; i += 2) {
  console.log(i);
}

var learn = ["a", "b", "c", "d", "e", "f"];

for (var i = 0; i <= learn.length; i++) {
  var learnall = learn[i];

  console.log(learnall);
}

var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i <= arrays.length; i++) {
  var arr2 = arrays[i];

  console.log(arr2);
}

//

var a = 1;

while (a <= 7) {
  if (a % 2 == 0) {
    console.log(a, "is even number");
  } else {
    console.log("a, is odd");
  }

  a++;
}
