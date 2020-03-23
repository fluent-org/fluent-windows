import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Progress, { name } from '../Progress'
import { styles } from '../Progress.styled'
import { ProgressClassProps } from '../Progress.type'

const classes = getClasses<ProgressClassProps>(styles, name)

describe('Progress', (): void => {
  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container, sheets } = render(<Progress ref={ref} />)
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render a indeterminate progress', (): void => {
    const { container, sheets } = render(<Progress />)
    expect(container.firstChild).toHaveClass(classes.root)
    expect(container.firstChild!.firstChild).toHaveClass(classes.isIndeterminate)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be controlled', (): void => {
    const { container, sheets } = render(<Progress value={50} />)
    expect(container.firstChild!.firstChild).toHaveClass(classes.progress)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
