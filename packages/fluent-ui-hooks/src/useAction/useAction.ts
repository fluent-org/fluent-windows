/**
 * EventBus hooks
 *
 * Demo
 * import { useAction, useDispatch } from '@fluent-ui/hooks'
 *
 * // parent
 * useAction(
 *   'navigation/active',
 *   (payload) => {
 *     // ...
 *   },
 *   []
 * )
 *
 * // children
 * const dispatch = useDispatch({ type: 'navigation/active', payload: 'xxx' })
 * function handleClick() {
 *  dispatch()
 * }
 * <button onClick={handleClick}>child</button>
 */

import * as React from 'react'
import { Type, Callback, Deps, subscribe, unsubscribe, dispatch } from './subscribers'

function useAction(type: Type, callback: Callback, deps: Deps = []): typeof dispatch {
  React.useEffect((): (() => void) => {
    subscribe(type, callback)
    return (): void => {
      unsubscribe(type, callback)
    }
  }, deps) // eslint-disable-line
  return dispatch.bind(undefined, { type })
}

export default useAction
