import * as React from 'react'
import * as PropTypes from 'prop-types'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from '../Dialog.styled'
import { Theme } from '../../styles'
import { DialogClassProps, DialogTitleProps } from '../Dialog.type'
import { DialogContext } from '../Dialog'

import Typography from '../../Typography'
import IconButton from '../../IconButton'
import { CloseLine as CloseLineIcon } from '@fluent-windows/icons'

export const name = 'DialogTitle'

const useStyles = createUseStyles<Theme, DialogClassProps>(styles, { name })

const Title: React.FC<DialogTitleProps> = (props): React.ReactElement => {
  const { children, ...rest } = props
  const classes = useStyles(props)
  const { onChange } = React.useContext(DialogContext)
  const handleClose = React.useCallback((): void => {
    onChange && onChange(false)
  }, [onChange])
  return (
    <div className={classes.title} {...rest}>
      <Typography variant="h6">{children}</Typography>
      <IconButton size="small" style={{ height: '100%' }} onClick={handleClose}>
        <CloseLineIcon />
      </IconButton>
    </div>
  )
}

Title.displayName = `F${name}`

Title.propTypes = {
  children: PropTypes.any.isRequired
}

export default Title
