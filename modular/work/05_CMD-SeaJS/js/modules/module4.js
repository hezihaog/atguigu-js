define(function (require, exports, module) {
    let msg = 'module4';
    //引入module2、module3

    //同步引入，required()方法中，传入要同步引入的模块的路径
    let module2 = require('./module2');
    module2();
    //异步引入，第一个参数是要异步引入的模块的路径，第二个参数是引入成功的回调函数，函数的形参是模块变量名
    require.async('./module3', function (module3) {
        module3.module3.fun();
    });

    function fun2() {
        console.log(msg);
    }

    //暴露该模块的fun2方法
    exports.fun2 = fun2;
});