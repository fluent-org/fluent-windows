import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Accept as AcceptIcon } from '@fluent-ui/icons'
import { ThemeProvider, IconButton } from '../..'
import { findAllByType } from '../../utils'

describe('IconButton', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton>
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('variant', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton variant="primary">
          <AcceptIcon />
        </IconButton>
        <IconButton variant="accent">
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('disabled', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton disabled>
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('size', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton size="small">
          <AcceptIcon />
        </IconButton>
        <IconButton size="medium">
          <AcceptIcon />
        </IconButton>
        <IconButton size="large">
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('onClick', (): void => {
    const onClick = jest.fn()
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton onClick={onClick}>
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()

    const iconButton = findAllByType(tree, 'button')
    iconButton[0].props.onClick()
    expect(onClick).toHaveBeenCalled()
  })

  test('as', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <IconButton as="a" href="#">
          <AcceptIcon />
        </IconButton>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
