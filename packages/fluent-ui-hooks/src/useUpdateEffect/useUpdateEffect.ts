/**
 * React effect hook that ignores the first invocation (e.g. on mount). The signature is exactly the same as the useEffect hook.
 *
 * Demo
 * import { useUpdateEffect } from '@fluent-ui/hooks'
 *
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [])
  
  useUpdateEffect(() => {
    console.log('count', count) // will only show 1 and beyond
    
    return () => {
      // do something on unmount
    }
  })
 */

import * as React from 'react'

type EffectCallback = () => void | (() => void | undefined)
type DependencyList = any[]

function useUpdateEffect(effect: EffectCallback, deps: DependencyList): void {
  const isInitialMount = React.useRef(true)
  React.useEffect((): void | (() => void | undefined) => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      return effect()
    }
  }, deps) // eslint-disable-line
}

export default useUpdateEffect
