import { useRef } from 'react'

export default function usePrevious<T>(state: T) {
  const preState = useRef<T>()
  const curState = useRef<T>(state)
  if (!Object.is(curState.current, state)) {
    preState.current = curState.current
    curState.current = state
  }
  return preState.current
}