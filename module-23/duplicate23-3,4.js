function dontSetDuplicate(name) {
  const unique = [];
  for (let i = 0; i <= name.length - 1; i++) {
    const findindex = name1[i];
    //     console.log(findindex);

    if (unique.includes(findindex) === false) {
      unique.push(findindex);
    }
  }
  return unique;
}

const name1 = [
  "shaon",
  "ishrak",
  "robin",
  "Shaon",
  "robin",
  "ishrak",
  "eti",
  "purno",
  "eti",
  "eti",
];

const result = dontSetDuplicate(name1);
console.log(result);

// 23-4
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log("foo");
//   }

//   console.log(i);
// }

for (let i = 1; i <= 50; i++) {
  if (i % 3 == 0 && i % 5 === 0) {
    console.log("foobar");
  } else if (i % 3 == 0) {
    console.log("foo");
  } else if (i % 5 === 0) {
    console.log("bar");
  }
  console.log(i);
}
