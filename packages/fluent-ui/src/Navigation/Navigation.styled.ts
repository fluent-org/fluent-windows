import { styled, th } from '../styles/styled'
import Box from '../Box'
import { BoxProps } from '../Box/Box'

interface StyledContainerProps extends BoxProps {
  horizontal?: boolean
  expanded: boolean
}

export const StyledContainer = styled(Box).attrs(
  (props): any => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)<StyledContainerProps>`
  display: flex;
  flex-direction: ${({ horizontal }: StyledContainerProps): string =>
    horizontal ? 'row' : 'column'};
  justify-content: space-between;
  ${({ horizontal, expanded }): string =>
    horizontal ? `max-height: 40px` : `max-width: ${expanded ? '260px' : '40px'}`};
  transition: ${th.transition('navigation')};
`

export const StyledHeader = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }): string => (horizontal ? 'row' : 'column')};
`

export const StyledFooter = styled.div<{ horizontal?: boolean }>`
  display: flex;
  flex-direction: ${({ horizontal }): string => (horizontal ? 'row' : 'column')};
`

export const StyledContent = styled.div<{ horizontal?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: ${({ horizontal }): string => (horizontal ? 'row' : 'column')};
  overflow-x: hidden;
  overflow-y: auto;
`
