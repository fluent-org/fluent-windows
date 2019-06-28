import {
  useState,
  useEffect,
  ReactPortal,
  ReactNode,
  useCallback,
  Dispatch,
  SetStateAction
} from 'react'
import { createPortal } from 'react-dom'

type Return = [
  boolean,
  Dispatch<SetStateAction<boolean>>,
  (props: PortalProps) => ReactPortal | null
]

interface PortalProps {
  children: ReactNode
  style?: object
}

export function usePortal(defaultVisible = false): Return {
  const [visible, handleState] = useState(defaultVisible)

  const setVisible = useCallback((v): void => {
    handleState(v)
  }, [])

  const Portal = ({ children, style }: PortalProps): ReactPortal | null => {
    const node = document.createElement('div')
    if (style) {
      for (const prop in style) {
        // @ts-ignore
        node.style[prop] = style[prop]
      }
    }
    useEffect((): (() => void) => {
      document.body.appendChild(node)
      return (): void => {
        document.body.removeChild(node)
      }
    }, [node])
    return createPortal(children, node)
  }

  return [visible, setVisible, Portal]
}
