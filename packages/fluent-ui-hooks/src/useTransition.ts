import * as React from 'react'
import { usePortal, Return } from './usePortal'

interface Param {
  defaultVisible: boolean
  animationType?: string
  mountOnEnter?: boolean
  unmountOnExit?: boolean
}

interface PortalProps {
  children: React.ReactNode
  style?: object
}

export function useTransition({
  defaultVisible = false,
  animationType,
  mountOnEnter,
  unmountOnExit
}: Param): Return {
  const [visible, setVisible, Portal] = usePortal(defaultVisible)
  return [visible, setVisible, Portal]
}
