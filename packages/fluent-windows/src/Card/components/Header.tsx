import * as React from 'react'
import Box from '../../Box'

const Header: React.FC = (props): React.ReactElement => {
  return <Box display="flex" alignItems="center" padding="16px 16px 0" {...props} />
}

Header.displayName = 'FCardHeader'

export default Header
