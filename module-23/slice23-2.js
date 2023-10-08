// slice //will copy the orginal array
const friends = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const cutslice = friends.slice(1, 7);
console.log(cutslice);
console.log(friends);
// splice // will change the orginal array
// (2,3,add new element)= (start , koita sorabo value)
const friends2 = [9, 10, 80, 90, 100, 14, 15, 16, 17, 18, 19, 20];

const dosplice = friends2.splice(2, 3, 11, 12, 13);
console.log(dosplice);
console.log(friends2);
