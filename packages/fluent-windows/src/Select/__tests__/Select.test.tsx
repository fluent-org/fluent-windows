import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Select, { name } from '../Select'
import { styles } from '../Select.styled'
import { SelectClassProps } from '../Select.type'

import Item from '../../Item'

const classes = getClasses<SelectClassProps>(styles, name)

describe('Select', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(
      <Select ref={ref}>
        <Item>{testText}</Item>
      </Select>
    )
    const { current: element } = ref
    const RadioElement = container.querySelector(`input`) as HTMLInputElement
    expect(element).toEqual(RadioElement)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <Select>
        <Item>{testText}</Item>
      </Select>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be render a disabled Select', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(
      <Select ref={ref} disabled={true}>
        <Item>{testText}</Item>
      </Select>
    )
    expect(container.firstChild).toHaveClass(classes.disabled)
    expect(ref.current!.disabled).toEqual(true)
  })
})
