import { deepMerge } from '../utils'

interface ObjectSpace {
  small?: number
  medium?: number
  large?: number
}
export type Space = number[] & ObjectSpace

export const defaultSpace: Space = [0, 4, 8, 16, 32, 64]

function createSpace(space: Space): Space {
  const _Space = deepMerge(defaultSpace, space)
  _Space.small = defaultSpace[1]
  _Space.medium = defaultSpace[2]
  _Space.large = defaultSpace[3]

  return _Space
}

export default createSpace
