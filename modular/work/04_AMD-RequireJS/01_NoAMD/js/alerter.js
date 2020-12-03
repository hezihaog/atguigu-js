//定义一个有依赖的模块
(function (window, dateService) {
    let msg = 'alerter.js';

    function showMsg() {
        //使用dateService模块的getNmae()方法
        console.log(msg, dateService.getName());
    }

    //暴露一个对象到window，里面有showMsg方法
    window.alerter = {
        showMsg
    };
})(window, dateService);//声明要依赖dateService模块