import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Back as BackIcon, Play as PlayIcon, Forward as ForwardIcon } from '@fluent-ui/icons'
import { ThemeProvider, Command, Item } from '../../'

describe('Command', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command>
          <Item prefix={<BackIcon />} />
          <Item prefix={<PlayIcon />} />
          <Item prefix={<ForwardIcon />} />

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <Item>Like</Item>
            <Item>Dislike</Item>
          </Command.Secondary>
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('acrylic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command acrylic>
          <Item prefix={<BackIcon />} />
          <Item prefix={<PlayIcon />} />
          <Item prefix={<ForwardIcon />} />

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <Item>Like</Item>
            <Item>Dislike</Item>
          </Command.Secondary>
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('reveal', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command reveal>
          <Item prefix={<BackIcon />} />
          <Item prefix={<PlayIcon />} />
          <Item prefix={<ForwardIcon />} />

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <Item>Like</Item>
            <Item>Dislike</Item>
          </Command.Secondary>
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('button with label', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command>
          <Item prefix={<BackIcon />}>Back</Item>
          <Item prefix={<PlayIcon />}>Play</Item>
          <Item prefix={<ForwardIcon />}>Forward</Item>

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <Item>Like</Item>
            <Item>Dislike</Item>
          </Command.Secondary>
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('without Content and Secondary', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command acrylic>
          <Item prefix={<BackIcon />} />
          <Item prefix={<PlayIcon />} />
          <Item prefix={<ForwardIcon />} />
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
