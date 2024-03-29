export { default as Box } from './Box'
export { default as Button } from './Button'
export { default as Card } from './Card'
export { default as IconButton } from './IconButton'
export { default as Input } from './Input'
export { default as FormLabel } from './FormLabel'
export { default as Checkbox } from './Checkbox'
export { default as Toggle } from './Toggle'
export { default as Radio } from './Radio'
export { default as Select } from './Select'
export { default as Form } from './Form'
export { default as Command } from './Command'
export { default as Navigation } from './Navigation'
export { default as Transition } from './Transition'
export { default as Tooltip } from './Tooltip'
export { default as Tabs } from './Tabs'
export { default as Drawer } from './Drawer'
export { default as Typography } from './Typography'
export { default as Item } from './Item'
export { default as ItemGroup } from './ItemGroup'
export { default as List } from './List'
export { default as Spinner } from './Spinner'
export { default as Progress } from './Progress'
export { default as Portal } from './Portal'
export { default as Dialog } from './Dialog'
export { default as Toast } from './Toast'
export * from './Table'
export { default as Table } from './Table'

export { default as ThemeProvider, Normalize } from './ThemeProvider'
export * from './styles'

import * as colors from './colors'
export { colors }

export interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
}

export type StandardProps<
  T = React.HTMLAttributes<HTMLDivElement>,
  Ref = HTMLDivElement,
  O extends string = ''
> = {
  className?: string
  style?: React.CSSProperties
} & Omit<T, O> & {
    ref?: React.Ref<Ref>
  }
