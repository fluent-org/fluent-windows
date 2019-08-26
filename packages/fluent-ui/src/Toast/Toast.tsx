import * as React from 'react'
import { StyledToast, StyledToastContainer, StyledToastActions } from './Toast.styled'
import Portal from '../Portal'
import Transition from '../Transition'
import { ToastProps, ToastPropTypes } from './Toast.type'

const Toast: React.FC<ToastProps> = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ children, visible = false, actions, placement = 'top', ...rest }, ref): React.ReactElement => {
    return (
      <Portal>
        <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <StyledToast
            ref={ref}
            width={{ xs: '288px', sm: 'auto' }}
            minWidth={{ xs: '288px', sm: '340px' }}
            placement={placement}
            {...rest}
          >
            <StyledToastContainer>{children}</StyledToastContainer>
            <StyledToastActions>{actions}</StyledToastActions>
          </StyledToast>
        </Transition>
      </Portal>
    )
  }
)

Toast.displayName = 'FToast'

Toast.propTypes = ToastPropTypes

export default Toast
