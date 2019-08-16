import * as React from 'react'
import Box from '../../Box'

const Content: React.FC = (props): React.ReactElement => {
  return <Box padding="16px" {...props} />
}

Content.displayName = 'FCardContent'

export default Content
