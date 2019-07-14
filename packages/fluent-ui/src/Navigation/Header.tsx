import * as React from 'react'
import Box from '../Box'

interface ItemProps {
  children: React.ReactNode
}

const Header: React.FC<ItemProps> = ({ children }: ItemProps): React.ReactElement => (
  <Box>{children}</Box>
)

Header.displayName = 'FNavigationHeader'

export default Header
