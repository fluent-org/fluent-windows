/**
 * Tracks state of a CSS media query.
 *
 * Demo
 * import { useMedia } from '@fluent-ui/hooks'
 *
 * const isWide = useMedia('(min-width: 600px)')
 *
 * <div>
 *   Screen is wide: {isWide ? 'Yes' : 'No'}
 * </div>
 *
 * // or you can use breakpoints
 *
 * const isWide = useMedia('sm')
 * <div>
 *   Screen is wide: {isWide ? 'Yes' : 'No'}
 * </div>
 */

import * as React from 'react'
import * as json2mq_ from 'json2mq'
import useGlobal from '../useGlobal'

// Cannot call a namespace ('json2mq') https://github.com/rollup/rollup/issues/670
// eslint-disable-next-line @typescript-eslint/no-angle-bracket-type-assertion
const json2mq: any = (<any>json2mq_).default || json2mq_

type AllBreakpoints = 'sm' | 'md' | 'lg' | 'xl'
export type MediaQuery = json2mq_.QueryObject | json2mq_.QueryObject[] | AllBreakpoints | string

interface Breakpoints {
  sm: number
  md: number
  lg: number
  xl: number
}
interface TransformedModel {
  sm: string
  md: string
  lg: string
  xl: string
}

interface Option {
  breakpoints: Breakpoints
}

const defaultBreakpoints: Breakpoints = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

const model = ({ sm, md, lg, xl }: Breakpoints): TransformedModel => ({
  sm: json2mq({ screen: true, minWidth: sm }),
  md: json2mq({ screen: true, minWidth: md }),
  lg: json2mq({ screen: true, minWidth: lg }),
  xl: json2mq({ screen: true, minWidth: xl })
})

function useMedia(
  mediaQuery: MediaQuery,
  option: Option = { breakpoints: defaultBreakpoints }
): boolean {
  const { breakpoints } = option
  const isBreakpoint = Object.prototype.hasOwnProperty.call(
    breakpoints,
    mediaQuery as keyof Breakpoints
  )
  const transformedModel = React.useMemo((): TransformedModel => model(breakpoints), [breakpoints])

  const global = useGlobal() as Window
  const query = isBreakpoint
    ? transformedModel[mediaQuery as keyof Breakpoints]
    : typeof mediaQuery === 'string'
    ? mediaQuery
    : json2mq(mediaQuery)
  const mql = global && global.matchMedia && global.matchMedia(query)

  if (!mql) return false

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

export default useMedia
