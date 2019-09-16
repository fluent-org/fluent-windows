import { DependencyList, EffectCallback, useEffect, useRef } from 'react'
// @ts-ignore
import isEqual from 'react-fast-compare'

const isPrimitive = (val: any) => val !== Object(val)

export const useDeepCompareEffect = (effect: EffectCallback, deps: any[]) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!deps || !deps.length) {
      // eslint-disable-next-line no-console
      console.warn(
        '`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.'
      )
    }

    if (deps.every(isPrimitive)) {
      // eslint-disable-next-line no-console
      console.warn(
        '`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.'
      )
    }
  }

  const ref = useRef<DependencyList | undefined>(undefined)

  if (!isEqual(deps, ref.current)) {
    ref.current = deps
  }

  useEffect(effect, ref.current)
}
