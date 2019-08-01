import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import { theme } from '../utils/theme'

const { Box, Command, CommandButton, Transition, Tooltip } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const Playground: React.FC<PlaygroundProps> = ({
  children
}: PlaygroundProps): React.ReactElement => {
  const [codeVisible, setCodeVisible] = React.useState(false)
  const handleCodeVisible = React.useCallback((): void => {
    setCodeVisible((v): boolean => !v)
  }, [])
  return (
    <Box as="section" boxShadow="1" borderRadius="4px">
      <LiveProvider code={children.props.children} scope={scope} theme={theme}>
        <Command height={46}>
          <Tooltip title="code" placement="top">
            <CommandButton onClick={handleCodeVisible}>
              <Icon.Code />
            </CommandButton>
          </Tooltip>
        </Command>
        <Transition visible={codeVisible} type="collapse" mountOnEnter unmountOnExit>
          <LiveEditor
            css={`
              font-size: 14px;
              border-radius: 4px;
              max-height: 1000px;
              overflow: auto !important;
              background-color: #fff !important;
              border-bottom: 1px dashed #f5f5f5;
              -webkit-overflow-scrolling: touch;
              textarea {
                outline: none;
              }
            `}
          />
        </Transition>
        <LivePreview
          css={`
            // background-color: #f5f5f5;
            padding: 20px;
            border-radius: 4px;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            > * {
              margin: 8px;
            }
          `}
        />
        <LiveError />
      </LiveProvider>
    </Box>
  )
}

export default Playground
