import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as ReactTestUtils from 'react-dom/test-utils'
import 'jest-styled-components'

import { ThemeProvider, Radio } from '../..'

describe('Radio', (): void => {
  const theme = {}

  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Radio />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('controlled', (): void => {
    let node = React.createRef<HTMLInputElement>()
    let checked = ''
    function handleChange(c: string): void {
      checked = c
    }
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Radio ref={node} value="a" onChange={handleChange} />
      </ThemeProvider>
    )
    ;(node.current as HTMLInputElement).checked = true
    ReactTestUtils.Simulate.change(node.current as HTMLInputElement)
    expect(checked).toEqual('a')
  })

  test('prop disabled', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Radio disabled={true} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
