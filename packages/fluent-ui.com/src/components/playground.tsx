import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'
// @ts-ignore
import CopytoClipboard from 'react-copy-to-clipboard'
import { theme } from '../utils/theme'

const { Box, Command, Item, Transition, Tooltip, IconButton } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const styles = {
  editor: {
    position: 'relative',
    '& textarea': {
      fontSize: 14,
      maxHeight: 1000,
      overflow: 'auto !important',
      backgroundColor: '#fff !important',
      borderBottom: '1px dashed #f5f5f5',
      '-webkit-overflow-scrolling': 'touch',
      outline: 'none'
    },
    '&:hover': {
      '& .copy': {
        opacity: 1
      }
    }
  },
  copy: {
    position: 'absolute',
    right: 6,
    top: 6,
    opacity: 0,
    transition: 'opacity 250ms linear'
  },
  preview: {
    padding: '0.6em',
    '-webkit-overflow-scrolling': 'touch',
    '& > *': {
      margin: 8
    }
  }
}

const useStyles = createUseStyles(styles)

const Playground: React.FC<PlaygroundProps> = ({
  children
}: PlaygroundProps): React.ReactElement => {
  const [codeVisible, setCodeVisible] = React.useState(false)
  const handleCodeVisible = React.useCallback((): void => {
    setCodeVisible((v): boolean => !v)
  }, [])

  const classes = useStyles()

  const code = children.props.children
  return (
    <Box as="section" boxShadow="1" borderRadius="2px">
      <LiveProvider code={code} scope={scope} theme={theme}>
        <Command height={46}>
          <Tooltip title="code" placement="top">
            <Item onClick={handleCodeVisible} prefix={<Icon.Code />} />
          </Tooltip>
        </Command>
        <Transition visible={codeVisible} type="collapse">
          <div className={classes.editor}>
            <LiveEditor />
            <CopytoClipboard text={code}>
              <IconButton className={classes.copy} variant="standard" size="small">
                <Icon.Copy></Icon.Copy>
              </IconButton>
            </CopytoClipboard>
          </div>
        </Transition>
        <LivePreview className={classes.preview} />
        <LiveError />
      </LiveProvider>
    </Box>
  )
}

export default Playground
