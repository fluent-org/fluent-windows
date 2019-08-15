import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Connected } from '@fluent-ui/icons'

import { ThemeProvider, Item } from '../..'

describe('Item', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Item prefix={<Connected />}>Option</Item>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('without children', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Item prefix={<Connected />} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
