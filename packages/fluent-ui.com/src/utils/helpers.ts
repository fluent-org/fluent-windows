export function getCookie(name: string): string {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`)
  const global = typeof document !== `undefined` ? document : null
  return global ? global.cookie.replace(regex, '$1') : ''
}
