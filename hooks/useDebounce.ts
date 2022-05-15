import { useMemo } from 'react'
import useUnmount from './useUnmount'
import { debounce } from './utils'

export default function useDebounce(fn: () => void, delay: number = 500) {
  const debounceFn = useMemo(() => debounce(fn, delay), [fn])
  const debounceCancel = debounceFn.cancel
  const originFn = fn
  useUnmount(() => debounceFn.cancel())
  return [debounceFn, debounceCancel, originFn] as [typeof debounceFn, typeof debounceFn.cancel, typeof originFn]
}