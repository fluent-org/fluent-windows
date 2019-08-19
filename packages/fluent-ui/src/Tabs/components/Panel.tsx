import * as React from 'react'
import { TabsPanelProps } from '../Tabs.type'
import Box from '../../Box'

const Panel = React.forwardRef<HTMLDivElement, TabsPanelProps>(
  ({ children, ...rest }: TabsPanelProps, ref): React.ReactElement => (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  )
)

Panel.displayName = 'FTabsPanel'

export default Panel
