/**
 * 分线程代码，代码格式是固定的
 */

//计算斐波那契数列 1 1 2 3 5 8
//f(n) = f(n - 1) + f(n - 2)
function fibonacci(n) {
    //递归调用
    return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

//DedicatedWorkerGlobalScope
console.log(this);

//var onmessage，设置一个回调函数，当收到主线程发送的消息时回调，这个格式是固定的，不能改
var onmessage = function (event) {
    console.log('--------------------');
    //event.data，主线程传递过来的数据
    var number = event.data;
    console.log('分线程接收到主线程发送过来的数据：' + number);
    //进行计算
    var result = fibonacci(number);
    //postMessage()，回传结果给主线程，格式也是固定的
    postMessage(result);
    console.log('分线程向主线程返回数据：' + result);
    console.log('--------------------');
    //alert(result)  alert是window的方法, 在分线程不能调用
    //分线程中的全局对象不再是window, 所以在分线程中不可能更新界面
};