//定义一个有依赖的模块

//define声明模块，第一个参数是一个数组，里面放要依赖的模块的名称
//第二个参数是一个回调函数，回调函数的实参要放依赖的模块名的变量名
define(['dataService', 'jquery'], function (dataService, $) {
    let msg = 'alerter.js';

    //定义一个方法，暴露出去，里面调用依赖的dataService的方法
    function showMsg() {
        console.log(msg, dataService.getName());
    }

    $('body').css('background', 'deeppink');

    //暴露模块，一般是一个对象，因为对象可以放任何东西，函数的话就不是了
    return {
        showMsg
    };
});