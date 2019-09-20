export function getCookie(name: string): string {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`)
  return document.cookie.replace(regex, '$1')
}
