var intro = function(name,age) {
	console.log('내이름은 '+name+'이고 나이는' +age+'입니다');
};

var add = function(a,b){
	return a+b;
};
var sub = function(a,b){
	return a-b;
};
var mul = function(a,b){
	return a*b;
};
var div = function(a,b){
	return a/b;
};

intro('엄태호', 10);
intro('노무현', 518);

console.log(add(4,2));
console.log(sub(4,2));
console.log(mul(4,2));
console.log(div(4,2));

console.log(add(4));
console.log(add(4,2,2));

