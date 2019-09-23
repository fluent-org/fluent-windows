import * as React from 'react'
import { getClasses, render } from '../../test-utils'
import '@testing-library/jest-dom/extend-expect'

import { MenuLine } from '@fluent-ui/icons'
import Command, { name } from '../Command'
import Item from '../../Item'

import { styles } from '../Command.styled'
import { CommandClassProps } from '../Command.type'

const classes = getClasses<CommandClassProps>(styles, name)

describe('Command', (): void => {
  const testText = 'Hello World'

  test('should be support ref', (): void => {
    const ref = React.createRef<HTMLDivElement>()
    const { container } = render(
      <Command ref={ref}>{<Command.Content>{testText}</Command.Content>}</Command>
    )
    const { current: element } = ref
    expect(element).toEqual(container.firstChild)
  })

  test('should render children', (): void => {
    const { container, getByText, sheets } = render(
      <Command>{<Command.Content>{testText}</Command.Content>}</Command>
    )
    expect(getByText(testText)).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(classes.root)
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should to render Primary Content and Secondary', (): void => {
    const { container } = render(
      <Command>
        <Item prefix={<MenuLine />} />

        <Command.Content>{testText}</Command.Content>

        <Command.Secondary>
          <Item>Like</Item>
          <Item>Dislike</Item>
        </Command.Secondary>
      </Command>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('should be rendered with acrylic effects', (): void => {
    const { container, sheets } = render(
      <Command acrylic>
        <Item prefix={<MenuLine />} />

        <Command.Content>Now Playing...</Command.Content>

        <Command.Secondary>
          <Item>Like</Item>
          <Item>Dislike</Item>
        </Command.Secondary>
      </Command>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('should be rendered with reveal effects', (): void => {
    const { container, sheets } = render(
      <Command reveal>
        <Item prefix={<MenuLine />} />

        <Command.Content>Now Playing...</Command.Content>

        <Command.Secondary>
          <Item>Like</Item>
          <Item>Dislike</Item>
        </Command.Secondary>
      </Command>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(sheets.toString()).toMatchSnapshot()
  })

  test('without Content and Secondary', (): void => {
    const { container, sheets } = render(
      <Command acrylic>
        <Item prefix={<MenuLine />} />
      </Command>
    )
    expect(container.firstChild).toMatchSnapshot()
    expect(sheets.toString()).toMatchSnapshot()
  })
})
