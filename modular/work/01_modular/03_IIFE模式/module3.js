/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */
//IIFE模式
(function (window) {
    //定义一个变量
    let msg = 'module3';

    //定义一个方法
    function foo() {
        console.log('foo()', msg);
    }

    //给window添加一个module3属性，并且将foo方法放在里面
    window.module3 = {
        //foo: foo
        foo//ES6对象属性简写，同名属性只写一个即可
    };
})(window);