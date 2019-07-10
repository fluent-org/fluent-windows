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
    background-color: ${th.color('primary.light2')};
  }
  &:active {
    color: ${th.color('black.default')};
    background-color: ${th.color('primary.default')};
  }
  &:disabled {
    color: ${th.color('primary.dark3')};
    background-color: ${th.color('primary.default')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const variants = variant({
  prop: 'variant',
  default: 'primary',
  variants: {
    primary: css``,
    accent: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('accent.default')};
      &:hover {
        background-color: ${th.color('accent.dark1')};
      }
      &:active {
        color: ${th.color('white.default')};
        background-color: ${th.color('accent.default')};
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
