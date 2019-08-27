import { styled, th } from '../styles/styled'
import Box from '../Box'

export const StyledCommandWrapper = styled(Box).attrs(
  (props): object => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)`
  display: flex;
  overflow: hidden;
`

export const StyledContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-right: 5px;
`

export const StyledPrimary = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const StyledSecondaryContainer = styled(Box).attrs(
  (props): object => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)`
  display: flex;
  flex-direction: column;
  width: 130px;
  z-index: 1001;
`
