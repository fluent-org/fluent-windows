import * as React from 'react'
import { createUseStyles } from '@fluent-ui/styles'
import { Styles } from 'jss'
import { render } from './createRender'

export function getClasses<T extends string>(styles: Styles, name: string): Record<T, string> {
  const useStyles = createUseStyles<T>(styles, { name })
  let classes: Record<T, string>
  function Util(props: any): React.ReactElement {
    classes = useStyles(props)
    return <div />
  }
  render(<Util />)
  // @ts-ignore
  return classes
}
