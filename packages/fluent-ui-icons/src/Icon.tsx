import React, { forwardRef, ReactElement, Ref } from 'react'
import styled from 'styled-components'
import * as Icons from './element'
import { omit } from './utils'

interface IconProps {
  type: string
}

const SvgIconStyled = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-block;
  user-select: none;
  font-size: 1.5rem;
  color: inherit;
  fill: currentColor;
`

const Icon = forwardRef<{}, IconProps>(
  ({ type }: IconProps, ref: Ref<any>): ReactElement => {
    const vdom = (Icons as any)[type]
    return (
      <SvgIconStyled ref={ref} {...omit(vdom.props, ['children'])}>
        <path {...vdom.props.children.props} />
      </SvgIconStyled>
    )
  }
)

Icon.displayName = 'FIcon'

export default Icon
