import * as CSS from 'csstype'
import { styled, css, variant, th } from '../styles/styled'
import Box from '../Box'

export const StyledItemWrapper = styled(Box)<{
  reveal: boolean
}>`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  transition: ${th.transition('navigation')};
  color: inherit;
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('standard.light2') : 'transparent'};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('standard.light1') : th.color('standard.transparent1')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('standard.dark1') : th.color('standard.transparent2')};
  }
`
export const StyledItemActiveBar = styled.div<{
  active: boolean
  horizontal: boolean
}>`
  position: absolute;
  background-color: ${th.color('primary.default')};
  transition: ${th.transition('navigation')};
  ${variant({
    prop: 'horizontal',
    variants: {
      true: css`
        width: 80%;
        height: 4px;
        left: 10%;
        bottom: 0;
      `,
      false: css`
        width: 6px;
        height: 24px;
        left: 0;
        top: 50%;
        margin-top: -12px;
      `
    }
  })}
  ${variant({
    prop: 'active',
    variants: {
      true: css`
        transform: scale3d(1, 1, 1);
      `,
      false: css`
        transform: scale3d(0, 0, 0);
      `
    }
  })}
`
export const StyledItemPrefixWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${th.transition('navigation')};
`
export const StyledItemTextWrapper = styled.div<{ expanded: boolean; hasPrefix: boolean }>`
  width: ${({ expanded }): string => (expanded ? 'auto' : '0px')};
  opacity: ${({ expanded }): number => (expanded ? 1 : 0)};
  padding-left: ${({ children, expanded, hasPrefix }): string =>
    children ? (expanded ? (hasPrefix ? '12px' : '0px') : '0px') : '0px'};
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  transition: ${th.transition('navigation')};
  font-size: 14px;
`
