import { LANGUAGES } from '../translations'

export function getCookie(name: string): string {
  const regex = new RegExp(`(?:(?:^|.*;*)${name}*=*([^;]*).*$)|^.*$`)
  const global = typeof document !== `undefined` ? document : null
  return global ? global.cookie.replace(regex, '$1') : ''
}

export function toLine(name: string): string {
  const target = name.replace(/([A-Z])/g, '-$1').toLowerCase()
  if (target[0] === '-') return target.substr(1)
  return target
}

export function pathnameToLanguage(
  pathname: string
): {
  userLanguage: string
  canonical: string
} {
  const userLanguage = pathname.substring(1, 3)

  if (LANGUAGES.indexOf(userLanguage) !== -1 && pathname.indexOf(`/${userLanguage}/`) === 0) {
    return {
      userLanguage,
      canonical: userLanguage === 'en' ? pathname : pathname.substring(3)
    }
  }

  return {
    userLanguage: 'en',
    canonical: pathname
  }
}
