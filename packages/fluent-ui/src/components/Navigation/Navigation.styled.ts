import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import Box from '../Box'
import { BoxProps } from '../Box/Box'

interface StyledContainerProps extends BoxProps {
  expanded: boolean
}

export const StyledContainer = styled(Box)<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ backgroundColor }: StyledContainerProps): string =>
    backgroundColor ? `background-color: ${backgroundColor}` : ''};
  max-width: ${({ expanded }: StyledContainerProps): string =>
    expanded ? '260px' : '40px'};
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
