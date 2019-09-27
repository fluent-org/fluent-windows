import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Box, Theme, Typography } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { TemplateProps } from '../../templates/docs'
import { toLine } from '../../utils'
import { Styles } from 'jss'

type Classes = 'sideBar' | 'subTitle'
const useStyles = createUseStyles<Theme, Classes>(
  (theme: Theme): Styles => ({
    sideBar: {
      position: 'fixed',
      top: 114,
      right: -80,
      zIndex: '100 !important',
      transition: theme.transitions!.default,
      '&:hover': {
        right: 0
      }
    },
    subTitle: {
      textDecoration: 'none',
      marginTop: 4,
      color: theme.colors!.standard!.dark1,
      transition: theme.transitions!.default,
      cursor: 'pointer',
      '&:hover': {
        color: theme.colors!.standard!.dark3
      }
    }
  })
)

interface SidebarProps {
  data: TemplateProps['data']
}

const SideBar: React.FC<SidebarProps> = ({ data }): React.ReactElement => {
  const [title] = data.doc.htmlAst.children.filter((element): boolean => element.tagName === 'h1')
  const subtitles = data.doc.htmlAst.children.filter((element): boolean => element.tagName === 'h2')

  const classes = useStyles()
  return (
    <div className={classes.sideBar}>
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
                <Typography
                  className={classes.subTitle}
                  key={value}
                  variant="body2"
                  as="a"
                  href={`#${toLine(value)}`}
                >
                  {value}
                </Typography>
              )
            }
          )}
        </Box>
      </Box>
    </div>
  )
}

SideBar.propTypes = {
  data: PropTypes.any.isRequired
}

export default SideBar
