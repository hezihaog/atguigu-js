//默认暴露，可以暴露任意数据类型，而且暴露什么数据，接收就是什么数据
//默认暴露只能暴露一次，多次的话，编译就会报错，所以默认暴露的变量或方法要写在一个对象中一起暴露

// export default () => {
//     console.log('我是默认暴露的箭头函数');
// }

export default {
    msg: '默认暴露',
    foo() {
        console.log(this.msg);
    }
}