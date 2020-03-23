import * as React from 'react'
import { Box, Typography } from '@fluent-windows/core'
import { createUseStyles } from '@fluent-windows/styles'

const useStyles = createUseStyles({
  iconContainer: {
    display: 'inline-block',
    width: '25%',
    '@media screen and (min-width: 600px)': {
      width: '16.6667%'
    },
    padding: 16,
    borderRadius: 4,
    textAlign: 'center',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fff'
    }
  },
  title: {
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }
})

interface IconType {
  key: string
  tag: string
  Icon: any
}
interface IconProps {
  icons: IconType[]
  callback: (name: string) => void
}

const Icon = React.memo<IconProps>(
  ({ icons, callback }: IconProps): React.ReactElement => {
    const classes = useStyles()
    return (
      <div>
        {icons.map(
          (icon): React.ReactElement => (
            <Box className={classes.iconContainer} onClick={callback(icon.key)} key={icon.key}>
              <icon.Icon />
              <Typography className={classes.title} variant="subtitle2">
                {icon.key}
              </Typography>
            </Box>
          )
        )}
      </div>
    )
  }
)

Icon.displayName = 'Icons'

export default Icon
