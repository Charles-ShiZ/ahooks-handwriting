export function debounce(fn: (...args: any) => void, delay = 500) {
  let timer = null as number | null
  const debounceFn = function () {
    timer && clearTimeout(timer)
    timer = setTimeout(() => fn(arguments), delay)
  }
  debounceFn.cancel = () => timer && clearTimeout(timer)
  return debounceFn
}

export function throttle(fn: (...args: any) => void, delay = 500) {
  //时间初始化
  let oldTime = Date.now()
  return function () {
    let lastTime = Date.now()
    console.log((lastTime - oldTime), delay)
    if ((lastTime - oldTime) > delay) {
      fn(arguments)
      oldTime = lastTime
    }
  }
}