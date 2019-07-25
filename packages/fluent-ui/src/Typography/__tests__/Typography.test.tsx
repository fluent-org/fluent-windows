import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Typography } from '../..'

describe('Typography', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography>basic</Typography>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('as', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography as="span">as span</Typography>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('variant', (): void => {
    ;['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body2', 'body1'].forEach(
      (variant): void => {
        const component = renderer.create(
          <ThemeProvider theme={theme}>
            <Typography variant={variant}>as span</Typography>
          </ThemeProvider>
        )
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
      }
    )
  })

  test('gutterBottom', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography gutterBottom>as span</Typography>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('margin-bottom', '0.35em')
  })

  test('noWrap', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Typography noWrap>as span</Typography>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toHaveStyleRule('overflow', 'hidden')
    expect(tree).toHaveStyleRule('white-space', 'nowrap')
    expect(tree).toHaveStyleRule('text-overflow', 'ellipsis')
  })
})
