import * as React from 'react'
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'

import { ThemeProvider, Card, Typography, Button } from '../..'

describe('Card', (): void => {
  const theme = {}
  test('basic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card>basic</Card>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with derived component', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card>
          <Card.Header>
            <Typography variant="h6" as="h2">
              News
            </Typography>
          </Card.Header>
          <Card.Content>
            <Typography variant="subtitle1" as="h3" gutterBottom>
              NASA scientists track Greenland’s melting ice, and the findings are not good
            </Typography>
            <Typography variant="subtitle2" color="standard.dark2" gutterBottom>
              MarketWatch · 11 hours ago
            </Typography>
          </Card.Content>
          <Card.Actions>
            <Button size="small">Learn More</Button>
          </Card.Actions>
        </Card>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop pure', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card pure>pure</Card>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('prop dynamic', (): void => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Card dynamic>dynamic</Card>
      </ThemeProvider>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
