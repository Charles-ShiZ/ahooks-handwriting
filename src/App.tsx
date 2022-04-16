import { useState } from 'react'
import useMount from '../hooks/useMount'
import useBoolean from '../hooks/useBoolean'
import usePrevious from '../hooks/usePrevious'
import useLock from '../hooks/useLock'
import {debounce} from '../hooks/utils'
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
  const submit = useLock(async () => {
    console.log('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    console.log('Submit finished');
  })
  useMount(() => {
    console.log('q23123')
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
    </div>
  )
}


const a = async () => {
  console.log('234234')
}
console.log( a())

export default App
