/* eslint-disable prettier/prettier */
import { styled, th, css, variant, keyframes } from '../styles/styled'
import { SpinnerProps } from './Spinner.type'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const base = css`
  display: inline-block;
  border-radius: 50%;
  border-width: 1.5px;
  border-style: solid;
  border-color: ${th.color('primary.default')} ${th.color('primary.light3')}
    ${th.color('primary.light3')};
  animation-name: ${rotate};
  animation-duration: 1.3s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.5, 0.2, 0.3, 0.65);
`

const size = variant({
  prop: 'size',
  default: 'medium',
  variants: {
    small: css`
      width: 16px;
      height: 16px;
    `,
    medium: css`
      width: 20px;
      height: 20px;
    `,
    large: css`
      width: 28px;
      height: 28px;
    `
  }
})

export const StyledSpinner = styled.div<SpinnerProps>`
  ${base}
  ${size}
`

const labelPosition = variant({
  prop: 'labelPosition',
  default: 'bottom',
  variants: {
    top: css`
      flex-direction: column;
    `,
    bottom: css`
      flex-direction: column-reverse;
    `,
    left: css`
      flex-direction: row;
    `,
    right: css`
      flex-direction: row-reverse;
    `
  }
})

export const StyledSpinnerWrapper = styled.div<SpinnerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${labelPosition}
`
