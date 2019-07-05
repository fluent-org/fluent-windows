import { deepMerge } from '../utils'

export interface Sizes {
  small?: any
  medium?: any
  large?: any
}

function createSize(sizes: Sizes): Sizes {
  const defaultSizes: Sizes = {
    small: {
      padding: '2px 18px'
    },
    medium: {
      padding: '4px 26px'
    },
    large: {
      padding: '6px 38px'
    }
  }
  return deepMerge(sizes, defaultSizes)
}

export default createSize
