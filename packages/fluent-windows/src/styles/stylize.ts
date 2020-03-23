import { hexToRgb } from '../utils'

export function lighten(hex: string, alpha: number): string {
  return `rgba(${hexToRgb(hex)}, ${alpha})`
}
