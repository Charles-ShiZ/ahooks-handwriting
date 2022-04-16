import { useState, useCallback } from 'react'

export default function useBoolean(defaultValue: boolean = false) {
  const [state, setState] = useState(defaultValue)
  const setBoolean = useCallback((value: boolean = !state) => setState(value), [state])

  return [state, setBoolean] as [typeof state, typeof setBoolean]
}