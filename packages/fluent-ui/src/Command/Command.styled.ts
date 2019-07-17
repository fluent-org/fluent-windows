import { styled, th } from '../styles/styled'
import Box from '../Box'

export const StyledContainer = styled(Box).attrs(
  (props): any => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)`
  display: flex;
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

export const StyledSecondaryContainer = styled(Box).attrs({
  backgroundColor: th.color('standard.light2')
})`
  display: flex;
  flex-direction: column;
  width: 130px;
`
