import { deepMerge } from '../utils'

interface ObjectBreakpoints {
  sm?: string
  md?: string
  lg?: string
  xl?: string
}
export type Breakpoints = [string, string, string, string] & ObjectBreakpoints

export const defaultBreakpoints: Breakpoints = ['600px', '960px', '1280px', '1920px']

function createBreakpoint(breakpoints: Breakpoints): Breakpoints {
  const _breakpoints = deepMerge(defaultBreakpoints, breakpoints)
  _breakpoints.sm = `@media screen and (min-width: ${defaultBreakpoints[0]})`
  _breakpoints.md = `@media screen and (min-width: ${defaultBreakpoints[1]})`
  _breakpoints.lg = `@media screen and (min-width: ${defaultBreakpoints[2]})`
  _breakpoints.xl = `@media screen and (min-width: ${defaultBreakpoints[3]})`

  return _breakpoints
}

export default createBreakpoint
