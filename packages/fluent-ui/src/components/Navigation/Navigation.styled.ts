import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'

export const StyledContainer = (styled as any).box`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ backgroundColor }: any): string => backgroundColor};
  max-width: ${({ expanded }: any): string => (expanded ? '260px' : '40px')};
  transition: ${th.transition('navigation')};
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
