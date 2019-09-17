import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'
import { theme } from '../utils/theme'

const { Box, Command, Item, Transition, Tooltip } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const styles = {
  editor: {
    fontSize: 14,
    maxHeight: 1000,
    overflow: 'auto !important',
    backgroundColor: '#fff !important',
    borderBottom: '1px dashed #f5f5f5',
    '-webkit-overflow-scrolling': 'touch',
    textarea: {
      outline: 'none'
    }
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
  return (
    <Box as="section" boxShadow="1" borderRadius="2px">
      <LiveProvider code={children.props.children} scope={scope} theme={theme}>
        <Command height={46}>
          <Tooltip title="code" placement="top">
            <Item onClick={handleCodeVisible} prefix={<Icon.Code />} />
          </Tooltip>
        </Command>
        <Transition visible={codeVisible} type="collapse">
          <LiveEditor className={classes.editor} />
        </Transition>
        <LivePreview className={classes.preview} />
        <LiveError />
      </LiveProvider>
    </Box>
  )
}

export default Playground
