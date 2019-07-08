import styled, { css } from '@xstyled/styled-components'
import { variant, th } from '@xstyled/system'
import { InputProps } from './Input'

export const StyledWrapper = styled.span`
  display: inline-block;
  position: relative;
`

const inputSize = 32

const base = css`
  outline: none;
  width: 296px;
  height: ${inputSize}px;
  line-height: ${inputSize}px;
  font-size: 14px;
  padding: 6px 12px;
  font-family: ${th.font('input')};
  border: 2px solid ${th.color('primary.default')};
  transition: ${th.transition('input')};
  &:hover {
    border-color: ${th.color('primary.dark3')};
  }
  &:active,
  &:focus {
    border-color: ${th.color('accent.default')};
  }
  &:disabled {
    background-color: ${th.color('primary.default')};
    color: ${th.color('primary.dark3')};
    cursor: not-allowed;
    pointer-events: none;
  }
`

const cleared = variant({
  prop: 'cleared',
  default: false,
  variants: {
    true: css`
      padding-right: ${inputSize + 12}px;
    `,
    false: css``
  }
})

export const StyledInput = styled.input<Omit<InputProps, 'onChange'>>`
  ${base}
  ${cleared}
`

export const StyledIcon = styled.span`
  width: ${inputSize}px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: ${th.transition('default')};
  &:hover {
    background-color: ${th.color('accent.default')};
    color: ${th.color('white.default')};
  }
`
