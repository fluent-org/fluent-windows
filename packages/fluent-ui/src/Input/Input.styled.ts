import { styled, css, variant, th } from '../styles/styled'
import { InputProps } from './Input'

export const StyledWrapper = styled.span`
  display: inline-block;
  position: relative;
  min-width: 200px;
  font: inherit;
`

const base = css`
  outline: none;
  font: inherit;
  width: 100%;
  border-radius: 2px;
  border: 2px solid;
  border-color: ${th.color('standard.default')};
  transition: ${th.transition('input')};
  ${th.size('medium.input')};
  &:hover {
    border-color: ${th.color('standard.dark1')};
  }
  &:active,
  &:focus {
    border-color: ${th.color('primary.default')};
  }
  &:disabled {
    color: ${th.color('standard.dark2')};
    background-color: ${th.color('standard.light1')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const cleared = variant({
  prop: 'cleared',
  default: false,
  variants: {
    true: css`
      padding-right: ${({ clearedHeight }: StyledInputProps): string => `${clearedHeight}px`};
    `,
    false: css``
  }
})

interface StyledInputProps extends Omit<InputProps, 'onChange'> {
  clearedHeight: number
}

export const StyledInput = styled.input<StyledInputProps>`
  ${base}
  ${cleared}
`

export const StyledIcon = styled.span<{ clearedHeight: number }>`
  width: ${({ clearedHeight }): string => `${clearedHeight}px`};
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: ${th.transition('input')};
  &:hover {
    background-color: ${th.color('primary.default')};
    color: ${th.color('white.default')};
  }
`
