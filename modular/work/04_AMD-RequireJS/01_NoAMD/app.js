//汇集子模块
(function (alerter) {//立即执行函数中声明需要一个alerter形参
    //调用alerter模块的showMsg()方法
    alerter.showMsg();
})(alerter);//声明依赖alerter，就会注入alerter到立即执行函数中