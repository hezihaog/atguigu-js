//将其他的模块汇集到主模块

//导入uniq第三幅模块，一般都写在自定义模块的上面
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

//使用uniq第三方模块的去重（注意它默认会进行排序，但是是按照Unicode编码排序的，所以最后的11会排到前面去）
let result = uniq(module3.arr);
console.log(result);