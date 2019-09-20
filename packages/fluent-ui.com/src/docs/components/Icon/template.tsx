import * as React from 'react'

import { Box, Typography, Dialog, Theme } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import * as Icons from '@fluent-ui/icons'
import { Styles } from 'jss'
import { VirtuosoGrid } from 'react-virtuoso'
const Virtuoso = VirtuosoGrid as any
import Highlight from '../../../components/highlight'

type Classes =
  | 'list'
  | 'iconContainer'
  | 'iconWrapper'
  | 'title'
  | 'bigIcon'
  | 'smallIcon'
  | 'primaryPureIcon'
  | 'primaryIcon'
  | 'standardPureIcon'
  | 'standardIcon'
  | 'blackPureIcon'
  | 'blackIcon'
const useStyles = createUseStyles<Theme, Classes>(
  (theme: Theme): Styles => ({
    list: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    iconContainer: {
      width: '33%',
      '@media screen and (min-width: 600px)': {
        width: '25%'
      },
      '@media screen and (min-width: 960px)': {
        width: '20%'
      }
    },
    iconWrapper: {
      width: '100%',
      fontSize: 26,
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
    },
    bigIcon: {
      color: theme.colors!.primary!.default,
      fontSize: 180,
      backgroundSize: '30px 30px',
      backgroundColor: '#fff',
      backgroundImage:
        'linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%)',
      backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0px'
    },
    smallIcon: {
      margin: 4,
      padding: '8px 16px',
      borderRadius: 4,
      fontSize: '1.5rem',
      display: 'inline-block'
    },
    primaryPureIcon: {
      color: theme.colors!.primary!.default
    },
    primaryIcon: {
      color: theme.colors!.white!.default,
      backgroundColor: theme.colors!.primary!.default
    },
    standardPureIcon: {
      color: theme.colors!.standard!.default
    },
    standardIcon: {
      color: theme.colors!.white!.default,
      backgroundColor: theme.colors!.standard!.default
    },
    blackPureIcon: {
      color: theme.colors!.black!.default
    },
    blackIcon: {
      color: theme.colors!.white!.default,
      backgroundColor: theme.colors!.black!.default
    }
  })
)

const Template = (): React.ReactElement => {
  // @ts-ignore
  const IconArray = Object.keys(Icons).map((key): React.ComponentElement => Icons[key])
  const classes = useStyles()

  const [visible, setVisible] = React.useState(false)
  const [currentSelectIcon, setCurrentSelectIcon] = React.useState('')

  const handleVisible = React.useCallback((name): void => {
    setVisible((v): boolean => !v)
    setCurrentSelectIcon(name)
  }, [])

  // @ts-ignore
  const CurrentSelectIcon = React.useMemo((): any => Icons[currentSelectIcon], [currentSelectIcon])
  const code = React.useMemo(
    (): string => `import ${currentSelectIcon}Icon from '@fluent-ui/icons/${currentSelectIcon}'`,
    [currentSelectIcon]
  )

  return (
    <Box backgroundColor="standard.light3" marginTop={20}>
      <Virtuoso
        totalCount={IconArray.length}
        listClassName={classes.list}
        itemClassName={classes.iconContainer}
        item={(index: number): React.ReactElement => {
          const Icon = IconArray[index]
          const name = String.prototype.substring.call(Icon.displayName, 5)
          return (
            <div className={classes.iconWrapper} onClick={handleVisible.bind(null, name)}>
              <Icon />
              <Typography className={classes.title} variant="subtitle2" color="standard.dark1">
                {name}
              </Typography>
            </div>
          )
        }}
        style={{ height: '500px' }}
      />
      <Dialog visible={visible} onChange={handleVisible}>
        <Dialog.Title>{currentSelectIcon}</Dialog.Title>

        <div>
          <Highlight>{code}</Highlight>
          {CurrentSelectIcon && (
            <Box display="flex" width="100%" marginTop={34}>
              <CurrentSelectIcon className={classes.bigIcon} />
              <Box flex={1} paddingLeft={20}>
                <Box textAlign="center">
                  <Box className={[classes.smallIcon, classes.primaryPureIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                  <Box className={[classes.smallIcon, classes.primaryIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                </Box>
                <Box textAlign="center">
                  <Box className={[classes.smallIcon, classes.standardPureIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                  <Box className={[classes.smallIcon, classes.standardIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                </Box>
                <Box textAlign="center">
                  <Box className={[classes.smallIcon, classes.blackPureIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                  <Box className={[classes.smallIcon, classes.blackIcon]}>
                    <CurrentSelectIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
        </div>
      </Dialog>
    </Box>
  )
}

export default Template
