import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Typography, { name, defaultVariantMapping } from '../Typography'
import { styles } from '../Typography.styled'
import { TypographyClassProps, Variant } from '../Typography.type'

const classes = getClasses<TypographyClassProps>(styles, name)

describe('Typography', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(<Typography ref={ref}>{testText}</Typography>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(<Typography>{testText}</Typography>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support as', (): void => {
    const { getByText } = render(<Typography as="span">{testText}</Typography>)
    expect(getByText(testText).tagName).toStrictEqual('SPAN')
  })

  test('variant', (): void => {
    const variants: Variant[] = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body2',
      'body1'
    ]
    variants.forEach(
      (variant): void => {
        const { getByText } = render(<Typography variant={variant}>{variant}</Typography>)
        expect(getByText(variant).tagName).toStrictEqual(
          defaultVariantMapping[variant].toUpperCase()
        )
      }
    )
  })

  test('should be support gutterTop', (): void => {
    const { container, sheets } = render(<Typography gutterTop>{testText}</Typography>)
    expect(container.firstChild).toHaveClass(classes.gutterTop)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support gutterBottom', (): void => {
    const { container, sheets } = render(<Typography gutterBottom>{testText}</Typography>)
    expect(container.firstChild).toHaveClass(classes.gutterBottom)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support noWrap', (): void => {
    const { container, sheets } = render(<Typography noWrap>{testText}</Typography>)
    expect(container.firstChild).toHaveClass(classes.noWrap)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
