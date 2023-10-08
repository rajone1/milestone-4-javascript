// find string value
const lyric = "Allah ka  ja paita chai hojrot ka vhalo basa";

const doesExist = lyric.includes("Allah");
console.log(doesExist);
const doesExist2 = lyric.includes("allah");
console.log(doesExist2);
const find = lyric.includes("allah");
// lower case and search value lower case
const findValue = "Allah";

const findvaluelowerCase = findValue.toLocaleLowerCase();
var lyriclowerCase = lyric.toLocaleLowerCase();

const doesexist3 = lyriclowerCase.includes(findvaluelowerCase);
console.log(doesexist3);

// shorthand

const lyric2 = "Allah ka ja paita chai hojrot ka vhalo basa";

let searchValue = "allaH";
const findAllValue = lyric2
  .toLocaleLowerCase()
  .includes(searchValue.toLocaleLowerCase());
console.log(findAllValue);

// index of means kotogula
console.log(lyric2.indexOf("ka"));
console.log(lyric2.indexOf("ja"));
console.log(lyric2.indexOf("jaa"));

if (lyric2.indexOf("Allah") !== -1) {
  console.log("Exist inside the string");
} else {
  console.log("not Exist the string");
}
// not exist
if (lyric2.indexOf("Allahhh") !== -1) {
  console.log("Exist inside the string");
} else {
  console.log("not Exist the string");
}

// start with end with

// split means bivhokto
const lyric3 =
  "Allah ka ja paita chai.hojrot ka vhalo basa.rasul namer rosi dhora jata hoba allar ghora";

const parts = lyric3.split("");
const parts1 = lyric3.split(" ");
const parts2 = lyric3.split(".");

console.log(parts);
console.log(parts1);
console.log(parts2);

// slice ,substr, substring, concat, join

const sliceSentence = lyric3.slice(0, 5);
console.log(sliceSentence);
