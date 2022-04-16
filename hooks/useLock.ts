import { useCallback } from "react"

export default function useLock(asyncFn: () => Promise<any>) {
  let locked = false
  return useCallback(() => {
    if (!locked) {
      locked = true
      const promise = asyncFn()
      promise.then(() => {
        locked = false
      })
      promise.catch(() => {
        locked = false
      })
    }
  }, [asyncFn])
}