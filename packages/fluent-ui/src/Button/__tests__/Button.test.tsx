import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Button from '..'

describe('Button', (): void => {
  const testText = 'Hello World'

  test('should render children', (): void => {
    const { container, getByText } = render(<Button>{testText}</Button>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a text primary button', (): void => {
    const { container } = render(<Button variant="primary">{testText}</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a text disabled button', (): void => {
    const { container } = render(<Button disabled>{testText}</Button>)
    expect(container.firstChild).toHaveAttribute('disabled')
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a small button', (): void => {
    const { container } = render(<Button size="small">{testText}</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a large button', (): void => {
    const { container } = render(<Button size="large">{testText}</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render a block button', (): void => {
    const { container } = render(<Button block>{testText}</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should trigger the specified event', (): void => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>{testText}</Button>)
    fireEvent.click(getByText(testText))
    expect(handleClick).toHaveBeenCalled()
  })

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLButtonElement>()
    const { container } = render(<Button ref={ref}>{testText}</Button>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })
})
