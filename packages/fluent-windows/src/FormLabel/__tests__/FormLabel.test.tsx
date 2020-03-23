import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import FormLabel, { name } from '../FormLabel'
import { styles } from '../FormLabel.styled'
import { FormLabelClassProps } from '../FormLabel.type'
import Box from '../../Box'

const classes = getClasses<FormLabelClassProps>(styles, name)

describe('FormLabel', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <FormLabel ref={ref} label={testText}>
        <input type="text" />
      </FormLabel>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <FormLabel label={testText}>
        <input type="text" />
      </FormLabel>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be support position', (): void => {
    const { container, getByTestId } = render(
      <Box>
        <FormLabel label={testText} position="top" data-testid="top">
          <input type="text" />
        </FormLabel>
        <FormLabel label={testText} position="bottom" data-testid="bottom">
          <input type="text" />
        </FormLabel>
        <FormLabel label={testText} position="left" data-testid="left">
          <input type="text" />
        </FormLabel>
        <FormLabel label={testText} position="right" data-testid="right">
          <input type="text" />
        </FormLabel>
      </Box>
    )
    expect(getByTestId('top')).toHaveClass(classes.positionTop)
    expect(getByTestId('bottom')).toHaveClass(classes.positionBottom)
    expect(getByTestId('left')).toHaveClass(classes.positionLeft)
    expect(getByTestId('right')).toHaveClass(classes.positionRight)
    expect(container.firstChild).toMatchSnapshot()
  })
})
