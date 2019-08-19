import { styled, th, variant, css } from '../styles/styled'
import Box from '../Box'
import { Placement } from './Toast.type'

const baseSpace = 24
const placement = variant({
  prop: 'placement',
  default: 'top',
  variants: {
    'top-start': css`
      top: ${baseSpace}px;
      left: ${baseSpace}px;
      right: auto;
    `,
    top: css`
      top: ${baseSpace}px;
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `,
    'top-end': css`
      top: ${baseSpace}px;
      left: auto;
      right: ${baseSpace}px;
    `,
    'bottom-start': css`
      bottom: ${baseSpace}px;
      left: ${baseSpace}px;
      right: auto;
    `,
    bottom: css`
      bottom: ${baseSpace}px;
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    `,
    'bottom-end': css`
      bottom: ${baseSpace}px;
      left: auto;
      right: ${baseSpace}px;
    `,
    center: css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  }
})

export const StyledToast = styled(Box)<{ placement: Placement }>`
  background-color: white;
  box-shadow: 0px 6.4px 14.4px 0px rgba(0, 0, 0, 0.132), 0px 1.2px 3.6px 0px rgba(0, 0, 0, 0.108);

  position: fixed;
  z-index: 1001;
  background-color: ${th.color('white.default')};
  box-shadow: ${th.shadow('3')};
  border-radius: 2px;
  padding: 6px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${placement}
`

export const StyledToastContainer = styled.div`
  padding: 8px 0;
  line-height: 1.5;
  flex: 1;
`

export const StyledToastActions = styled.div``