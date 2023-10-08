/* 
perchairwood =3ceft
perTablewood= 10ceft
perBedWood = 50ceft

totalwood = ??
*/

function woodcalculation(chairquantity, tablequantity, bedquantity) {
  perchairwood = 3;
  perTablewood = 10;
  perBedWood = 50;

  const chairwood = chairquantity * perchairwood;
  const tablewood = tablequantity * perTablewood;
  const bedwood = bedquantity * perBedWood;

  const totalwood1 = chairwood + tablewood + bedwood;

  return totalwood1;
}
const totalwood = woodcalculation(1, 0, 0);
console.log("total wood requirement", totalwood);
