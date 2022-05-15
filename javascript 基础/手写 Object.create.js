// Object.create : 生成一个新对象，将传入的对象作为其原型
// 演示
const prototype = { name: 'i am prototype' }
const newObj = Object.create(prototype)

// 实现
function ObjectCreate(obj) {
  function F() { }
  F.prototype = obj
  return new F()
}