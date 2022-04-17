import { useState } from 'react'
import { debounce } from '../hooks/utils'
import {
  useBoolean, useDebounce, useDebounceState, useLock, useMount, usePrevious, useThrottle,
  useThrottleState
} from '../hooks'

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}
const deb = debounce(() => {
  console.log('debounce')
}, 2000)
function App() {
  const [open, toggleOpen] = useBoolean(false)
  const [count, setCount] = useState(1)
  const previewCount = usePrevious(count)
  const [delayToggleOpen, cancelToggleOpen] = useDebounce(() => {
    toggleOpen()
  }, 1000)
  const debounceCount = useDebounceState(count, 1000)
  const [throttleFn] = useThrottle(() => {
    setCount(count+1)
  }, 1000)
  const throttleState = useThrottleState(count, 2000)
  const submit = useLock(async () => {
    console.log('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    console.log('Submit finished');
  })
  useMount(() => {
    console.log('useMount')
  })
  return (
    <div className="App">
      This is Empty Vite React Demo :{String(open)}
      <button onClick={() => toggleOpen()}>toggle</button>
      <button onClick={() => toggleOpen(false)}>setFalse</button>
      <button onClick={() => toggleOpen(true)}>setTrue</button>
      <div>previous: {previewCount}</div>
      <div>current: {count}</div>
      <button onClick={() => setCount(count + 1)}>更新</button>
      <button onClick={() => submit()}>submit</button>
      <button onClick={() => deb()}>deb</button>
      <button onClick={() => delayToggleOpen()}>delayToggleOpen</button>
      <button onClick={() => cancelToggleOpen()}>cancel</button>
      <button>debounceCount:{debounceCount}</button>

      <button onClick={() => throttleFn()}>throttleFn</button>
      throttleState:{throttleState}
    </div>
  )
}

export default App
