import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Select, Item } from '../..'

describe('Select', (): void => {
  const theme = {}

  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Select>
          <Item>green</Item>
          <Item>blue</Item>
          <Item>ryan</Item>
        </Select>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
