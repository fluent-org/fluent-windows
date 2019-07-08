import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GlobalNavigationButton, Connected, Settings } from '@fluent-ui/icons'

import { ThemeProvider, Navigation } from '../../..'

describe('Navigation', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Navigation height={600}>
          <Navigation.Header>
            <Navigation.Item>
              <GlobalNavigationButton />
            </Navigation.Item>
          </Navigation.Header>

          <Navigation.Item id={1}>
            <Connected />
            <span>Option 1</span>
          </Navigation.Item>
          <Navigation.Item id={2}>
            <Connected />
            <span>Option 2</span>
          </Navigation.Item>
          <Navigation.Item id={3}>
            <Connected />
            <span>Option 3</span>
          </Navigation.Item>
          <Navigation.Item id={4}>
            <Connected />
            <span>Option 4</span>
          </Navigation.Item>

          <Navigation.Footer>
            <Navigation.Item>
              <Settings />
              <span>Settings</span>
            </Navigation.Item>
          </Navigation.Footer>
        </Navigation>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('controlled', (): void => {
    let activeId = 1
    function handleActiveId(id: any): void {
      activeId = id
    }
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Navigation height={600} value={activeId} onChange={handleActiveId}>
          <Navigation.Header>
            <Navigation.Item>
              <GlobalNavigationButton />
            </Navigation.Item>
          </Navigation.Header>

          <Navigation.Item id={1}>
            <Connected />
            <span>Option 1</span>
          </Navigation.Item>
          <Navigation.Item id={2}>
            <Connected />
            <span>Option 2</span>
          </Navigation.Item>
          <Navigation.Item id={3}>
            <Connected />
            <span>Option 3</span>
          </Navigation.Item>
          <Navigation.Item id={4}>
            <Connected />
            <span>Option 4</span>
          </Navigation.Item>

          <Navigation.Footer>
            <Navigation.Item>
              <Settings />
              <span>Settings</span>
            </Navigation.Item>
          </Navigation.Footer>
        </Navigation>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
