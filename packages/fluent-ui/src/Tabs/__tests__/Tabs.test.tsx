import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import Tabs, { name } from '../Tabs'
import { styles } from '../Tabs.styled'
import { TabsClassProps } from '../Tabs.type'

const classes = getClasses<TabsClassProps>(styles, name)

describe('Tabs', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <Tabs ref={ref}>
        <Tabs.Panel value="one" title="Item One">
          Item One
        </Tabs.Panel>
        <Tabs.Panel value="two" title="Item Two">
          Item Two
        </Tabs.Panel>
        <Tabs.Panel value="three" title="Item Three">
          Item Three
        </Tabs.Panel>
      </Tabs>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <Tabs>
        <Tabs.Panel value="one" title="Item One">
          {testText}
        </Tabs.Panel>
      </Tabs>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })
})
