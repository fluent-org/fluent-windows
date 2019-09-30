import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'
import { useIntl } from 'react-intl'
// @ts-ignore
import CopytoClipboard from 'react-copy-to-clipboard'
import { theme } from '../utils/theme'

const { Box, Command, Item, Transition, Tooltip } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const styles = {
  editor: {
    position: 'relative',
    '&:hover': {
      '& .copy': {
        opacity: 1
      }
    }
  },
  title: {
    textTransform: 'uppercase'
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

  const code = children.props.children
  const lang =
    typeof children === 'string'
      ? 'js'
      : (children as React.ReactElement).props.className
      ? (children as React.ReactElement).props.className.split('-')[1]
      : 'js'
  const { formatMessage } = useIntl()

  const classes = useStyles()

  return (
    <Box as="section" boxShadow="1" borderRadius="2px">
      <LiveProvider code={code} scope={scope} theme={theme}>
        <Command height={46}>
          <Tooltip title="code" placement="top">
            <Item onClick={handleCodeVisible} prefix={<Icon.CodeSLine />} />
          </Tooltip>

          <Command.Content>
            <Transition visible={codeVisible}>
              <Box className={classes.title}>{lang}</Box>
            </Transition>
          </Command.Content>

          <Command.Secondary>
            <CopytoClipboard text={code}>
              <Item prefix={<Icon.ClipboardLine />}>
                {formatMessage({ id: 'command.copy-code' })}
              </Item>
            </CopytoClipboard>
          </Command.Secondary>
        </Command>
        <Transition visible={codeVisible} type="collapse">
          <div className={classes.editor}>
            <LiveEditor
              style={{
                maxHeight: 1000,
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                outline: 'none',
                borderBottom: '1px dashed #f6f8fa'
              }}
            />
          </div>
        </Transition>
        <LivePreview className={classes.preview} />
        <LiveError />
      </LiveProvider>
    </Box>
  )
}

export default Playground
