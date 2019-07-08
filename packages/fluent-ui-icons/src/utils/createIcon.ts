import * as React from 'react'
import styled from 'styled-components'

export type Children = [string, any]
export type JSX = ['svg', any, Children]

function createIcon(jsx: JSX, componentName: string): React.ForwardRefExoticComponent<{}> {
  const [type, props, children] = jsx
  function Icon(_props: any): any {
    return React.createElement(type, { ...props, ..._props }, React.createElement(...children))
  }
  const SvgIconStyled = styled(Icon)`
    width: 0.83em;
    height: 0.83em;
    display: inline-block;
    user-select: none;
    font-size: inherit;
    color: inherit;
    fill: currentColor;
  `
  SvgIconStyled.displayName = componentName
  return SvgIconStyled
}

export default createIcon
