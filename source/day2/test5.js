var a = {s:1, e:2,d:3};
console.log(a.s);
console.log(a.e);
console.log(a.d);
console.log(a.s+a.e+a.d);

console.log(a);

for(key in a) {console.log('key: '+key+' value: '+a[key]);
}
