import * as React from 'react'
import Markdown from 'markdown-to-jsx'
import { Box, Typography, IconButton } from '@fluent-ui/core'
import { useDispatch } from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'
import { MenuLine as MenuLineIcon } from '@fluent-ui/icons'

import SideBar from './sidebar'
import EditPage from './editPage'

import Playground from '../playground'
import Highlight from '../highlight'

import IconTemplate from '../../docs/components/Icon/template'
import ColorTemplate from '../../docs/components/Color/template'
import ColorTool from '../../docs/components/Color/ColorTool'
import BgTool from '../../docs/components/Color/BgTool'
import ThemeTemplate from '../../docs/getting-started/theme/template'
import Table from '../table'

import { toLine } from '../../utils'

import { TemplateProps } from '../../templates/docs'

import { styles } from './content.styled'

interface TypographyComponentProps {
  id?: string
  children: any
}

const useStyles = createUseStyles(styles)

const H1 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  const name = toLine(props.id as string)
  return (
    <Typography variant="h4" as="h1" gutterTop gutterBottom {...props}>
      <a className={classes.titleA} href={`#${name}`}>
        {props.children}
      </a>
    </Typography>
  )
}
const H2 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  const name = toLine(props.id as string)
  return (
    <Typography
      variant="h5"
      as="h2"
      gutterBottom
      style={{
        marginTop: '2em'
      }}
      {...props}
    >
      <a className={classes.titleA} href={`#${name}`}>
        {props.children}
      </a>
    </Typography>
  )
}
const H3 = (props: TypographyComponentProps): React.ReactElement => {
  const classes = useStyles()
  const name = toLine(props.id as string)
  return (
    <Typography variant="h6" as="h3" gutterTop gutterBottom {...props}>
      <a className={classes.titleA} href={`#${name}`}>
        {props.children}
      </a>
    </Typography>
  )
}

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

const useContentStyles = createUseStyles({
  menuButton: {
    position: 'fixed',
    left: 5,
    top: 10,
    zIndex: 1002
  }
})

const Content = ({ data }: TemplateProps): React.ReactElement => {
  const pre =
    data.doc.frontmatter.type === 'hooks' || data.doc.frontmatter.type === 'getting-started'
      ? Highlight
      : Playground

  const mobileMenuDispatch = useDispatch({
    type: 'navigation/expand',
    payload: (v: boolean): boolean => !v
  })

  const classes = useContentStyles()

  return (
    <>
      <SideBar data={data} />
      <Box
        id="contentRoot"
        flex={1}
        boxShadow="2"
        position="relative"
        zIndex={2}
        style={{
          overflowX: 'hidden',
          overflowY: 'auto',
          transition: 'all 250ms cubic-bezier(0.4,0,0.2,1) 0ms'
        }}
      >
        <EditPage data={data} />
        <Box className={classes.menuButton} display={['block', 'none']}>
          <IconButton onClick={mobileMenuDispatch}>{<MenuLineIcon />}</IconButton>
        </Box>
        <Box padding="4" minHeight="100%" backgroundColor="white.default">
          <Markdown
            // @ts-ignore
            options={{
              slugify: (str: string): string => toLine(str),
              overrides: {
                pre,
                IconTemplate,
                ColorTemplate,
                ColorTool,
                BgTool,
                ThemeTemplate,
                ...typographyOverrides
              }
            }}
          >
            {data.doc.rawMarkdownBody}
          </Markdown>
          {data.api && (
            <Markdown
              options={{
                slugify: (str: string): string => str,
                // @ts-ignore
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
          )}
        </Box>
      </Box>
    </>
  )
}

export default Content
