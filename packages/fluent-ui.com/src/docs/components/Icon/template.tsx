import * as React from 'react'
import { Box, Dialog, Theme, Input, FormLabel, Radio } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { Styles } from 'jss'
import * as Icons from '@fluent-ui/icons'
import Highlight from '../../../components/highlight'
import FlexSearch from 'flexsearch'
import { useDebouncedCallback } from 'use-debounce'
// @ts-ignore
import tags from './tags.json'
import Icon from './Icon'
import { toLine } from '../../../utils'

type Classes =
  | 'commandTag'
  | 'commandSearch'
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
    commandTag: {
      display: 'inline-block',
      '& > label': {
        marginRight: 10
      }
    },
    commandSearch: {
      display: 'inline-block',
      paddingLeft: 10
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

const tagList = Object.keys(tags).reduce(
  (acc, cur): {} => ({
    ...acc,
    ...tags[cur]
  }),
  {}
)

const searchIndex = FlexSearch.create({
  async: true,
  tokenize: 'full'
})

interface IconType {
  key: string
  tag: string
  Icon: any
}
const allIconsMap: { [name: string]: IconType } = {}
const allIcons = Object.keys(Icons)
  .sort()
  .map(
    (key): IconType => {
      let tag
      if (key.indexOf('Line') !== -1) {
        tag = 'Line'
      } else if (key.indexOf('Fill') !== -1) {
        tag = 'Fill'
      } else {
        tag = ''
      }

      let searchable = toLine(key.replace(/(Line|Fill)$/, ''))
      if ((tagList as any)[toLine(searchable)]) {
        searchable += ` ${(tagList as any)[toLine(searchable)]}`
      }
      searchIndex.add(key, searchable)

      const icon = {
        key,
        tag,
        Icon: (Icons as any)[key]
      }
      allIconsMap[key] = icon
      return icon
    }
  )

const Template = (): React.ReactElement => {
  const classes = useStyles()

  const [visible, setVisible] = React.useState(false)
  const [currentSelectIcon, setCurrentSelectIcon] = React.useState('')
  const [searchValue, setSearchValue] = React.useState('')
  const [tag, setTag] = React.useState('Line')
  const [keys, setKeys] = React.useState<string[] | null>(null)

  const handleVisible = React.useCallback((name): (() => void) => {
    return (): void => {
      setVisible((v): boolean => !v)
      setCurrentSelectIcon(name)
    }
  }, [])

  // @ts-ignore
  const CurrentSelectIcon = React.useMemo((): any => Icons[currentSelectIcon], [currentSelectIcon])
  const code = React.useMemo(
    (): string => `import ${currentSelectIcon}Icon from '@fluent-ui/icons/${currentSelectIcon}'`,
    [currentSelectIcon]
  )

  const [debouncedCallback] = useDebouncedCallback((value): void => {
    if (value === '') {
      setKeys(null)
    } else {
      searchIndex.search(value).then((results: any): void => {
        setKeys(results)
      })
    }
  }, 250)
  const handleSearchChange = React.useCallback(
    (v): void => {
      debouncedCallback(v)
      setSearchValue(v)
    },
    [debouncedCallback]
  )

  const icons = React.useMemo(
    (): IconType[] =>
      (keys === null ? allIcons : keys.map((key: string): IconType => allIconsMap[key])).filter(
        (icon: IconType): boolean => tag === icon.tag
      ),
    [tag, keys]
  )

  return (
    <Box backgroundColor="standard.light3" marginTop={20}>
      <Box padding="20px">
        <Box display="flex" alignItems="center" marginBottom={10}>
          <Box className={classes.commandTag}>
            {['Line', 'Fill'].map(
              (key): React.ReactElement => {
                return (
                  <FormLabel label={key} key={key}>
                    <Radio
                      value={key}
                      checked={tag === key}
                      onChange={(): void => {
                        setTag(key)
                      }}
                    />
                  </FormLabel>
                )
              }
            )}
          </Box>
          <Box className={classes.commandSearch} flex={1}>
            <Input
              value={searchValue}
              onChange={handleSearchChange}
              prefix={<Icons.SearchLine />}
              placeholder="Search Icons"
              cleared
            />
          </Box>
        </Box>
        <Icon icons={icons} callback={handleVisible} />
      </Box>

      <Dialog visible={visible} onChange={handleVisible('')}>
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
