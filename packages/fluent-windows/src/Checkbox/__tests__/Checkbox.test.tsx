import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Checkbox, { name } from '../Checkbox'
import { styles } from '../Checkbox.styled'
import { CheckboxClassProps } from '../Checkbox.type'

const classes = getClasses<CheckboxClassProps>(styles, name)

describe('Checkbox', (): void => {
  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Checkbox ref={ref} />)
    const { current: element } = ref
    const checkboxElement = container.querySelector(`input[type='checkbox']`) as HTMLInputElement
    expect(element).toEqual(checkboxElement)
  })

  test('should be controlled', async (): Promise<void> => {
    const ref = React.createRef<HTMLInputElement>()
    let checked = false
    function handleChange(c: boolean): void {
      checked = c
    }
    render(<Checkbox ref={ref} checked={checked} onChange={handleChange} />)
    fireEvent.click(ref.current!)
    expect(checked).toEqual(true)
  })

  test('should be render a disabled checkbox', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Checkbox ref={ref} disabled={true} />)
    expect(container.firstChild).toHaveClass(classes.disabled)
    expect(ref.current!.disabled).toEqual(true)
  })
})
