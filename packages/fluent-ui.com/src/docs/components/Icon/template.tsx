import * as React from 'react'
// @ts-ignore
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Box } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import * as Icons from '@fluent-ui/icons'

const useStyles = createUseStyles({
  iconRoot: {
    width: '20%',
    height: 100,
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'all linear 250ms',
    '& > svg': {
      transition: 'all linear 250ms'
    },
    '& > span': {
      fontSize: 12,
      lineHeight: '30px'
    },
    '&:hover': {
      backgroundColor: 'rgba(0, 120, 215, 1)',
      color: 'white',
      '> svg': {
        color: 'white',
        transform: 'scale(1.25)'
      }
    }
  }
})

const Template = (): React.ReactElement => {
  // @ts-ignore
  const IconArray = Object.keys(Icons).map(key => Icons[key])
  const classes = useStyles()
  return (
    <Box>
      {IconArray.map(
        (Icon): React.ReactElement => {
          const name = String.prototype.substring.call(Icon.displayName, 5)
          return (
            <CopyToClipboard key={name} text={`<${name} />`}>
              <div className={classes.iconRoot}>
                <Icon />
                <span>{name}</span>
              </div>
            </CopyToClipboard>
          )
        }
      )}
    </Box>
  )
}

export default Template
