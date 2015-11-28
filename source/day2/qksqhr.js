/*
for(초기화; 반복조건; 반복이 될 때마다 실행되는 코드){
    반복해서 실행될 코드
}
*/

for(var i = 0; i < 10; i++){
  console.log('i:'+i);
}

for(var i = 0; i < 10; i++){
  if(i === 5) {
    break;
  }
  console.log('i:'+i);
}

for(var i = 0; i < 10; i++){
  if(i === 5) {
    continue;
  }
  console.log('i:'+i);
}

for(var i = 0; i < 10; i++) {
  for(var j = 0; j < 10; j++) {
    console.log('i:'+i+'\tj:'+j);
  }
}

/*
while (조건){
    반복해서 실행할 코드
}
*/

var i = 0;
while(true) {
  console.log('i:'+i++);
}
