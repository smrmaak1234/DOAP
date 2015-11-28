var array = [];
var array2 = [1,2,3,4,5];
var array3 = new Array(1,2,3,4,5);
var array4 = new Array();
array4[0] = 1;
array4[1] = 2;
array4[2] = 3;
array4[3] = 4;
array4[4] = 5;

console.log(array);
console.log(array4);
console.log(array2);
console.log(array3);

var object = {};
object.a = array2;

var array5 = [];
array5[0] = object;
array5[1] = object;

console.log(array5);
console.log(object);