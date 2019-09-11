import * as React from 'react'
import { Connected } from '@fluent-ui/icons'
import { render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import ItemGroup from '../ItemGroup'
import { Item } from '../../index'

describe('ItemGroup', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <ItemGroup ref={ref}>
        <Item>Option 1</Item>
        <Item>Option 2</Item>
      </ItemGroup>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { getByText, sheets } = render(
      <ItemGroup>
        <Item>{testText}</Item>
      </ItemGroup>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support prefix', (): void => {
    const { container, getByTestId } = render(
      <ItemGroup prefix={<Connected data-testid="icon" />}>
        <Item>{testText}</Item>
      </ItemGroup>
    )
    expect(getByTestId('icon')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should be support shrink float', (): void => {
    const { container } = render(
      <ItemGroup shrink="float">
        <Item>{testText}</Item>
      </ItemGroup>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
