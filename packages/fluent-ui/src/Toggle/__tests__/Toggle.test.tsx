import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Toggle, { name } from '../Toggle'
import { styles } from '../Toggle.styled'
import { ToggleClassProps } from '../Toggle.type'

const classes = getClasses<ToggleClassProps>(styles, name)

describe('Toggle', (): void => {
  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Toggle ref={ref} />)
    const { current: element } = ref
    const ToggleElement = container.querySelector(`input[type='checkbox']`) as HTMLInputElement
    expect(element).toEqual(ToggleElement)
  })

  test('should be controlled', async (): Promise<void> => {
    const ref = React.createRef<HTMLInputElement>()
    let checked = false
    function handleChange(c: boolean): void {
      checked = c
    }
    render(<Toggle ref={ref} checked={checked} onChange={handleChange} />)
    fireEvent.click(ref.current!)
    expect(checked).toEqual(true)
  })

  test('should be render a disabled Toggle', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Toggle ref={ref} disabled={true} />)
    expect(container.firstChild).toHaveClass(classes.disabled)
    expect(ref.current!.disabled).toEqual(true)
  })
})
