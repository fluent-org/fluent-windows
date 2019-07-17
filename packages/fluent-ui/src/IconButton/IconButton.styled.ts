import { styled, th, css, variant, lighten } from '../styles/styled'
import { IconButtonProps } from './IconButton'

const base = css`
  border: none;
  outline: none;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;
  border-radius: 50%;
  overflow: hidden;
  transition: ${th.transition('button')};
  &:disabled {
    color: ${th.color('standard.dark3')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'standard',
  variants: {
    standard: css`
      color: ${th.color('primary.default')};
      background-color: transparent;
      &:hover,
      &:focus {
        background-color: ${lighten('primary.light1', 0.08)};
      }
      &:active {
        background-color: ${lighten('primary.light1', 0.36)};
      }
    `,
    primary: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('primary.default')};
      box-shadow: ${th.shadow(1)};
      &:hover,
      &:focus {
        background-color: ${th.color('primary.dark1')};
      }
      &:active {
        color: ${th.color('white.default')};
        background-color: ${th.color('primary.dark3')};
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
      ${th.size('small.iconButton')}
    `,
    medium: css`
      ${th.size('medium.iconButton')}
    `,
    large: css`
      ${th.size('large.iconButton')}
    `
  }
})

export const IconButtonStyled = styled.button<IconButtonProps>`
  ${base}
  ${variants}
  ${sizes}
`
