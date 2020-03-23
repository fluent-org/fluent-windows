/**
 * Get the current `global this`
 *
 * Demo
 * import { useGlobal } from '@fluent-windows/hooks'
 *
 * const global = useGlobal()
 */

function useGlobal(): Window | NodeJS.Global {
  return typeof window !== 'undefined' ? window : global
}

export default useGlobal
