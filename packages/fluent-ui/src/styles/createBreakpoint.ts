export type Breakpoints = [string, string, string, string]

export const defaultBreakpoints: Breakpoints = ['600px', '960px', '1280px', '1920px']

function createBreakpoint(breakpoints: Breakpoints): Breakpoints {
  return breakpoints
}

export default createBreakpoint
