import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Command, CommandButton } from '../../'

describe('Command', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Command>
          <CommandButton icon="Back" />
          <CommandButton icon="Play" />
          <CommandButton icon="Forward" />

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
          <CommandButton icon="Back" />
          <CommandButton icon="Play" />
          <CommandButton icon="Forward" />

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
          <CommandButton icon="Back" />
          <CommandButton icon="Play" />
          <CommandButton icon="Forward" />

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
          <CommandButton icon="Back">Back</CommandButton>
          <CommandButton icon="Play">Play</CommandButton>
          <CommandButton icon="Forward">Forward</CommandButton>

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
          <CommandButton icon="Back" />
          <CommandButton icon="Play" />
          <CommandButton icon="Forward" />
        </Command>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
