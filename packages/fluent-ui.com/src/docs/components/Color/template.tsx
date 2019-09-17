import * as React from 'react'
import { ReactElement } from 'react'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Box, colors } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { Styles } from 'jss'

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

interface BlockProps {
  type: string
  value: string
}

const useStyles = createUseStyles({
  block: (props: BlockProps) => ({
    boxSizing: 'border-box',
    height: 40,
    padding: 8,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: props.value,
    color: props.type.includes('light') ? 'black' : 'white',
    cursor: 'pointer',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    '&:hover': {
      marginRight: -8
    }
  })
})
const Block = (props: BlockProps): ReactElement => {
  const { type, value, ...rest } = props
  const classes = useStyles(props)
  return (
    <Box className={classes.block} {...rest}>
      <Box flex={1}>{type}</Box>
      <Box>{value}</Box>
    </Box>
  )
}

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
