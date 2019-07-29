import { styled, th } from '../styles/styled'
import Box from '../Box'

export const StyledDialogMask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${th.color('standard.transparent2')};
`

export const StyledDialog = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1001;
  transform: translate(-50%, -50%);
  background-color: ${th.color('white.default')};
  border-radius: 2px;
  padding: 16px 24px 24px;
`

export const StyledDialogTitle = styled(Box)`
  display: flex;
  justify-content: space-between;
`
export const StyledDialogContent = styled(Box)`
  margin-top: 16px;
  min-height: 40px;
`
export const StyledDialogActions = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  > * {
    margin: 0 4px;
    &:last-child {
      margin-right: 0;
    }
  }
`
