import * as React from 'react'
import { createPortal } from 'react-dom'

export type Visible = boolean
export type Set = React.Dispatch<React.SetStateAction<boolean>>
export type Portal = (props: PortalProps) => React.ReactPortal
export type Return = [Visible, Set, Portal]

interface PortalProps {
  children: React.ReactNode
  style?: object
}

export function usePortal(defaultVisible = false): Return {
  const [visible, handleState] = React.useState(defaultVisible)

  const setVisible = React.useCallback((v): void => {
    handleState(v)
  }, [])

  const Portal = ({ children, style }: PortalProps): React.ReactPortal => {
    const node = document.createElement('div')
    if (style) {
      for (const prop in style) {
        // @ts-ignore
        node.style[prop] = style[prop]
      }
    }
    React.useEffect((): (() => void) => {
      document.body.appendChild(node)
      return (): void => {
        document.body.removeChild(node)
      }
    }, [node])
    return createPortal(children, node)
  }

  return [visible, setVisible, Portal]
}
