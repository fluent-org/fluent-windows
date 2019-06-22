import { useEffect, ReactPortal, ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  style?: object
}

const Portal = ({ children, style }: PortalProps): ReactPortal => {
  const div = document.createElement('div')
  if (style) {
    for (const prop in style) {
      // @ts-ignore
      div.style[prop] = style[prop]
    }
  }
  const el = useRef(div)
  useEffect((): (() => void) => {
    document.body.appendChild(el.current)
    return (): void => {
      document.body.removeChild(el.current)
    }
  }, [])
  return createPortal(children, el.current)
}

export default Portal
