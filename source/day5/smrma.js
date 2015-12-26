var _ = require('lodash');

//var array1 = [1,2,3,4,5,6,7,8,9,10];


//var result = _.filter(array1, function(data){
	//console.log(data);
//	return data % 2 == 0;
//});


//console.log(result);

//ar array2 = [{name :'a', age:10,name :'b', age:20,name :'c', age:30}];


//var result2 = _.filter(array2, function(data){
//	return data.age > 10;
//});


//var result3 = [];
//for(var i=0; i<array2.length; i++) {
//	if(array2[i].age > 10){
//		result3.push(array2[i]);
//	}
//}

var array3 = [{name :'a', age:10,name :'b', age:20,name :'c', age:30}];


var result4 =_.map(array3, function(data){
	return {name: data.name, age: data.age+1}
});


console.log(result4);