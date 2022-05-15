function throttle(fn, time = 1000) {
  let preTime = Date.now()
  return (...args) => {
    let curTime = Date.now()
    if (curTime - preTime >= time) {
      preTime = Date.now()
      return fn(...args)
    }
  }
}
