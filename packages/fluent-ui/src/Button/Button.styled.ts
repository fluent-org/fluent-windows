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
    border-color: ${th.color('border')};
  }
  &:active {
    color: black;
    background-color: border;
    border-color: transparent;
  }
  &:disabled {
    color: border;
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
      background-color: primary;
    `,
    accent: css`
      color: white;
      background-color: accent;
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
