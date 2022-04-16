import { useRef, useEffect } from 'react'

export default function usePrevious<T>(state: T) {
  const previousState = useRef<T>(state)

  useEffect(() => {
    previousState.current = state
  }, [state])

  return previousState.current
}