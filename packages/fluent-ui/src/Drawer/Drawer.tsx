import * as React from 'react'
import { usePortal } from '@fluent-ui/hooks'
import Transition from '../Transition'
import { StyledDrawer, StyledMask, createSwipe } from './Drawer.styled'
import { DrawerProps } from './Drawer.type'

const Drawer = ({
  children,
  visible,
  onChange,
  anchor = 'left'
}: DrawerProps): React.ReactElement => {
  const { Portal } = usePortal({ defaultVisible: true })
  function handleClose(): void {
    onChange && onChange(false)
  }

  return (
    <>
      <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
        <Portal>
          <StyledMask onClick={handleClose} />
        </Portal>
      </Transition>
      <Transition
        type="custom"
        custom={createSwipe(anchor)}
        visible={visible}
        wrapper={false}
        mountOnEnter
        unmountOnExit
      >
        <Portal>
          <StyledDrawer anchor={anchor}>{React.cloneElement(children)}</StyledDrawer>
        </Portal>
      </Transition>
    </>
  )
}

Drawer.displayName = 'FDrawer'

export default Drawer
