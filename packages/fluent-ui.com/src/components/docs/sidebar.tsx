import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Box, Typography } from '@fluent-ui/core'
import styled from 'styled-components'
import { TemplateProps } from './template'
import { th } from '@fluent-ui/core'
import { scrollToAnchor } from '../../utils/scroll'

const StyledSideBarRoot = styled.div`
  position: fixed;
  top: 114px;
  right: -80px;
  z-index: 100 !important;
  transition: ${th.transition('default')};
  &:hover {
    right: 0;
  }
`
const StyledSubTitle = styled(Typography)`
  text-decoration: none;
  margin-top: 4px;
  color: ${th.color('standard.dark1')};
  transition: ${th.transition('default')};
  cursor: pointer;
  &:hover {
    color: ${th.color('standard.dark3')};
  }
`

interface SidebarProps {
  data: TemplateProps['data']
}

function toLine(name: string) {
  return name
    .replace(/(\s+)/g, '-$1') // Turn hump
    .replace(/\s+/g, '') // Remove spaces
    .toLowerCase()
}

const SideBar: React.FC<SidebarProps> = ({ data }): React.ReactElement => {
  const [title] = data.doc.htmlAst.children.filter((element): boolean => element.tagName === 'h1')
  const subtitles = data.doc.htmlAst.children.filter((element): boolean => element.tagName === 'h2')
  return (
    <StyledSideBarRoot>
      <Box
        acrylic
        as="nav"
        boxShadow="2"
        width={120}
        padding="16px 0 16px 16px"
        borderRadius={4}
        overflow="hidden"
      >
        <Typography
          variant="body1"
          gutterBottom
          as="a"
          href={`#${toLine(title.children[0].value)}`}
          color="black.default"
        >
          {title.children[0].value}
        </Typography>
        <Box display="flex" flexDirection="column">
          {subtitles.map(
            (t): React.ReactElement => {
              const value = t.children[0].value
              return (
                <StyledSubTitle
                  key={value}
                  variant="body2"
                  as="a"
                  href={`#${toLine(value)}`}
                  onClick={(e: any) => {
                    e.preventDefault()
                    const target = document.querySelector('#contentRoot')
                    scrollToAnchor(`#${toLine(value)}`, target)
                  }}
                >
                  {value}
                </StyledSubTitle>
              )
            }
          )}
        </Box>
      </Box>
    </StyledSideBarRoot>
  )
}

SideBar.propTypes = {
  data: PropTypes.any.isRequired
}

export default SideBar
