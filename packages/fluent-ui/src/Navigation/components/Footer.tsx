import * as React from 'react'
import Box from '../../Box'
import { NavigationFooterProps } from '../Navigation.type'

const Footer = ({ children }: NavigationFooterProps): React.ReactElement => <Box>{children}</Box>

Footer.displayName = 'FNavigationFooter'

export default Footer
