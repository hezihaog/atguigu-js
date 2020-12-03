//引入其他模块

//语法 import xxx from '路径'

//引入第三方库jQuery
import $ from 'jquery';

//ES6模块化中，引入别的模块，import xxx，这个xxx要用结构赋值方式去拿，将暴露的方法或变量写上，不能直接写一个变量拿全部
import {foo, bar} from './module1'
import {fun, fun2} from './module2'
//引入默认暴露的模块，就不需要使用解构赋值的方式，直接一个变量接收
import module3 from './module3';

//console.log(module1, module2);
$('body').css('background', 'green');

//调用module1中暴露的方法
foo();
bar();
//调用module2中暴露的方法
fun();
fun2();
//调用module3暴露的方法
module3.foo();