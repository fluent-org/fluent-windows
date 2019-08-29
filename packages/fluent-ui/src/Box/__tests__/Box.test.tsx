import * as React from 'react'
import { render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Box from '..'

describe('Box', (): void => {
  const testText = 'Hello World'
  const testChildren = <span>{testText}</span>

  test('should render children', (): void => {
    const { container, getByText } = render(<Box>{testChildren}</Box>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should be rendered as nav', (): void => {
    const { getByText } = render(<Box as="nav">{testText}</Box>)
    expect(getByText(testText).tagName).toStrictEqual('NAV')
  })

  test('should be rendered with acrylic effects', (): void => {
    const { container } = render(<Box acrylic>{testChildren}</Box>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(<Box ref={ref}>{testChildren}</Box>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })
})
