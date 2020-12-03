//将其他的模块汇集到主模块

let uniq = require('uniq');

let module1 = require('./modules/module1');
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

//module1是一个对象，调用对象中的foo()函数
module1.foo();
//module2自己就是一个函数，直接调用即可
module2();
//module3也是一个对象，调用方法即可
module3.foo();
module3.bar();

let result = uniq(module3.arr);
console.log(result);