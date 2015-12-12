var u1 = {name: "aaaa", age:10, item: ['item1', 'item2']};
var u2 = {name: "bbbb", age:20, item: ['item1', 'item2']};
var u3 = {name: "cccc", age:30, item: ['item1', 'item2']};
var u4 = {name: "dddd", age:40, item: ['item1', 'item2']};

var users =[];
users.push(u1);
users.push(u2);
users.push(u3);
users.push(u4);

//console.log(users);

//users.splice(2,1);

for(var i=0; i<users.length; i++){




if(users[i].name === 'aaaa'){
console.log('이름은' +users[i].name+"입니다");
console.log('나이는' +users[i].age+"입니다");
console.log('아이템은' +users[i].item+"입니다");
console.log('----------------------------------------');
break;
}

}