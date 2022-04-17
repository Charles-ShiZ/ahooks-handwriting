import { useMemo, useEffect, useState, useCallback } from 'react'
import useDebounce from './useDebounce'
import { debounce } from './utils'

export default function useDebounceState<T>(state: T, delay: number = 500) {
  const [dState, setDState] = useState(state)
  const updateFn = useCallback(() => {
    setDState(state)
  }, [state])
  const [debounceFn] = useDebounce(updateFn, delay)

  useEffect(() => {
    debounceFn()
    return () => {
      debounceFn.cancel()
    }
  }, [state])


  return dState
}

// export default function useDebounceState<T>(state: T, delay: number = 500) {
//   const [dState, setDState] = useState(state)

//   const debounceFn = useMemo(() => debounce(() => {
//     setDState(state)
//   }, delay), [state])

//   useEffect(() => {
//     debounceFn()
//     return () => {
//       debounceFn.cancel()
//     }
//   }, [state])


//   return dState
// }