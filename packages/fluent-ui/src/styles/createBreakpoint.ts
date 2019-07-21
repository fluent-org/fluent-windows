import { deepMerge } from '../utils'

export interface Breakpoints {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export const defaultBreakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}

function createBreakpoint(breakpoints: Breakpoints): Breakpoints {
  return deepMerge(defaultBreakpoints, breakpoints)
}

export default createBreakpoint
