import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, CommandButton } from '../..'
import { findAllByType } from '../../utils'

describe('CommandButton', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CommandButton>basic</CommandButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('onClick', (): void => {
    const onClick = jest.fn()
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CommandButton onClick={onClick}>onClick</CommandButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()

    const commandButton = findAllByType(tree, 'button')
    commandButton[0].props.onClick()
    expect(onClick).toHaveBeenCalled()
  })

  test('as', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <CommandButton as="a" href="#">
          as a
        </CommandButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
