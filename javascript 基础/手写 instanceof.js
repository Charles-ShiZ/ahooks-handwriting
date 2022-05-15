// instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。


function instanceOf(obj, constructor) {
  let __proto__ = Object.getPrototypeOf(obj)
  const prototype = constructor.prototype

  while (true) {
    if (__proto__ === null) return false
    if (__proto__ === prototype) return true
    __proto__ = Object.getPrototypeOf(__proto__)
  }
}