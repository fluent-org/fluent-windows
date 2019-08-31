import { Styles } from 'jss'
import { styleFn } from 'styled-system'

interface BreakpointsValues {
  xs?: Styles
  sm?: Styles
  md?: Styles
  lg?: Styles
  xl?: Styles
}
type Key = keyof BreakpointsValues

export const breakpoints = (values: BreakpointsValues): ((theme: any) => styleFn) => (
  theme: any
): styleFn => {
  const keys = Object.keys(values)
  const styled = keys.reduce((acc, cur): {} => {
    const key = cur as Key
    const rules = values[key]
    const themeBreakpoints = theme.breakpoints
    const result = {
      [`@media screen and (min-width: ${themeBreakpoints[key]})`]: rules
    }
    return {
      ...acc,
      ...result
    }
  }, {})
  return styled as styleFn
}
