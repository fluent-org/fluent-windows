import * as React from 'react'
import HighlightBase, { defaultProps } from 'prism-react-renderer'
import { theme } from '../utils/theme'

interface HighlightProps {
  children: string
}

const Highlight: React.FC<HighlightProps> = ({ children }: HighlightProps): React.ReactElement => {
  // @ts-ignore
  const code = children.props.children
  return (
    <HighlightBase {...defaultProps} code={code} language="jsx" theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }): React.ReactElement => (
        // @ts-ignore
        <pre
          css={`
            padding: 16px;
            background-color: #f5f5f5;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
          `}
          className={className}
          style={style}
        >
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
      )}
    </HighlightBase>
  )
}

export default Highlight
