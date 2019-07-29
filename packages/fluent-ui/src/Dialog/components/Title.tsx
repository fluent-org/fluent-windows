import * as React from 'react'
import Typography from '../../Typography'
import IconButton from '../../IconButton'
import { Cancel as CancelIcon } from '@fluent-ui/icons'
import { StyledDialogTitle } from '../Dialog.styled'
import { DialogTitleProps } from '../Dialog.type'
import { DialogContext } from '../Dialog'

const Title = ({ children, ...rest }: DialogTitleProps): React.ReactElement => {
  const { onChange } = React.useContext(DialogContext)
  function handleClose(): void {
    onChange && onChange(false)
  }
  return (
    <StyledDialogTitle {...rest}>
      <Typography variant="h6">{children}</Typography>
      <IconButton
        size="small"
        style={{ marginRight: '-10px', height: '100%' }}
        onClick={handleClose}
      >
        <CancelIcon />
      </IconButton>
    </StyledDialogTitle>
  )
}

Title.displayName = 'FDialogTitle'

export default Title
