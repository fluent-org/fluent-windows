import * as React from 'react'
import { createUseStyles } from 'react-jss'
import { Style } from 'jss'

export function createGlobalStyle(style: Style) {
  const useStyles = createUseStyles({
    '@global': style
  })
  // eslint-disable-next-line react/display-name
  return (): React.ReactElement => {
    useStyles()
    return <React.Fragment />
  }
}
