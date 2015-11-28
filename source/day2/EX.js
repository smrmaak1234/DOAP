//
//파라미터로 배열을 받아 배열의 값을 출력하는 함수 foo

var foo = function(array) {
	for(var i=0; i<array.length; i++){
		console.log(array[i]);
	}
}	

var bar=function(array1, array2){for(var i=0; i<array1.length; i++){
array2.push(array1[i]);
}
};

var users= [];
var singup =function(name,age){var user = {name: name, age: age};
users.push(user);
};


var signout=function(name) {
	for(var i=0; i<users.length; i++){
		if(users[i].name === name){
			users.splice(i,1);
			break;
		}

	}
}

var modify = function(name,age){
	for(var i=0; i<users.length; i++){
		if(users[i].name === name){
			users[i].age = age;
			break;
		}
	}
}