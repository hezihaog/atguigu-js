//统一暴露

function fun() {
    console.log('fun() module2');
}

function fun2() {
    console.log('fun2() module2');
}

//暴露一个对象，里面暴露2个方法
export {
    fun,
    fun2
};