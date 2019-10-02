import * as React from 'react'

import { Box, Typography, Dialog, Theme, Spinner } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import * as Icons from '@fluent-ui/icons'
import { Styles } from 'jss'
import Highlight from '../../../components/highlight'
import { toHump } from '../../../utils'
import LazyLoad from 'react-lazyload'
// @ts-ignore
import tags from './tags.json'

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
    iconContainer: {
      display: 'inline-block',
      width: '25%',
      '@media screen and (min-width: 600px)': {
        width: '16.6667%'
      }
    },
    iconWrapper: {
      width: '100%',
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
      fontSize: 150,
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

const tagList = Object.keys(tags)

const Template = (): React.ReactElement => {
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
      <Box padding="20px">
        {tagList.map(
          (title): React.ReactElement => {
            return (
              <Box key={title}>
                <Typography variant="h6" gutterBottom gutterTop>
                  {title}
                </Typography>
                <Box>
                  {Object.keys(tags[title]).map(
                    (icon): React.ReactElement => {
                      const Hump = toHump(icon)
                      // @ts-ignore
                      const LineIcon = Icons[`${Hump}Line`]
                      // @ts-ignore
                      const FillIcon = Icons[`${Hump}Fill`]
                      // @ts-ignore
                      const OtherIcon = Icons[Hump]
                      // eslint-disable-next-line
                      return React.useMemo(
                        (): React.ReactElement => (
                          <LazyLoad
                            scrollContainer="#contentRoot"
                            height={144}
                            placeholder={<Spinner />}
                            throttle={200}
                            once={true}
                            key={icon}
                          >
                            <div className={classes.iconContainer}>
                              {!!LineIcon && (
                                <Box
                                  className={classes.iconWrapper}
                                  onClick={handleVisible.bind(null, `${Hump}Line`)}
                                >
                                  <LineIcon />
                                  <Typography
                                    className={classes.title}
                                    variant="subtitle2"
                                  >{`${Hump}Line`}</Typography>
                                </Box>
                              )}
                              {!!FillIcon && (
                                <Box
                                  className={classes.iconWrapper}
                                  onClick={handleVisible.bind(null, `${Hump}Fill`)}
                                >
                                  <FillIcon />
                                  <Typography
                                    className={classes.title}
                                    variant="subtitle2"
                                  >{`${Hump}Fill`}</Typography>
                                </Box>
                              )}
                              {!!OtherIcon && (
                                <Box
                                  className={classes.iconWrapper}
                                  onClick={handleVisible.bind(null, Hump)}
                                >
                                  <OtherIcon />
                                  <Typography className={classes.title} variant="subtitle2">
                                    {Hump}
                                  </Typography>
                                </Box>
                              )}
                            </div>
                          </LazyLoad>
                        ),
                        [FillIcon, Hump, LineIcon, OtherIcon, icon]
                      )
                    }
                  )}
                </Box>
              </Box>
            )
          }
        )}
      </Box>
      <Dialog visible={visible} onChange={handleVisible}>
        <Dialog.Title>{currentSelectIcon}</Dialog.Title>

        <div>
          <Highlight>{code}</Highlight>
          {CurrentSelectIcon && (
            <Box display="flex" width="100%" marginTop={34}>
              <Box className={classes.bigIcon}>
                <CurrentSelectIcon />
              </Box>
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
