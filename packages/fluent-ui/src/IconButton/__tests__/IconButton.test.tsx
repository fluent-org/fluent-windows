import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Accept as AcceptIcon } from '@fluent-ui/icons'
import { ThemeProvider, IconButton } from '../..'

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
        <IconButton variant="standard">
          <AcceptIcon />
        </IconButton>
        <IconButton variant="primary">
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
