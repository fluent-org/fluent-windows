import * as CSS from 'csstype'
import { styled, th } from '../styles/styled'
import Box from '../Box'
import Typography from '../Typography'

export const StyledListWrapper = styled(Box)<{ reveal?: boolean }>`
  width: 100%;
  max-width: 360px;
  padding: 8px 0;
  box-shadow: ${th.shadow('2')};
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('standard.light2') : th.color('white.default')};
`

export const StyledListTitle = styled(Typography)`
  padding: 0 12px 6px;
  position: sticky;
  top: 0;
  z-index: 1;
  font-weight: 500;
  color: ${th.color('standard.transparent3')};
`
