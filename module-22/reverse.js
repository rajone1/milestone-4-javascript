/* function reverseString(text) {
  for (let i = 0; i <= text.length; i++) {
    const element = text[i];
    console.log(element);
  }
}

const myString = "i am a good boy";
const reversed = reverseString(myString);
 */
/* function reverseString(text) {
  let reversed1 = "";
  for (let i = text.length - 1; i > 0; i--) {
    const element = text[i];

    reversed1 = reversed1 + element;
    console.log(element, reversed1);
  }
  return reversed1;
}

const mystring = " i am a good boy";

const reversed1 = reverseString(mystring);
console.log(reversed1); */

// / word reverse
function reverseWord(word) {
  let wordchange = word.split(" ");
  let result = [];
  for (let i = wordchange.length - 1; i >= 0; i--) {
    const element = wordchange[i];
    result.push(element);
  }
  console.log(result);
}
const myword = " i am a web Developer";
reverseWord(myword);
// 22.9
/* 
let fibo = [0,1]
fibo[n]= fibo[n-1]+fibo [n-2]
fobo[i]= fibo[i-1]+fibo [i-2]

*/

let fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);
