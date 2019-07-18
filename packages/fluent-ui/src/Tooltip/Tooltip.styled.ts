import { styled, th, lighten } from '../styles/styled'

export const StyledTooltip = styled.div`
  background-color: ${lighten('black.default', 0.6)};
  color: ${th.color('white.default')};
  font-family: ${th.font('default')};
  font-size: 0.625rem;
  font-weight: 500;
  padding: 4px 8px;
  max-width: 320px;
  border-radius: 2px;
`
