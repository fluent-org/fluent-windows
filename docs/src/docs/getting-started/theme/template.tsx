import * as React from 'react'
// @ts-ignore
import ObjectInspector from 'react-object-inspector'

import { Box } from '@fluent-windows/core'
import { useTheme } from '@fluent-windows/styles'

const Template = (): React.ReactElement => {
  const theme = useTheme()
  return (
    <Box backgroundColor="standard.light3" padding={20}>
      <ObjectInspector data={theme} />
    </Box>
  )
}

export default Template
