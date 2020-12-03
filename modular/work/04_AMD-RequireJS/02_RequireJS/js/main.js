(function () {
    requirejs.config(
        {
            baseUrl: 'js/',//基本的路径，出发点在根目录下
            paths: {//配置路径，key是模块名，value是模块的路径，注意不要加.js后缀，它会帮你拼上.js后缀
                //注意前面要有.，这个.代表当前目录，就是代表js/，如果去掉，就不是从js/开始找了，就会找不到（要加的话，就要加./，不加的话，就要将./去掉，而不是只去掉一个.）
                dataService: './modules/dataService',
                alerter: './modules/alerter',
                jquery: './libs/jquery-1.10.1',//声明第三方模块jQuery，注意jQuery对AMD规范做了处理，暴露出来的模块名叫jquery（都是小写的）
                angular: './libs/angular'
            },
            //angular需要配置，才能支持AMD规范
            shim: {
                //key是模块名，value是一个对象，通过exports指定暴露的对象，而angular会在window中暴露一个叫angular的变量
                angular: {
                    exports: 'angular'
                }
            }
        },
    );

    //通过requirejs，申明依赖的模块
    //第一个参数是一个数组，里面放要依赖的模块名（模块会自己找自己依赖的模块，不需要自己去声明模块内部依赖的模块）
    //第一个参数是一个回调函数，函数的形参是依赖的模块的变量名
    requirejs(['alerter', 'angular'], function (alerter, angular) {
        //调用依赖的模块的方法
        alerter.showMsg();
        //检查是否把angular引入成功
        console.log(angular);
    });
})();