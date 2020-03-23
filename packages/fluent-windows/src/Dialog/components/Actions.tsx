import * as React from 'react'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from '../Dialog.styled'
import { Theme } from '../../styles'
import { DialogClassProps } from '../Dialog.type'
import Box from '../../Box'

export const name = 'DialogActions'

const useStyles = createUseStyles<Theme, DialogClassProps>(styles, { name })

const Actions: React.FC = (props): React.ReactElement => {
  const classes = useStyles(props)
  return <Box className={classes.actions} {...props} />
}

Actions.displayName = `F${name}`

export default Actions
