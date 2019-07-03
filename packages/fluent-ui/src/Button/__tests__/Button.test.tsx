import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Button } from '../..'
import { findAllByType } from '../../utils'

describe('Button', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button>basic</Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('variant', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button variant="primary">primary</Button>
        <Button variant="accent">accent</Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('disabled', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button disabled>disabled</Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('size', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button size="small">small</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('onClick', (): void => {
    const onClick = jest.fn()
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>onClick</Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()

    const button = findAllByType(tree, 'button')
    button[0].props.onClick()
    expect(onClick).toHaveBeenCalled()
  })

  test('as', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Button as="a" href="#">
          as a
        </Button>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
