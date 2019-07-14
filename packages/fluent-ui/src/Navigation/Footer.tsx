import * as React from 'react'
import Box from '../Box'

interface ItemProps {
  children: React.ReactNode
}

const Footer: React.FC<ItemProps> = ({ children }: ItemProps): React.ReactElement => (
  <Box>{children}</Box>
)

Footer.displayName = 'FNavigationFooter'

export default Footer
