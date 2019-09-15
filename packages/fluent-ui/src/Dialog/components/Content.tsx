import * as React from 'react'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from '../Dialog.styled'
import { Theme } from '../../styles'
import { DialogClassProps } from '../Dialog.type'
import Box from '../../Box'

export const name = 'DialogContent'

const useStyles = createUseStyles<Theme, DialogClassProps>(styles, { name })

const Content: React.FC = (props): React.ReactElement => {
  const classes = useStyles(props)
  return <Box className={classes.content} {...props} />
}

Content.displayName = `F${name}`

export default Content
