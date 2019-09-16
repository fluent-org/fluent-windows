import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import List, { name } from '../List'
import { styles } from '../List.styled'
import { ListClassProps } from '../List.type'
import Item from '../../Item'

const classes = getClasses<ListClassProps>(styles, name)

describe('List', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <List ref={ref}>
        <Item>Option 1</Item>
        <Item>Option 2</Item>
        <Item>Option 3</Item>
        <Item>Option 4</Item>
      </List>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <List>
        <Item>{testText}</Item>
      </List>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
