//使用匿名函数，将数据私有化
(function (window) {
    //私有的数据，外部不能访问到
    var msg = 'My atguigu';

    //操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    //把要暴露的对象和方法放到window上，作为它的属性
    //这种方式的优点是，不需要调用方去调用一个有名函数，再从函数的返回值（一般是对象），来获取暴露的对象和方法
    //这种方式，直接在window上就挂载了暴露的对象，从window中获取并使用即可
    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})(window);