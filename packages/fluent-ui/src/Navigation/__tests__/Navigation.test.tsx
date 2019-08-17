import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'
import { GlobalNavigationButton, Connected, Settings } from '@fluent-ui/icons'

import { ThemeProvider, Navigation, Item } from '../../'

describe('Navigation', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Navigation height={600}>
          <Navigation.Header>
            <Item prefix={<GlobalNavigationButton />} />
          </Navigation.Header>

          <Item value={1} prefix={<Connected />}>
            Option 1
          </Item>
          <Item value={2} prefix={<Connected />}>
            Option 2
          </Item>
          <Item value={3} prefix={<Connected />}>
            Option 3
          </Item>
          <Item value={4} prefix={<Connected />}>
            Option 4
          </Item>

          <Navigation.Footer>
            <Item prefix={<Settings />}>Settings</Item>
          </Navigation.Footer>
        </Navigation>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('controlled', (): void => {
    let activeId = 1
    function handleActiveId(value: any): void {
      activeId = value
    }
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Navigation height={600} value={activeId} onChange={handleActiveId}>
          <Navigation.Header>
            <Item>
              <GlobalNavigationButton />
            </Item>
          </Navigation.Header>

          <Item value={1} prefix={<Connected />}>
            Option 1
          </Item>
          <Item value={2} prefix={<Connected />}>
            Option 2
          </Item>
          <Item value={3} prefix={<Connected />}>
            Option 3
          </Item>
          <Item value={4} prefix={<Connected />}>
            Option 4
          </Item>

          <Navigation.Footer>
            <Item prefix={<Settings />}>Settings</Item>
          </Navigation.Footer>
        </Navigation>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
