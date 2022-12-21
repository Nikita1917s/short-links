import {useCallback} from 'react'

export const useMessage = () => {
  return useCallback((text: string | null) => {
    if (text) {
      M?.toast({ html: text })
    }
  }, [])
}