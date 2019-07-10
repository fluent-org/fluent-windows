import { styled, th } from '../styles/styled'
import * as CSS from 'csstype'

export const CommandButtonStyled = styled.button<{
  reveal?: boolean
}>`
  border: none;
  outline: none;
  padding: 10px 22px;
  line-height: 1;
  transition: ${th.transition('button')};
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('primary.light2') : 'transparent'};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('primary.light1') : th.color('primary.transparent1')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('primary.dark1') : th.color('primary.transparent2')};
  }
`

export const CommandButtonTextStyled = styled.div<{
  hasIcon?: boolean
}>`
  font-size: 12px;
  margin-top: ${({ hasIcon }): string => (hasIcon ? '6px' : '0')};
  text-overflow: ellipsis;
  overflow: hidden;
`
