import * as React from 'react'
import Portal from '../Portal'
import Transition from '../Transition'
import { StyledDrawer, StyledMask, createSwipe } from './Drawer.styled'
import { DrawerProps, DrawerPropTypes } from './Drawer.type'

const Drawer: React.FC<DrawerProps> = React.forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, visible, onChange, anchor = 'left', ...rest }, ref): React.ReactElement => {
    function handleClose(): void {
      onChange && onChange(false)
    }

    return (
      <>
        <Portal>
          <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
            <StyledMask onClick={handleClose} />
          </Transition>
        </Portal>
        <Portal>
          <Transition
            type="custom"
            custom={createSwipe(anchor)}
            visible={visible}
            wrapper={false}
            mountOnEnter
            unmountOnExit
          >
            <StyledDrawer anchor={anchor} ref={ref} {...rest}>
              {React.cloneElement(children)}
            </StyledDrawer>
          </Transition>
        </Portal>
      </>
    )
  }
)

Drawer.displayName = 'FDrawer'

Drawer.propTypes = DrawerPropTypes

export default Drawer
