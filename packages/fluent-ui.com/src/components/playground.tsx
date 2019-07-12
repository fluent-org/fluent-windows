import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import { theme } from '../utils/theme'

const { Box, IconButton } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const Playground: React.FC<PlaygroundProps> = ({
  children
}: PlaygroundProps): React.ReactElement => {
  const [codeVisible, setCodeVisible] = React.useState(false)
  function handleCodeVisible(): void {
    setCodeVisible(v => !v)
  }
  return (
    <section>
      <LiveProvider code={children.props.children} scope={scope} theme={theme}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={handleCodeVisible}>
            <Icon.Code />
          </IconButton>
        </Box>
        {codeVisible && (
          <LiveEditor
            css={`
              font-size: 14px;
              border-radius: 4px;
              margin-bottom: 6px;
              max-height: 1000px;
              overflow: auto !important;
              background-color: #f5f5f5 !important;
              textarea {
                outline: none;
              }
            `}
          />
        )}
        <LivePreview
          css={`
            background-color: #f5f5f5;
            padding: 20px;
            border-radius: 4px;
            > * {
              margin: 8px;
            }
          `}
        />
        <LiveError />
      </LiveProvider>
    </section>
  )
}

export default Playground
