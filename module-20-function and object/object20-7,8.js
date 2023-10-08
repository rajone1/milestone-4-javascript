var Myinfo = {
  name: "Shaon",
  id: 126,
  address: "Rajshahi",
  Education: "MBA",
  gender: "male",
};

var Myinfo2 = {
  name: "Mim",
  id: 125,
  address: "horipur",
  Education: "English",
  gender: "female",
};

var Myinfo3 = {
  name: "Eva",
  id: 128,
  address: "durgapur",
  Education: "MBA",
  gender: "female",
};
console.log(Myinfo);
// spacific value
// when you know the property name,use dot.nottation
console.log(Myinfo.id);
// or
var findid = Myinfo2.id;
// or
// var findid = Myinfo2["id"];
console.log(findid);
// find the object key or properties
var properties = Object.keys(Myinfo2);
console.log(properties);
// find properties value
var keysValue = Object.values(Myinfo2);
console.log(keysValue);

// input change korta subidha ai vhabe likhla
var Myinfo2 = {
  name: "Mim",
  id: 125,
  address: "horipur",
  Education: "English",
  gender: "female",
};
// var keyname = "id";
// var keyname = "address";
var keyname = "id";
var keyvalue2 = Myinfo2[keyname];
console.log(keyname, keyvalue2);

// set property value
Myinfo2.id = 130;
console.log(Myinfo2);
// or
Myinfo2["id"] = 130;
console.log(Myinfo2);
// or
var keyname = "id";
Myinfo2[keyname] = 140;
console.log(keyname, Myinfo2);

// 20-8 module

var shopping = {
  book: 5,
  sunglass: 2,
  mouse: 4,
  pen: 12,
  shoes: 4,
};
/* var findkey = Object.keys(shopping);
console.log(findkey);
var findvalue = Object.values(shopping);
console.log(findvalue);
 */
// use loop
var findkey = Object.keys(shopping);
for (var i = 0; i < findkey.length; i++) {
  var propertyName = findkey[i];
  var findproperty = shopping[propertyName];
  console.log(propertyName, findproperty);
}
