import React, { ReactElement, ReactNode } from 'react'
import Box from '../Box'

interface ItemProps {
  children: ReactNode
}

const Header = ({ children }: ItemProps): ReactElement => <Box>{children}</Box>

export default Header
