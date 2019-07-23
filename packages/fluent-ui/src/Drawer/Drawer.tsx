import * as React from 'react'
import { usePortal } from '@fluent-ui/hooks'
import Transition from '../Transition'
import { StyledDrawer, StyledMask } from './Drawer.styled'
import { createSwipe } from './Drawer.styled'

export interface DrawerProps {
  children: React.ReactElement
  visible: boolean
  onChange?: (visible: boolean) => void
  anchor?: 'left' | 'top' | 'right' | 'bottom'
}

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