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
  ({ value, index, ...rest }): ReactElement => (
    <Box {...rest}>
      <Box textAlign="center">{index}</Box>
      <Box textAlign="center">{value}</Box>
    </Box>
  )
)`
  width: 100px;
  height: 100px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ value }): string => value};
  color: ${({ type }): string => (type.includes('light') ? 'black' : 'white')};
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    transform: scale3d(1.2, 1.2, 1.2);
  }
`

const Template = (): ReactElement => {
  return (
    <Box>
      {colorList.map(
        ({ type, items }): ReactElement => (
          <Box key={type}>
            <h1>{type}</h1>
            {items.map(
              ({ key, value }, index): ReactElement => (
                <CopyToClipboard key={key} text={value}>
                  <Block type={key} index={index} value={value} />
                </CopyToClipboard>
              )
            )}
          </Box>
        )
      )}
    </Box>
  )
}

export default Template
