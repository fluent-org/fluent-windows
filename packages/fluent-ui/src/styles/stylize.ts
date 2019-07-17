import { th } from '@xstyled/system'
import { hexToRgb } from '../utils'

export function lighten(hex: string, alpha: number): (props: any) => string {
  return (props): string => {
    const target = th.color.call(undefined, hex).call(undefined, props)
    return `rgba(${hexToRgb(target)}, ${alpha})`
  }
}
