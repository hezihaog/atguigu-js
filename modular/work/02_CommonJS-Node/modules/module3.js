//exports.xxx = value
exports.foo = function () {
    console.log('foo() module3');
};

//通过exports.xxx = value的形式，可以无限添加，如果使用module.exports只能有一个，多个会覆盖前面的
exports.bar = function () {
    console.log('bar() module3');
};

//暴露一个arr属性，它是一个数组
exports.arr = [2, 3, 4, 5, 2, 3, 5, 1, 11];