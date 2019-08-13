import { styled, th, variant, css, keyframes } from '../styles/styled'

export const StyledProgressWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 4px;
  background-color: ${th.color('standard.default')};
`

const indeterminateProgress = keyframes`
  from {
    transform: translateX(-130%);
  }
  to {
    transform: translateX(100%);
  }
`

const isIndeterminate = variant({
  prop: 'isIndeterminate',
  default: false,
  variants: {
    true: css`
      background: linear-gradient(
        to right,
        ${th.color('standard.default')} 0%,
        ${th.color('primary.default')} 50%,
        ${th.color('standard.default')} 100%
      );
      animation: ${indeterminateProgress} 2.6s infinite;
    `,
    false: css`
      background: ${th.color('primary.default')};
      transition: transform 0.43s linear;
    `
  }
})

export const StyledProgress = styled.div<{ isIndeterminate: boolean }>`
  width: 100%;
  transform-origin: left;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;

  ${isIndeterminate}
`
