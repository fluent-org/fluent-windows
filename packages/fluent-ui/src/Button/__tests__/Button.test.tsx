import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Button, { name } from '../Button'
import { styles } from '../Button.styled'
import { ButtonClassProps } from '../Button.type'

const classes = getClasses<ButtonClassProps>(styles, name)

describe('Button', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLButtonElement>()
    const { container } = render(<Button ref={ref}>{testText}</Button>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(<Button>{testText}</Button>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should render a text primary button', (): void => {
    const { container } = render(<Button variant="primary">{testText}</Button>)
    expect(container.firstChild).toHaveClass(classes.variantPrimary)
  })

  test('should render a text disabled button', (): void => {
    const { container } = render(<Button disabled>{testText}</Button>)
    expect(container.firstChild).toHaveAttribute('disabled')
  })

  test('should render a small button', (): void => {
    const { container } = render(<Button size="small">{testText}</Button>)
    expect(container.firstChild).toHaveClass(classes.sizeSmall)
  })

  test('should render a large button', (): void => {
    const { container } = render(<Button size="large">{testText}</Button>)
    expect(container.firstChild).toHaveClass(classes.sizeLarge)
  })

  test('should render a block button', (): void => {
    const { container } = render(<Button block>{testText}</Button>)
    expect(container.firstChild).toHaveClass(classes.block)
  })

  test('should trigger the specified event', (): void => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>{testText}</Button>)
    fireEvent.click(getByText(testText))
    expect(handleClick).toHaveBeenCalled()
  })
})
