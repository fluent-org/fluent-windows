import * as React from 'react'
import Box from '../../Box'

const Actions: React.FC = (props): React.ReactElement => {
  return <Box display="flex" alignItems="center" padding="8px 16px 16px" {...props} />
}

Actions.displayName = 'FCardActions'

export default Actions
