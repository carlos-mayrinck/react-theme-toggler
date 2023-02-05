import { useEffect, useState } from 'react'
import type { Dispatch, SetStateAction } from 'react'

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
]

export function usePersistedState<T> (key: string, initialState: T): Response<T> {
  const [theme, setTheme] = useState(() => {
    const storage = localStorage.getItem(key)

    if (storage !== null) {
      return JSON.parse(storage)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme))
  }, [key, theme])

  return [theme, setTheme]
}
