/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */
//注入window和jQuery，形参是jQuery，实参为$
(function (window, $) {
    //定义一个变量
    let msg = 'module4';

    //定义一个方法
    function foo() {
        console.log('foo()', msg);
    }

    //暴露方法到window，这个方法对象的变量名叫module4
    window.module4 = foo;
    $('body').css('background', 'red');
})(window, jQuery);//jQuery是jQuery类库在window上放置的变量，通过传入这个jQuery变量，我们自己的模块就可以使用jQuery了