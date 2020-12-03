//定义一个没有依赖的模块

define(function (require, exports, module) {
    let msg = 'module1';

    //定义暴露的方法
    function foo() {
        return msg;
    }

    //暴露模块
    module.exports = {
        foo
    };
});