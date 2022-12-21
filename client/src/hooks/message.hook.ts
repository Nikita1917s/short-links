import {useCallback} from 'react'
declare const M: any;

export const useMessage = () => {
  return useCallback((text: string | null) => {
    if (text) {
      M?.toast({ html: text })
    }
  }, [])
}