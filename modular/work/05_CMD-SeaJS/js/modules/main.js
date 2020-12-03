define(function (require) {
    //引入module1
    let module1 = require('./module1');
    //调用module1中暴露的foo()方法
    console.log(module1.foo());

    //引入module4
    let module4 = require('./module4');
    //调用module4中暴露的fun2()方法
    module4.fun2();
});