import React, { ReactElement, SFC } from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as Fluent from '@fluent-ui/core'

const scope = Fluent

interface PlaygroundProps {
  children: any
}

const Playground: SFC<PlaygroundProps> = ({ children }: PlaygroundProps): ReactElement => {
  return (
    <section>
      <LiveProvider code={children.props.children} scope={scope}>
        <LivePreview
          css={`
            > * {
              margin: 8px;
            }
          `}
        />
        <LiveEditor className="markdown-pre" />
        <LiveError />
      </LiveProvider>
    </section>
  )
}

export default Playground
