import { useMemo } from 'react'
import { throttle } from './utils'

export default function useThrottle(fn: () => void, delay: number = 500) {
  const throttleFn = useMemo(() => throttle(fn, delay), [fn])
  const originFn = fn
  return [throttleFn, originFn] as [typeof throttleFn, typeof originFn]
}