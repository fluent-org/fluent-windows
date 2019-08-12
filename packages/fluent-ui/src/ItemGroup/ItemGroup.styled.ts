import Box from '../Box'
import { styled, th, variant, css } from '../styles/styled'
import { StyledItemWrapper } from '../Item/Item.styled'

export const StyledItemGroupTitleWrapper = styled.div<{
  active: boolean
  float?: boolean
  horizontal?: boolean
}>`
  position: relative;
  color: ${({ active }): string => (active ? th.color('primary.default') : 'inherit')};
  & > ${StyledItemWrapper} {
    ${({ float, horizontal }): string => (horizontal && float ? `padding-right: 36px;` : '')}
  }
`

export const StyledItemGroupTitleIconWrapper = styled.div<{
  open: boolean
  expanded: boolean
  acrylic: boolean
  float?: boolean
  horizontal?: boolean
}>`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  top: 50%;
  cursor: pointer;
  margin-top: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  transition: ${th.transition('navigation')};
  ${({ open, float }): string => (!float ? `transform: rotate(${open ? 180 : 0}deg);` : '')}
  z-index: ${({ acrylic }): number => (acrylic ? -1 : 1)};
  opacity: ${({ expanded, horizontal }): number => (!horizontal ? (expanded ? 1 : 0) : 1)}
`

export const StyledItemGroupItemWrapper = styled(Box).attrs(
  (props): any => ({
    backgroundColor: props.acrylic && th.color('standard.light2').call(undefined, props)
  })
)<{ level: number; float?: boolean }>`
  overflow: visible;
  box-shadow: ${th.shadow('3')};
  z-index: 9999;
  ${StyledItemWrapper} {
    ${variant({
      prop: 'float',
      default: 'false',
      variants: {
        true: css`
          padding-right: 40px;
        `,
        false: css`
          padding-left: ${({ level }: any): number => (level ? 40 + level * 12 : 0)}px;
        `
      }
    })}
  }
`
