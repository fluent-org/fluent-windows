import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Progress } from '../..'

describe('Progress', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Progress />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop value', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Progress value={50} />
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
