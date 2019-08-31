import { deepMerge } from '../utils'

export interface Breakpoints {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

export const defaultBreakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
}

function createBreakpoint(breakpoints: Breakpoints): Breakpoints {
  return deepMerge(defaultBreakpoints, breakpoints)
}

export default createBreakpoint
