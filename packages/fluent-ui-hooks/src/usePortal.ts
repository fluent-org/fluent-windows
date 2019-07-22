import * as React from 'react'
import { createPortal } from 'react-dom'
import { global } from './utils'

interface Option {
  defaultVisible?: boolean
  container?: HTMLElement
  onMount?: () => void
}

interface PortalProps
  extends React.ComponentPropsWithoutRef<'div'>,
    React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement
}

interface UsePortalReturn {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  Portal: ({ children }: PortalProps) => React.ReactPortal | null
  targetRef: (element: any) => void
}

export function usePortal(option: Option = {}): UsePortalReturn {
  const { defaultVisible = false, container, onMount } = option

  const [visible, setVisible] = React.useState(defaultVisible)

  const [refCurrent, setRef] = React.useState(null)
  const targetRef = React.useCallback((element): void => {
    setRef(element)
  }, [])

  const Portal = React.useCallback(
    ({ children, ...rest }: PortalProps): React.ReactPortal | null => {
      // eslint-disable-next-line
      React.useEffect((): void => {
        if (onMount && refCurrent) {
          onMount()
        }
      }, [])

      const mountElement = container || (refCurrent || (global && global.document.body))

      return visible
        ? createPortal(React.cloneElement(children, { ...rest }), mountElement as HTMLElement)
        : null
    },
    [onMount, refCurrent, container, visible]
  )

  return {
    visible,
    setVisible,
    Portal,
    targetRef
  }
}
