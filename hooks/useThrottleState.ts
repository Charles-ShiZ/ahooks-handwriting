import { useEffect, useState, useCallback } from 'react'
import useThrottle from './useThrottle'

export default function useThrottleState<T>(state: T, delay: number = 500) {
  const [dState, setDState] = useState(state)
  const updateFn = useCallback(() => {
    setDState(state)
  }, [state])
  const [throttleFn] = useThrottle(updateFn, delay)

  useEffect(() => {
    throttleFn()
  }, [state])

  return dState
}
