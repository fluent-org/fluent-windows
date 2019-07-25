import styled from 'styled-components'

export const StyledTitleA = styled.a`
  color: inherit;
  text-decoration: none;
  position: relative;
  &::after {
    content: '#';
    display: inline-block;
    padding-left: 0.25em;
    color: rgba(0, 0, 0, 0.25);
    visibility: hidden;
    transition: all 250ms ease-in-out;
  }
  &:hover {
    &::after {
      visibility: visible;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`
