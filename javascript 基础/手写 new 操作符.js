function New(constructor, ...args) {
  const prototype = constructor.prototype
  const newObj = Object.create(prototype)
  const result = constructor.apply(newObj, args)
  if (typeof result === 'object' || typeof result === 'function') {
    return result
  } else {
    return newObj
  }
}

function Person(name, age) {
  this.name = name
  this.age = age
}

console.log(New(Person, 'shizhanhong', 14), new Person('shizhanhong', 14))