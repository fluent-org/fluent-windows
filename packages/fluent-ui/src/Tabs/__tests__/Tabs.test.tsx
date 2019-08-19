import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Tabs } from '../..'

describe('Tabs', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Tabs>
          <Tabs.Panel value="one" title="Item One">
            Item One
          </Tabs.Panel>
          <Tabs.Panel value="two" title="Item Two">
            Item Two
          </Tabs.Panel>
          <Tabs.Panel value="three" title="Item Three">
            Item Three
          </Tabs.Panel>
        </Tabs>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
