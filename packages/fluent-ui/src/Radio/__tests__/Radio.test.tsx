import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Radio, { name } from '../Radio'
import { styles } from '../Radio.styled'
import { RadioClassProps } from '../Radio.type'

const classes = getClasses<RadioClassProps>(styles, name)

describe('Radio', (): void => {
  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Radio ref={ref} />)
    const { current: element } = ref
    const RadioElement = container.querySelector(`input[type='Radio']`) as HTMLInputElement
    expect(element).toEqual(RadioElement)
  })

  test('should be controlled', async (): Promise<void> => {
    let checked = ''
    function handleChange(c: string): void {
      checked = c
    }
    const { getByTestId } = render(
      <>
        <Radio data-testid="a" value="a" checked={checked === 'a'} onChange={handleChange} />
        <Radio data-testid="b" value="b" checked={checked === 'b'} onChange={handleChange} />
        <Radio data-testid="c" value="c" checked={checked === 'c'} onChange={handleChange} />
      </>
    )
    fireEvent.click(getByTestId('a'))
    expect(checked).toEqual('a')
    fireEvent.click(getByTestId('b'))
    expect(checked).toEqual('b')
    fireEvent.click(getByTestId('c'))
    expect(checked).toEqual('c')
  })

  test('should be render a disabled Radio', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { container } = render(<Radio ref={ref} disabled={true} />)
    expect(container.firstChild).toHaveClass(classes.disabled)
    expect(ref.current!.disabled).toEqual(true)
  })
})
