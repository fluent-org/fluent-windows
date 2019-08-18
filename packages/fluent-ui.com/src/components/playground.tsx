import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import * as Hooks from '@fluent-ui/hooks'
import styled from 'styled-components'
import { theme } from '../utils/theme'

const { Box, Command, Item, Transition, Tooltip } = Fluent

const scope = { ...Fluent, Icon, ...Hooks }

interface PlaygroundProps {
  children: any
}

const StyledLiveEditor = styled(LiveEditor)`
  font-size: 14px;
  max-height: 1000px;
  overflow: auto !important;
  background-color: #fff !important;
  border-bottom: 1px dashed #f5f5f5;
  -webkit-overflow-scrolling: touch;
  textarea {
    outline: none;
  }
`
const StyledLivePreview = styled(LivePreview)`
  padding: 0.6em;
  -webkit-overflow-scrolling: touch;
  > * {
    margin: 8px;
  }
`

const Playground: React.FC<PlaygroundProps> = ({
  children
}: PlaygroundProps): React.ReactElement => {
  const [codeVisible, setCodeVisible] = React.useState(false)
  const handleCodeVisible = React.useCallback((): void => {
    setCodeVisible((v): boolean => !v)
  }, [])
  return (
    <Box as="section" boxShadow="1" borderRadius="2px">
      <LiveProvider code={children.props.children} scope={scope} theme={theme}>
        <Command height={46} overflow="hidden">
          <Tooltip title="code" placement="top">
            <Item onClick={handleCodeVisible} prefix={<Icon.Code />} />
          </Tooltip>
        </Command>
        <Transition visible={codeVisible} type="collapse" mountOnEnter unmountOnExit>
          <StyledLiveEditor />
        </Transition>
        <StyledLivePreview />
        <LiveError />
      </LiveProvider>
    </Box>
  )
}

export default Playground
