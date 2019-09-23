import * as React from 'react'
import { MenuLine } from '@fluent-ui/icons'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Item, { name } from '../Item'
import { styles } from '../Item.styled'
import { ItemClassProps } from '../Item.type'

const classes = getClasses<ItemClassProps>(styles, name)

describe('Item', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(<Item ref={ref}>{testText}</Item>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should be support prefix', (): void => {
    const { container, getByTestId } = render(
      <Item prefix={<MenuLine data-testid="icon" />}>{testText}</Item>
    )
    expect(getByTestId('icon')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should be support prefix without children', (): void => {
    const { container, getByTestId } = render(<Item prefix={<MenuLine data-testid="icon" />} />)
    expect(getByTestId('icon')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
