import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Navigation, { name } from '../Navigation'
import { styles } from '../Navigation.styled'
import { NavigationClassProps } from '../Navigation.type'
import Item from '../../Item'

const classes = getClasses<NavigationClassProps>(styles, name)

describe('Navigation', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <Navigation ref={ref}>
        <Item value={1}>Option 1</Item>
        <Item value={2}>Option 2</Item>
      </Navigation>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <Navigation height={600}>
        <Item>{testText}</Item>
      </Navigation>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be controlled', (): void => {
    let activeId = 1
    function handleActiveId(value: any): void {
      activeId = value
    }
    const { getByTestId } = render(
      <Navigation height={600} value={activeId} onChange={handleActiveId}>
        <Item value={1} data-testid="item1">
          Option 1
        </Item>
        <Item value={2} data-testid="item2">
          Option 2
        </Item>
      </Navigation>
    )
    fireEvent.click(getByTestId('item2'))
    expect(activeId).toEqual(2)
  })

  test('should render a horizontal Navigation', (): void => {
    const { container } = render(
      <Navigation horizontal>
        <Item value={1}>Option 1</Item>
        <Item value={2}>Option 2</Item>
      </Navigation>
    )
    expect(container.firstChild).toHaveClass(classes.horizontal)
  })

  test('should render a expanded Navigation', (): void => {
    const { container } = render(
      <Navigation expanded>
        <Item value={1}>Option 1</Item>
        <Item value={2}>Option 2</Item>
      </Navigation>
    )
    expect(container.firstChild).toHaveClass(classes.expanded)
  })
})
