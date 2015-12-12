var users =[];

var singin = function(name,age) {
	  if(!name || !age) {
		console.log('가입실패! 이름,나이를 입력하세요. ');
		return;
	}


for(var i=0; i<users.length; i++){
	if(users[i].name === name) {
		console.log('가입실패! 이미 가입한 회원입니다.');
		return;
	}
}







	//if(!name) {
	//	console,log('가입실패 ! 이름이 존재하지 않습니다.');
	//	return;
	//}

	//if(!age) {
	//	console.log('가입실패! 나이가 존재하지 않습니다.');
	//	return;
	//}

	//중복 가입인지 name 으로 검증하기

	// 검증이 완료되면 객체를 만들어서 users 배열에 넣는다.

	var user = {name: name, age: age};
	users.push(user);
	console.log('가입성공!');
}

var singout = function(name) {
	if(!name) {
		console.log('탈퇴실패! 이름을 입력하세요.')
		return;

	}

	for(var i=0; i<users.length; i++){
		if(users[i].name === name){
			users.splice(i, 1);
			console.log('탈퇴성공!');
			return;
		}
	}
	console.log('탈퇴실패 이미 탈퇴한 회원이거나 가입한 적이 없습니다.');
	return;
}


var printsUsers = function(){
	console.log('=============회원가입 현황========');
	for(var i=0; i<users.length; i++){
		console.log(users[i]);
	}
	console.log('==================================');
}

singin('a',10);
singin('b',20);
singin('c',30);
singout('a');
singout('d');



printsUsers();