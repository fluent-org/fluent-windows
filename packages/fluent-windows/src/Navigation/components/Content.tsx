import * as React from 'react'
import Box from '../../Box'
import { NavigationContentProps } from '../Navigation.type'

const Content = ({ children }: NavigationContentProps): React.ReactElement => <Box>{children}</Box>

Content.displayName = 'FNavigationContent'

export default Content
