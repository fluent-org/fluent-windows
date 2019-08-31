import { Style } from 'jss'
import { deepMerge } from '../utils'

interface ElementType {
  button?: Style
  iconButton?: Style
  input?: Style
}
export interface Sizes {
  small?: ElementType
  medium?: ElementType
  large?: ElementType
}

function createSize(sizes: Sizes = {}): Sizes {
  const defaultSizes: Sizes = {
    small: {
      button: {
        padding: '0 8px'
      },
      iconButton: {
        padding: 8,
        fontSize: '0.8em'
      }
    },
    medium: {
      button: {
        padding: '3px 12px'
      },
      iconButton: {
        padding: 12
      },
      input: {
        padding: '6px 12px'
      }
    },
    large: {
      button: {
        padding: '8px 42px'
      },
      iconButton: {
        padding: 16,
        fontSize: '1.2em'
      }
    }
  }
  return deepMerge(sizes, defaultSizes)
}

export default createSize
