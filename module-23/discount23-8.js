/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function ticketprice(ticketquantity) {
  const first100price = 100;
  const second100price = 90;
  const restprice = 70;

  if (ticketquantity <= 100) {
    const price100 = 100 * first100price;
    return price100;
  } else if (ticketquantity <= 200) {
    const first100rate = first100price * 100;
    const second100quantity = ticketquantity - 100;
    const second100rate = second100quantity * second100price;
    const total200price = first100rate + second100rate;
    return total200price;
  } else {
    const first100 = 100 * first100price;
    const second100 = 100 * second100price;
    const restticketquantity = ticketquantity - 200;
    const restticketprice = restticketquantity * restprice;

    const totalrest = first100 + second100 + restticketprice;

    return totalrest;
  }
}

const all = ticketprice(201);
console.log(all);

// module -  23-9

function num(num1, num2) {
  if (typeof num1 !== "number") {
    console.log("please input the number");
  }

  return num1 + num2;
}

const output = num("Afsana", 5);
console.log(output);

function multiply(num1, num2) {
  return num1 * num2;
}

const result = multiply(5, 3);
console.log(result);
