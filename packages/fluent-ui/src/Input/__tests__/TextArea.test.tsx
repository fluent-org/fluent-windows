import * as React from 'react'
import { fireEvent } from '@testing-library/react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Input from '../Input'
import { name } from '../components/TextArea'
import { styles } from '../components/TextArea.styled'
import { TextAreaClassProps } from '../components/TextArea.type'

const classes = getClasses<TextAreaClassProps>(styles, name)

describe('Input.TextArea', (): void => {
  const text = 'Hint Text'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    const { getByTestId } = render(<Input.TextArea ref={ref} data-testid="textarea" />)
    const { current: element } = ref
    expect(element).toEqual(getByTestId('textarea'))
  })

  test('should be controlled', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    let value = ''
    function handleChange(v: string): void {
      value = v
    }
    render(<Input.TextArea ref={ref} value={value} onChange={handleChange} />)
    fireEvent.change(ref.current!, { target: { value: text } })
    expect(value).toEqual(text)
    expect(ref.current!).toHaveClass(classes.root)
  })

  test('should be support placeholder', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Input.TextArea ref={ref} placeholder={text} />)
    expect((ref.current as HTMLTextAreaElement).placeholder).toEqual(text)
  })

  test('should be support disabled', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Input.TextArea ref={ref} disabled={true} />)
    expect((ref.current as HTMLTextAreaElement).disabled).toEqual(true)
  })

  test('should be support error', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    const { sheets } = render(<Input.TextArea ref={ref} error={true} />)
    expect(ref.current as HTMLTextAreaElement).toHaveClass(classes.error)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support ghost', (): void => {
    const ref = React.createRef<HTMLTextAreaElement>()
    const { sheets } = render(<Input.TextArea ref={ref} ghost={true} />)
    expect(ref.current as HTMLTextAreaElement).toHaveClass(classes.ghost)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
