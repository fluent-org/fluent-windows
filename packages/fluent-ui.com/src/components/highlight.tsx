import * as React from 'react'
import classNames from 'classnames'
import { IconButton, Typography } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { ClipboardLine as ClipboardLineIcon } from '@fluent-ui/icons' // TODO tree-shaking
import HighlightBase, { defaultProps } from 'prism-react-renderer'
// @ts-ignore
import CopytoClipboard from 'react-copy-to-clipboard'
import { theme } from '../utils/theme'

interface HighlightProps {
  children: string | React.ReactElement
}

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    padding: '1.2em 1em',
    backgroundColor: '#f6f8fa',
    '-webkit-overflow-scrolling': 'touch',
    '& > pre': {
      margin: 0,
      overflowX: 'auto'
    },
    '&:hover': {
      '& .copy': {
        opacity: 1
      }
    }
  },
  lang: {
    position: 'absolute',
    left: '1.2em',
    top: 0,
    backgroundColor: '#ddd',
    borderRadius: '0 0 4px 4px',
    padding: '0 0.5em',
    letterSpacing: '0.075em',
    textTransform: 'uppercase',
    fontSize: '0.75rem'
  },
  copy: {
    position: 'absolute',
    right: 6,
    top: 6,
    opacity: 0,
    transition: 'opacity 250ms linear'
  }
})

const Highlight: React.FC<HighlightProps> = ({ children }: HighlightProps): React.ReactElement => {
  const code = typeof children === 'string' ? children : children.props.children
  const lang =
    typeof children === 'string'
      ? 'js'
      : (children as React.ReactElement).props.className
      ? (children as React.ReactElement).props.className.split('-')[1]
      : 'js'

  const classes = useStyles()

  return (
    <HighlightBase {...defaultProps} code={code} language={lang} theme={theme}>
      {({
        className: classNameProp,
        style,
        tokens,
        getLineProps,
        getTokenProps
      }): React.ReactElement => {
        const className = classNames(classes.root, classNameProp)
        return (
          <div className={className}>
            <Typography className={classes.lang} as="div">
              {lang}
            </Typography>
            <Typography as="pre" style={style}>
              {tokens.map(
                (line, i): React.ReactElement => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map(
                      (token, key): React.ReactElement => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      )
                    )}
                  </div>
                )
              )}
            </Typography>
            <CopytoClipboard text={code}>
              <IconButton className={classes.copy} variant="standard" size="small">
                <ClipboardLineIcon />
              </IconButton>
            </CopytoClipboard>
          </div>
        )
      }}
    </HighlightBase>
  )
}

export default Highlight
