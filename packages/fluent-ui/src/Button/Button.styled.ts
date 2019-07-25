import { styled, css, variant, th } from '../styles/styled'
import { ButtonProps } from './Button.type'

const base = css`
  display: inline-block;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  min-width: 56px;
  vertical-align: middle;
  border: 2px solid;
  border-radius: 2px;
  text-align: center;
  line-height: 1.5;
  transition: ${th.transition('button')};
  &:disabled {
    color: ${th.color('standard.dark2')};
    background-color: ${th.color('standard.light1')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'standard',
  variants: {
    standard: css`
      color: ${th.color('black.default')};
      background-color: ${th.color('white.default')};
      border-color: ${th.color('standard.default')};
      &:hover,
      &:focus {
        border-color: ${th.color('standard.dark1')};
      }
      &:active {
        background-color: ${th.color('standard.default')};
        border-color: ${th.color('standard.dark3')};
      }
    `,
    primary: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('primary.default')};
      border-color: ${th.color('primary.default')};
      box-shadow: ${th.shadow(1)};
      &:hover,
      &:focus {
        background-color: ${th.color('primary.dark1')};
        border-color: ${th.color('primary.dark1')};
      }
      &:active {
        background-color: ${th.color('primary.dark3')};
        border-color: ${th.color('primary.dark3')};
        box-shadow: ${th.shadow(3)};
      }
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
