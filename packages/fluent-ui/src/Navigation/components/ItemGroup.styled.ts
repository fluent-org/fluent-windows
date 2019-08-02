import { styled, th } from '../../styles/styled'
import { StyledItemWrapper } from './Item.styled'

export const StyledItemGroupWrapper = styled.div``

export const StyledItemGroupTitleWrapper = styled.div<{ active: boolean }>`
  position: relative;
  color: ${({ active }): string => (active ? th.color('primary.default') : 'inherit')};
`

export const StyledItemGroupTitleIconWrapper = styled.div<{
  open: boolean
  expanded: boolean
  acrylic: boolean
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
  transform: rotate(${({ open }): number => (open ? 180 : 0)}deg);
  z-index: ${({ acrylic }): number => (acrylic ? -1 : 1)};
  opacity: ${({ expanded }): number => (expanded ? 1 : 0)};
`

export const StyledItemGroupItemWrapper = styled.div<{ level: number }>`
  ${StyledItemWrapper} {
    padding-left: ${({ level }): number => (level ? 40 + level * 12 : 0)}px;
  }
`
