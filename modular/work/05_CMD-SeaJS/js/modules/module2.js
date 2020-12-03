define(function (require, exports, module) {
    let msg = 'module2';

    //定义要暴露的方法
    function bar() {
        console.log(msg);
    }

    //不暴露对象，暴露方法
    module.exports = bar;
});