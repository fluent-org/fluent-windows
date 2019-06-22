import styled from '@xstyled/styled-components'

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

export const RevealButtonWrapper = styled.div.attrs({
  className: 'fluent_reveal_button'
})`
  margin: 1px;
  padding: 1px;
`
