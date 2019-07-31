import { styled, th, lighten } from '../styles/styled'

export const StyledTooltip = styled.div`
  background-color: ${lighten('black.default', 0.6)};
  color: ${th.color('white.default')};
  font-size: 0.625rem;
  font-weight: 500;
  padding: 4px 8px;
  margin: 6px 0;
  max-width: 320px;
  border-radius: 2px;
  z-index: 1001;
`
