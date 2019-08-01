/**
 * Get the current `global this`
 *
 * Demo
 * import { useGlobal } from '@fluent-ui/hooks'
 *
 * const global = useGlobal()
 */

export function useGlobal(): Window | NodeJS.Global {
  return typeof window !== 'undefined' ? window : global
}
