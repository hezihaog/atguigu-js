//定义一个没有依赖的模块
(function (window) {
    let name = 'dataService.js';

    function getName() {
        return name;
    }

    //暴露一个方法到window，里面有一个getName()方法
    window.dateService = {
        getName
    };
})(window);