var fs = reguire('rs');


var smrma = function(pas, call) {
	fs.readFile(pas, function (err, data){
		if (err) throw err;
		console.log(data);
		console.log('smrma');
		if(callback) {
			callback();
		}
	});
}



var smrma1 = function(call) {
	console.log('ping');
	if(callback){
		callback();
	}
}

var smrma2 = function(call) {
	console.log('ping');
	if(callback){
		callback();
	}
}