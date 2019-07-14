import * as React from 'react'
import Box from '../Box'

interface ContentProps {
  children: React.ReactNode
}

const Content: React.FC<ContentProps> = ({ children }: ContentProps): React.ReactElement => (
  <Box>{children}</Box>
)

Content.displayName = 'FNavigationContent'

export default Content
