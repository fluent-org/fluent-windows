export type Type = string | object

export type Callback = (payload: any) => any

export type Deps = (string | number | null | undefined | boolean)[] | []

export type Payload = any

export interface Dispatch {
  type: Type
  payload?: Payload
}

const subscribers = new Map<Type, Set<Callback>>()

function getAction(type: Type): Set<Callback> | undefined {
  return subscribers.get(type)
}

export function subscribe(type: Type, callback: Callback): void {
  if (!type || !callback) return
  if (!subscribers.has(type)) subscribers.set(type, new Set())
  getAction(type)!.add(callback)
}
export function unsubscribe(type: Type, callback: Callback): void {
  if (!type || !callback) return
  if (!subscribers.has(type)) return
  getAction(type)!.delete(callback)
  if (getAction(type)!.size === 0) subscribers.delete(type)
}

export function dispatch(param?: Dispatch): void {
  const { type, payload } = param!
  if (!type) return
  if (!subscribers.has(type)) return
  getAction(type)!.forEach((callback): void => {
    callback.call(undefined, payload)
  })
}
