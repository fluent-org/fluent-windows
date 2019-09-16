import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import IconButton, { name } from '../IconButton'
import { styles } from '../IconButton.styled'
import { IconButtonClassProps } from '../IconButton.type'

const classes = getClasses<IconButtonClassProps>(styles, name)

describe('IconButton', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLButtonElement>()
    const { container } = render(<IconButton ref={ref}>{testText}</IconButton>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(<IconButton>{testText}</IconButton>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should render a text primary button', (): void => {
    const { container } = render(<IconButton variant="primary">{testText}</IconButton>)
    expect(container.firstChild).toHaveClass(classes.variantPrimary)
  })

  test('should render a text disabled button', (): void => {
    const { container } = render(<IconButton disabled>{testText}</IconButton>)
    expect(container.firstChild).toHaveAttribute('disabled')
  })

  test('should render a small button', (): void => {
    const { container } = render(<IconButton size="small">{testText}</IconButton>)
    expect(container.firstChild).toHaveClass(classes.sizeSmall)
  })

  test('should render a large button', (): void => {
    const { container } = render(<IconButton size="large">{testText}</IconButton>)
    expect(container.firstChild).toHaveClass(classes.sizeLarge)
  })

  test('should trigger the specified event', (): void => {
    const handleClick = jest.fn()
    const { getByText } = render(<IconButton onClick={handleClick}>{testText}</IconButton>)
    fireEvent.click(getByText(testText))
    expect(handleClick).toHaveBeenCalled()
  })
})
