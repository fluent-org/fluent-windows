import * as React from 'react'
import { StyledDialogActions } from '../Dialog.styled'

const Actions: React.FC = (props): React.ReactElement => {
  return <StyledDialogActions {...props} />
}

Actions.displayName = 'FDialogActions'

export default Actions
