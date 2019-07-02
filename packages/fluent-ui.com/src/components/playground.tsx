import * as React from 'react'
import { ReactElement, SFC } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'
import * as Icon from '@fluent-ui/icons'
import { theme } from '../utils/theme'

const scope = { ...Fluent, Icon }

interface PlaygroundProps {
  children: any
}

const Playground: SFC<PlaygroundProps> = ({ children }: PlaygroundProps): ReactElement => {
  return (
    <section>
      <LiveProvider code={children.props.children} scope={scope} theme={theme}>
        <LivePreview
          css={`
            > * {
              margin: 8px;
            }
          `}
        />
        <LiveEditor
          css={`
            font-size: 14px;
            textarea {
              outline: none;
            }
          `}
        />
        <LiveError />
      </LiveProvider>
    </section>
  )
}

export default Playground
