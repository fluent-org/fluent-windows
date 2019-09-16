import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Input, { name } from '../Input'
import { styles } from '../Input.styled'
import { InputClassProps } from '../Input.type'

const classes = getClasses<InputClassProps>(styles, name)

describe('Input', (): void => {
  const text = 'Hint Text'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { getByTestId } = render(<Input ref={ref} data-testid="input" />)
    const { current: element } = ref
    expect(element).toEqual(getByTestId('input'))
  })

  test('should be controlled', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    let value = ''
    function handleChange(v: string): void {
      value = v
    }
    const { container } = render(<Input ref={ref} value={value} onChange={handleChange} />)
    fireEvent.change(ref.current!, { target: { value: text } })
    expect(value).toEqual(text)
    expect(container.firstChild).toHaveClass(classes.wrapper)
    expect(ref.current!).toHaveClass(classes.root)
  })

  test('should be support placeholder', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} placeholder={text} />)
    expect((ref.current as HTMLInputElement).placeholder).toEqual(text)
  })

  test('should be support disabled', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} disabled={true} />)
    expect((ref.current as HTMLInputElement).disabled).toEqual(true)
  })

  test('should be support cleared', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    let value = ''
    function handleChange(v: string): void {
      value = v
    }
    const { container, sheets } = render(
      <Input ref={ref} value={value} onChange={handleChange} cleared={true} />
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(sheets.toString()).toMatchSnapshot()

    fireEvent.change(ref.current!, { target: { value: text } })
    expect(value).toEqual(text)

    fireEvent.click(container.querySelector('.FInput-clearedIcon')!)
    expect(value).toEqual('')
  })

  test('should be support password', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} password={true} />)
    expect((ref.current as HTMLInputElement).type).toEqual('password')
  })

  test('should be support error', (): void => {
    const ref = React.createRef<HTMLInputElement>()
    const { sheets } = render(<Input ref={ref} error={true} />)
    expect(ref.current as HTMLInputElement).toHaveClass(classes.error)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
