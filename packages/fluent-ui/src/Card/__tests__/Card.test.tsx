import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Card, { name } from '../Card'
import { styles } from '../Card.styled'
import { CardClassProps } from '../Card.type'

const classes = getClasses<CardClassProps>(styles, name)

describe('Card', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(<Card ref={ref}>{testText}</Card>)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(<Card>{testText}</Card>)
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be render with derived component', (): void => {
    const { getByTestId } = render(
      <Card>
        <Card.Header data-testid="header">header</Card.Header>
        <Card.Content data-testid="content">content</Card.Content>
        <Card.Actions data-testid="actions">actions</Card.Actions>
      </Card>
    )
    expect(getByTestId('header')).toHaveTextContent('header')
    expect(getByTestId('content')).toHaveTextContent('content')
    expect(getByTestId('actions')).toHaveTextContent('actions')
  })
})
