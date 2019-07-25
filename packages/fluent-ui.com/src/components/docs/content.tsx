import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import { Box, Typography } from '@fluent-ui/core'

import Header from './header'

import Playground from '../playground'
import Highlight from '../highlight'

import IconTemplate from '../../docs/components/Icon/template'
import ColorTemplate from '../../docs/components/Color/template'
import Table from '../table'

import { TemplateProps } from './template'

import { StyledTitleA } from './content.styled'

interface TypographyComponentProps {
  id?: string
  children?: React.ReactNode
}

const H1 = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="h4" as="h1" gutterTop gutterBottom {...props}>
    <StyledTitleA href={`#${props.id}`}>{props.children}</StyledTitleA>
  </Typography>
)
const H2 = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="h5" as="h2" gutterTop gutterBottom {...props}>
    <StyledTitleA href={`#${props.id}`}>{props.children}</StyledTitleA>
  </Typography>
)
const H3 = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="h6" as="h3" gutterTop gutterBottom {...props}>
    <StyledTitleA href={`#${props.id}`}>{props.children}</StyledTitleA>
  </Typography>
)

const Subtitle = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="subtitle1" as="h6" gutterBottom {...props} />
)
const Body = (props: TypographyComponentProps): React.ReactElement => (
  <Typography variant="body1" as="p" gutterBottom {...props} />
)

const typographyOverrides = {
  h1: H1,
  h2: H2,
  h3: H3,
  h6: Subtitle,
  p: Body
}

const Content = ({ data }: TemplateProps): React.ReactElement => {
  return (
    // @ts-ignore
    <Box
      flex={1}
      transition="all 250ms cubic-bezier(0.4,0,0.2,1) 0ms"
      boxShadow="0px 3px 5px -1px rgba(0,0,0,0.12), 0px 3px 8px 0px rgba(0,0,0,0.06)"
      position="relative"
      zIndex={2}
      overflow="auto"
      css={`
        -webkit-overflow-scrolling: touch;
      `}
    >
      <Header />
      <Box padding="4" minHeight="100%" backgroundColor="white.default">
        <Markdown
          options={{
            overrides: {
              pre: Playground as any,
              IconTemplate,
              ColorTemplate,
              ...typographyOverrides
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
              table: Table,
              ...typographyOverrides
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
