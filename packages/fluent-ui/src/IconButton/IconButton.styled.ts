import { styled, th, css, variant } from '../styles/styled'
import { IconButtonProps } from './IconButton'

const base = css`
  border: none;
  outline: none;
  line-height: 1;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;
  background-color: transparent;
  transition: ${th.transition('button')};
  &:hover {
    background-color: ${th.color('standard.light2')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${th.color('standard.default')};
  }
  &:disabled {
    color: ${th.color('standard.dark3')};
    background-color: ${th.color('standard.default')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'standard',
  variants: {
    standard: css``,
    primary: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('primary.default')};
      &:hover {
        background-color: ${th.color('primary.dark1')};
      }
      &:active {
        color: ${th.color('white.default')};
        background-color: ${th.color('primary.default')};
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
