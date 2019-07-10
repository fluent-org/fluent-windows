import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import {
  Back as BackIcon,
  Play as PlayIcon,
  Forward as ForwardIcon
} from '@fluent-ui/icons'
import { ThemeProvider, Command, CommandButton } from '../../'

describe('Command', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command>
          <CommandButton>
            <BackIcon />
          </CommandButton>
          <CommandButton>
            <PlayIcon />
          </CommandButton>
          <CommandButton>
            <ForwardIcon />
          </CommandButton>

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <CommandButton>Like</CommandButton>
            <CommandButton>Dislike</CommandButton>
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
          <CommandButton>
            <BackIcon />
          </CommandButton>
          <CommandButton>
            <PlayIcon />
          </CommandButton>
          <CommandButton>
            <ForwardIcon />
          </CommandButton>

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <CommandButton>Like</CommandButton>
            <CommandButton>Dislike</CommandButton>
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
          <CommandButton>
            <BackIcon />
          </CommandButton>
          <CommandButton>
            <PlayIcon />
          </CommandButton>
          <CommandButton>
            <ForwardIcon />
          </CommandButton>

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <CommandButton>Like</CommandButton>
            <CommandButton>Dislike</CommandButton>
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
          <CommandButton>
            <BackIcon />
            <span>Back</span>
          </CommandButton>
          <CommandButton>
            <PlayIcon />
            <span>Play</span>
          </CommandButton>
          <CommandButton>
            <ForwardIcon />
            <span>Forward</span>
          </CommandButton>

          <Command.Content>Now Playing...</Command.Content>

          <Command.Secondary>
            <CommandButton>Like</CommandButton>
            <CommandButton>Dislike</CommandButton>
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
          <CommandButton>
            <BackIcon />
          </CommandButton>
          <CommandButton>
            <PlayIcon />
          </CommandButton>
          <CommandButton>
            <ForwardIcon />
          </CommandButton>
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
