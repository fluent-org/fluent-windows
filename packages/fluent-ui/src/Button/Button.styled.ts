import { styled, css, variant, th } from '../styles/styled'
import { ButtonProps } from './Button'

const base = css`
  display: inline-block;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  min-width: 64px;
  line-height: 1;
  transition: ${th.transition('button')};
  border: 2px solid transparent;
  font-family: ${th.font('button')};
  &:hover {
    border-color: ${th.color('primary.dark3')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${th.color('primary.dark3')};
    border-color: transparent;
  }
  &:disabled {
    color: ${th.color('primary.dark3')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'primary',
  variants: {
    primary: css`
      color: ${th.color('black.default')};
      background-color: ${th.color('primary.default')};
    `,
    accent: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('accent.default')};
    `
  }
})

const sizes = variant({
  prop: 'size',
  default: 'medium',
  variants: {
    small: css`
      ${th.size('small.button')}
    `,
    medium: css`
      ${th.size('medium.button')}
    `,
    large: css`
      ${th.size('large.button')}
    `
  }
})

const StyledButton = styled.button<ButtonProps>`
  ${base}
  ${variants}
  ${sizes}
`

export default StyledButton
