import * as React from 'react'
import * as json2mq from 'json2mq'
import { global } from '../utils'

type AllBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type MediaQuery = json2mq.QueryObject | json2mq.QueryObject[] | AllBreakpoints | string

interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}
interface TransformedModel {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

interface Option {
  breakpoints: Breakpoints
}

const defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const model = ({ xs, sm, md, lg, xl }: Breakpoints): TransformedModel => ({
  xs: json2mq({ screen: true, minWidth: xs, maxWidth: sm }),
  sm: json2mq({ screen: true, minWidth: sm }),
  md: json2mq({ screen: true, minWidth: md }),
  lg: json2mq({ screen: true, minWidth: lg }),
  xl: json2mq({ screen: true, minWidth: xl })
})

export function useMedia(
  mediaQuery: MediaQuery,
  option: Option = { breakpoints: defaultBreakpoints }
): boolean {
  const { breakpoints } = option
  const isBreakpoint = Object.prototype.hasOwnProperty.call(
    breakpoints,
    mediaQuery as keyof Breakpoints
  )
  const transformedModel = React.useMemo((): TransformedModel => model(breakpoints), [breakpoints])

  const query = isBreakpoint
    ? transformedModel[mediaQuery as keyof Breakpoints]
    : typeof mediaQuery === 'string'
    ? mediaQuery
    : json2mq(mediaQuery)
  const mql = global && global.matchMedia && global.matchMedia(query)

  if (mql === false) return false

  // eslint-disable-next-line
  const [state, setState] = React.useState((): boolean => mql.matches)
  // eslint-disable-next-line
  React.useLayoutEffect((): (() => void) => {
    let mounted = true

    const handleChange = (): void => {
      if (!mounted) return
      setState(mql.matches)
    }

    setState(mql.matches)
    mql.addListener(handleChange)

    return (): void => {
      mounted = false
      mql.removeListener(handleChange)
    }
  }, [mql, query])

  return state
}
