function debounce(fn, delay = 1000) {
  if (typeof fn !== 'function') throw ('debounce要求传入函数')

  let timeout = null
  const debouncedFn = (...args) => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => fn(...args), delay)
  }
  debouncedFn.cancel = () => {
    if (timeout) clearTimeout(timeout)
  }
  return debouncedFn
}
const fn = () => {
  console.log('123123')
}
const debouncedFn = debounce(fn)
debouncedFn()