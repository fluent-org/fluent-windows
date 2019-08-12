import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Spinner } from '../..'

describe('Spinner', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Spinner />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop size', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Spinner size="small" />
        <Spinner size="medium" />
        <Spinner size="large" />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop label', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Spinner label="wait..." />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop labelPosition', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Spinner label="Top Label" labelPosition="top" />
        <Spinner label="Bottom Label" labelPosition="bottom" />
        <Spinner label="Left Label" labelPosition="left" />
        <Spinner label="Right Label" labelPosition="right" />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
