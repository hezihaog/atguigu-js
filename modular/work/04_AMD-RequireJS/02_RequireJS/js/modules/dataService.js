//定义一个没有依赖的模块

define(function () {
    let name = 'dataService';

    function getName() {
        return name;
    }

    //暴露模块
    return {
        getName
    };
});