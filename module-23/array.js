let findname = "Shaon";
let number = 12;
let istrue = true;
let all = { name: "Shaon", education: "MBA", addres: "Rajshai" };
let findarray = [122, 233, 443, 45, 54, 12];
function isfunction(name1, name2) {
  name1 = name2;
  return name1;
}
console.log(typeof findname);
console.log(typeof number);
console.log(typeof istrue);
console.log(typeof all);
console.log(typeof isfunction);
console.log(typeof findarray);
console.log(Array.isArray(findarray));

// find array value

console.log(findarray.includes(122));
console.log(findarray.includes(111));
// concatenate = songuktokora

let findarray1 = [7, 8, 9, 10, 11];
let findarray2 = [12, 13, 14];

const addArray = findarray1.concat(findarray2);

console.log(addArray);
