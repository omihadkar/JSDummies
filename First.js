var store = require('./stuff');


let x=1;
let y=1;
console.log(x+y);

console.log(global);

console.log(require);

console.log("require");

function sayHi(){
    console.log('hi');
}


var sayBi=function()
{
    console.log('bye');
}

sayHi();

store.adder(1,2,3);