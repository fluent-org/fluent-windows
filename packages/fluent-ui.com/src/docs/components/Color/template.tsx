import * as React from 'react'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Box } from '@fluent-ui/core'
import { colors } from '@fluent-ui/core'

interface Item {
  key: string
  value: string
}
interface List {
  type: string
  items: Item[]
}
const colorList = Object.entries(colors).map(
  ([type, items]): List => ({
    type,
    items: Object.entries(items).map(([key, value]): Item => ({ key, value }))
  })
)

const Block = styled(
  ({ type, value, ...rest }): ReactElement => (
    <Box {...rest}>
      <Box flex={1}>{type}</Box>
      <Box>{value}</Box>
    </Box>
  )
)`
  box-sizing: border-box;
  height: 40px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ value }): string => value};
  color: ${({ type }): string => (type.includes('light') ? 'black' : 'white')};
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    margin-right: -8px;
  }
`

const Template = (): ReactElement => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {colorList.map(
        ({ type, items }): ReactElement => (
          <Box key={type} width="30%" display="inline-block">
            <h1>{type}</h1>
            <Box>
              {items.map(
                ({ key, value }): ReactElement => (
                  <CopyToClipboard key={key} text={value}>
                    <Block type={key} value={value} />
                  </CopyToClipboard>
                )
              )}
            </Box>
          </Box>
        )
      )}
    </Box>
  )
}

export default Template
