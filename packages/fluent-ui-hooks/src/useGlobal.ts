export function useGlobal(): Window | NodeJS.Global {
  return typeof window !== 'undefined' ? window : global
}
