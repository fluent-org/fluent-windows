import * as React from 'react'
import { ReactElement, ReactNode } from 'react'
import Box from '../Box'

interface ContentProps {
  children: ReactNode
}

const Content = ({ children }: ContentProps): ReactElement => (
  <Box>{children}</Box>
)

export default Content
