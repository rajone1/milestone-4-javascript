/* // calculate total cost

const shoppingcart = [
  { name: "shirt", price: 1000 },
  { name: "pant", price: 1500 },
  { name: "shoe", price: 2000 },
  { name: "watch", price: 1200 },
  { name: "glass", price: 200 },
];

function totalcost(allprice) {
  let sum = 0;
  for (let i = 0; i <= allprice.length - 1; i++) {
    let priceindex = allprice[i];
    console.log(priceindex);
    sum = sum + priceindex.price;
  }
  return sum;
}

let calculate = totalcost(shoppingcart);

console.log(calculate); */

// quantity cart

// calculate total cost

const shoppingcart = [
  { name: "shirt", price: 1000, quantity: 8 },
  { name: "pant", price: 1500, quantity: 4 },
  { name: "shoe", price: 2000, quantity: 2 },
  { name: "watch", price: 1200, quantity: 2 },
  { name: "glass", price: 200, quantity: 1 },
];

function totalcost(allprice) {
  let sum = 0;
  for (let i = 0; i <= allprice.length - 1; i++) {
    let priceindex = allprice[i];
    console.log(priceindex);
    let prodouctTotal = priceindex.price * priceindex.quantity;

    sum = sum + prodouctTotal;
  }
  return sum;
}

let calculate = totalcost(shoppingcart);

console.log(calculate);
