export function debounce(fn: (...args: any) => void, delay = 500) {
  let timer = null as number | null
  return function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => fn(arguments), delay)
  }
}

export function throttle(fn: (...args: any) => void, delay = 500) {
  //时间初始化
  let oldTime = 0
  return function () {
    let lastTime = Date.now()
    if ((lastTime - oldTime) > delay) {
      fn(arguments)
      oldTime = lastTime
    }
  }
}