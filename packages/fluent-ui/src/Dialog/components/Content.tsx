import * as React from 'react'
import { StyledDialogContent } from '../Dialog.styled'

const Content: React.FC = (props): React.ReactElement => {
  return <StyledDialogContent {...props} />
}

Content.displayName = 'FDialogContent'

export default Content
