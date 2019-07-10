import { css } from '../styles/styled'
import { deepMerge } from '../utils'

export interface Sizes {
  small?: any
  medium?: any
  large?: any
}

function createSize(sizes: Sizes): Sizes {
  const defaultSizes: Sizes = {
    small: {
      button: css`
        padding: 2px 18px;
      `,
      iconButton: css`
        padding: 8px;
        font-size: 0.8em;
      `
    },
    medium: {
      button: css`
        padding: 4px 26px;
      `,
      iconButton: css`
        padding: 12px;
      `
    },
    large: {
      button: css`
        padding: 6px 38px;
      `,
      iconButton: css`
        padding: 16px;
        font-size: 1.2em;
      `
    }
  }
  return deepMerge(sizes, defaultSizes)
}

export default createSize
