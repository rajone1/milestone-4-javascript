var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i < 7; i++) {
  console.log(i);
}

var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i < 7; i++) {
  var array1 = arrays[i];

  console.log(array1);
}
// lenth

var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i < arrays.length; i++) {
  var arr2 = arrays[i];

  console.log(arr2);
}

// string

var strings = ["shaon", "Rezwan", "afsana", "mim", "farjana", "eva"];

for (var i = 0; i < strings.length; i++) {
  var name1 = strings[i];

  console.log(name1);
}
// beeak and  continue

var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i < arrays.length; i++) {
  var arr2 = arrays[i];

  if (arr2 == 50) break;
  console.log(arr2);
}
//

var arrays = [10, 20, 30, 40, 50, 100, 60, 70, 90, 100];

for (var i = 0; i < arrays.length; i++) {
  var arr2 = arrays[i];

  if (arr2 >= 80) continue;
  console.log(arr2);
}

var strings = ["shaon", "Rezwan", "afsana", "mim", "farjana", "eva"];

for (var i = 0; i < strings.length; i++) {
  var name1 = strings[i];
  if (name1 == "mim") break;

  console.log(name1);
}
