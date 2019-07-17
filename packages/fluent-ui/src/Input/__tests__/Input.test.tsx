import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as ReactTestUtils from 'react-dom/test-utils'
import 'jest-styled-components'

import { ThemeProvider, Input } from '../..'

describe('Input', (): void => {
  const theme = {}
  const text = 'Hint Text'

  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Input />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('controlled', (): void => {
    let node = React.createRef<HTMLInputElement>()
    let value = ''
    function handleChange(e: string): void {
      value = e
    }
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Input ref={node} value={value} onChange={handleChange} />
      </ThemeProvider>
    )
    ;(node.current as HTMLInputElement).value = text
    ReactTestUtils.Simulate.change(node.current as HTMLInputElement)
    expect(value).toEqual(text)
  })

  test('prop placeholder', (): void => {
    let node = React.createRef<HTMLInputElement>()
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Input ref={node} placeholder={text} />
      </ThemeProvider>
    )
    expect((node.current as HTMLInputElement).placeholder).toEqual(text)
  })

  test('prop disabled', (): void => {
    let node = React.createRef<HTMLInputElement>()
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Input ref={node} disabled={true} />
      </ThemeProvider>
    )
    expect((node.current as HTMLInputElement).disabled).toEqual(true)
  })

  test('prop cleared', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Input cleared={true} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop password', (): void => {
    let node = React.createRef<HTMLInputElement>()
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Input ref={node} password={true} />
      </ThemeProvider>
    )
    expect((node.current as HTMLInputElement).type).toEqual('password')
  })
})
