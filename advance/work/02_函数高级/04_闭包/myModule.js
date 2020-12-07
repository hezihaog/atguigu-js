function myModule() {
    //私有的数据，外部不能访问到
    var msg = 'My atguigu';

    //操作数据的函数
    function doSomething() {
        console.log('doSomething() ' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing() ' + msg.toLowerCase());
    }

    //用一个对象包裹，向外暴露对象（给外部使用的方法）
    //外部调用方，需要调用myModule()方法获取返回值后，从返回值中获取暴露的函数
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    };
}