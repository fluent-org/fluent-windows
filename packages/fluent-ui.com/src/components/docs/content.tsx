import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import { Box } from '@fluent-ui/core'

import Header from '../header'

import Playground from '../playground'
import Highlight from '../highlight'

import IconTemplate from '../../docs/components/Icon/template'
import ColorTemplate from '../../docs/components/Color/template'
import Table from '../table'

import { TemplateProps } from './template'

const Content = ({ data }: TemplateProps): React.ReactElement => {
  return (
    <Box
      flex={1}
      transition="all 250ms cubic-bezier(0.4,0,0.2,1) 0ms"
      boxShadow="0px 3px 5px -1px rgba(0,0,0,0.12), 0px 3px 8px 0px rgba(0,0,0,0.06)"
      position="relative"
      zIndex={2}
      overflow="auto"
    >
      <Header />
      <Box padding="4" minHeight="100%" backgroundColor="white.default">
        <Markdown
          options={{
            overrides: {
              pre: Playground as any,
              IconTemplate,
              ColorTemplate
            }
          }}
        >
          {data.doc.rawMarkdownBody}
        </Markdown>
        <Markdown
          options={{
            namedCodesToUnicode: {
              or: '|'
            },
            overrides: {
              pre: Highlight,
              table: Table
            }
          }}
        >
          {data.api.rawMarkdownBody}
        </Markdown>
      </Box>
    </Box>
  )
}

export default Content
