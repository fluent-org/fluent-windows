import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Spinner, { name } from '../Spinner'
import { styles } from '../Spinner.styled'
import { SpinnerClassProps } from '../Spinner.type'

const classes = getClasses<SpinnerClassProps>(styles, name)

describe('Spinner', (): void => {
  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(<Spinner ref={ref} />)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should support size', (): void => {
    const { getByTestId } = render(
      <>
        <Spinner size="small" data-testid="small" />
        <Spinner size="medium" data-testid="medium" />
        <Spinner size="large" data-testid="large" />
      </>
    )
    expect(getByTestId('small')).toHaveClass(classes.sizeSmall)
    expect(getByTestId('medium')).toHaveClass(classes.sizeMedium)
    expect(getByTestId('large')).toHaveClass(classes.sizeLarge)
  })
})
