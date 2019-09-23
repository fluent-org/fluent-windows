import * as React from 'react'
import classNames from 'classnames'
import { IconButton } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { ClipboardLine as ClipboardLineIcon } from '@fluent-ui/icons' // TODO tree-shaking
import HighlightBase, { defaultProps } from 'prism-react-renderer'
// @ts-ignore
import CopytoClipboard from 'react-copy-to-clipboard'
import { theme } from '../utils/theme'

interface HighlightProps {
  children: string
}

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    padding: 16,
    backgroundColor: '#f5f5f5',
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    '& > pre': {
      margin: 0
    },
    '&:hover': {
      '& .copy': {
        opacity: 1
      }
    }
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
  // @ts-ignore
  const code = typeof children === 'string' ? children : children.props.children

  const classes = useStyles()

  return (
    <HighlightBase {...defaultProps} code={code} language="jsx" theme={theme}>
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
            <pre style={style}>
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
            </pre>
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
