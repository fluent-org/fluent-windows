import { getStyle } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

describe('Box background', (): void => {
  test('returns background styles', (): void => {
    const style = getStyle({ backgroundImage: 'url(kitten.gif)' })
    expect(style).toEqual({ 'background-image': 'url(kitten.gif)' })
  })
})
