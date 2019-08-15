import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Connected } from '@fluent-ui/icons'

import { ThemeProvider, ItemGroup, Item, Box } from '../..'

describe('ItemGroup', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Box>
          <Item prefix={<Connected />}>Option 1</Item>
          <Item prefix={<Connected />}>Option 2</Item>
          <Item prefix={<Connected />}>Option 3</Item>
          <ItemGroup title="group" prefix={<Connected />}>
            <Item>Option 4</Item>
            <Item>Option 5</Item>
            <ItemGroup title="group inside">
              <Item>Option 7</Item>
              <Item>Option 8</Item>
              <ItemGroup title="group inside">
                <Item>Option 9</Item>
                <Item>Option 10</Item>
              </ItemGroup>
            </ItemGroup>
          </ItemGroup>
          <Item>Option 6</Item>
        </Box>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
