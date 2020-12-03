define(function (require, exports, module) {
    let data = 'module3';

    //定义要暴露的方法
    function fun() {
        console.log(data);
    }

    //暴露模块对象，对象的名称叫 module3，暴露的方法名叫fun
    exports.module3 = {
        fun
    };
});