import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'

export type Children = [string, any]
export type JSX = ['svg', any, Children]

const useStyles = createUseStyles({
  icon: {
    width: '1em',
    height: '1em',
    display: 'inline-block',
    userSelect: 'none',
    fontSize: 'inherit',
    color: 'inherit',
    fill: 'currentColor'
  }
})

function createIcon(jsx: JSX, componentName: string): React.FC {
  const [type, props, children] = jsx
  const Icon: React.FC = ({ className: classNameProp, ...rest }: any): React.ReactElement => {
    const classes = useStyles()
    const className = classNames(classes.icon, classNameProp)
    return React.createElement(
      type,
      { ...props, ...rest, className },
      React.createElement(...children)
    )
  }
  Icon.displayName = `FIcon${componentName}`
  return Icon
}

export default createIcon
