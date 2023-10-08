let colour = "green";

if (colour == "yellow") {
  console.log("your dress color is yellow");
} else if (colour == "red") {
  console.log("your dress color is red");
} else if (colour == "blue") {
  console.log("your dress color is blue");
} else if (colour == "green") {
  console.log("your dress color is green");
} else {
  console.log("your dress color is white");
}

// switch is faster than for loop

let colour1 = "red";

switch (colour1) {
  case "green":
    console.log("your dress color is green");
    break;

  case "yellow":
    console.log("your dress color is yellow");
    break;
  case "red":
    console.log("your dress color is red");
    break;
  case "blue":
    console.log("your dress color is blue");
    break;

  default:
    console.log("your dress color is white");
}
