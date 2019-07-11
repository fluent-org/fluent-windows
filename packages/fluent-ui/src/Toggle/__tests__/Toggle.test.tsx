import * as React from 'react'
import * as renderer from 'react-test-renderer'
import * as ReactTestUtils from 'react-dom/test-utils'
import 'jest-styled-components'

import { ThemeProvider, Toggle } from '../..'

describe('Toggle', (): void => {
  const theme = {}

  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Toggle />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('controlled', (): void => {
    let node = React.createRef<HTMLInputElement>()
    let checked = false
    function handleChange(c: boolean): void {
      checked = c
    }
    ReactTestUtils.renderIntoDocument(
      <ThemeProvider theme={theme}>
        <Toggle ref={node} checked={checked} onChange={handleChange} />
      </ThemeProvider>
    )
    ;(node.current as HTMLInputElement).checked = true
    ReactTestUtils.Simulate.change(node.current as HTMLInputElement)
    expect(checked).toEqual(true)
  })

  test('prop disabled', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Toggle disabled={true} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
