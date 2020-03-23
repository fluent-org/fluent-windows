import * as React from 'react'
import Box from '../../Box'
import { NavigationHeaderProps } from '../Navigation.type'

const Header = ({ children }: NavigationHeaderProps): React.ReactElement => <Box>{children}</Box>

Header.displayName = 'FNavigationHeader'

export default Header
