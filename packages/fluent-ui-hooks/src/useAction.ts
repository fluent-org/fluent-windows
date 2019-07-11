/**
 * EventBus hooks
 *
 * API Demo
 * import { useAction, useDispatch } from 'xxx'
 *
 * // parent
 * useAction(
 *   'navigation/active',
 *   (payload) => {
 *     // ...
 *   },
 *   [payload]
 * )
 *
 * // children
 * const dispatch = useDispatch({ type: 'navigation/active', payload: 'xxx' })
 * function handleClick() {
 *  dispatch()
 * }
 * <button onClick={handleClick}>child</button>
 */

import { useEffect } from 'react'

type Type = string | object
type Callback = (payload: any) => any
type Deps = (string | number | null | undefined | boolean)[] | []
type Payload = any
interface Dispatch {
  type: Type
  payload?: Payload
}

const subscribers = new Map<Type, Set<Callback>>()

function getAction(type: Type): Set<Callback> | undefined {
  return subscribers.get(type)
}

function subscribe(type: Type, callback: Callback): void {
  if (!type || !callback) return
  if (!subscribers.has(type)) subscribers.set(type, new Set())
  getAction(type)!.add(callback)
}
function unsubscribe(type: Type, callback: Callback): void {
  if (!type || !callback) return
  if (!subscribers.has(type)) return
  getAction(type)!.delete(callback)
  if (getAction(type)!.size === 0) subscribers.delete(type)
}

function dispatch(param?: Dispatch): void {
  const { type, payload } = param!
  if (!type) return
  if (!subscribers.has(type)) return
  getAction(type)!.forEach(
    (callback): void => {
      callback.call(undefined, payload)
    }
  )
}

export function useAction(type: Type, callback: Callback, deps: Deps = []): typeof dispatch {
  useEffect((): (() => void) => {
    subscribe(type, callback)
    return (): void => {
      unsubscribe(type, callback)
    }
  }, deps) // eslint-disable-line
  return dispatch.bind(undefined, { type })
}

export function useDispatch(param: Dispatch): typeof dispatch {
  return dispatch.bind(undefined, param)
}
