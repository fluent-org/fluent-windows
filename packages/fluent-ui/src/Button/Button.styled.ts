import styled, { css } from '@xstyled/styled-components'
import { variant, th } from '@xstyled/system'
import { ButtonProps } from './Button'

const base = css`
  outline: none;
  cursor: pointer;
  min-width: 64px;
  line-height: 1;
  transition: ${th.transition('button')};
  border: 2px solid transparent;
  font-family: ${th.font('button')};
  &:hover {
    border-color: primary.6;
  }
  &:active {
    color: black;
    background-color: primary.6;
    border-color: transparent;
  }
  &:disabled {
    color: primary.6;
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'primary',
  variants: {
    primary: css`
      color: black;
      background-color: primary.3;
    `,
    accent: css`
      color: white;
      background-color: accent.3;
    `
  }
})

const sizes = variant({
  prop: 'size',
  default: 'medium',
  variants: {
    small: css`
      ${th.size('small')}
    `,
    medium: css`
      ${th.size('medium')}
    `,
    large: css`
      ${th.size('large')}
    `
  }
})

const StyledButton = styled.button<ButtonProps>`
  ${base}
  ${variants}
  ${sizes}
`

export default StyledButton
