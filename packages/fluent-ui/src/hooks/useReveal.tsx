import * as React from 'react'
import {
  ReactElement,
  useState,
  useRef,
  useCallback,
  ReactNode,
  useEffect,
  RefObject,
  SFC
} from 'react'
import * as CSS from 'csstype'

type Return = [SFC<RevealWrapperProps>]

interface RevealWrapperProps {
  children: ReactNode
}

const createRevealWrapper = (
  gradientSize: number,
  lightColor: CSS.ColorProperty
): SFC<RevealWrapperProps> => {
  const RevealWrapper = ({ children }: RevealWrapperProps): ReactElement => {
    const [background, setBackground] = useState()
    const ref = useRef<HTMLDivElement>() as RefObject<HTMLDivElement>
    const listener = useCallback(
      (e: MouseEvent): void => {
        const rect = ref.current && ref.current.getBoundingClientRect()
        if (ref.current && rect) {
          const x = e.pageX - rect.left - window.scrollX
          const y = e.pageY - rect.top - window.scrollY
          const gradient = `radial-gradient(circle ${gradientSize}px at ${x}px ${y}px, ${lightColor}, rgba(255,255,255,0))`
          setBackground(gradient)
        }
      },
      [ref]
    )
    useEffect((): (() => void) => {
      document.addEventListener('mousemove', listener)
      return (): void => {
        document.removeEventListener('mousemove', listener)
      }
    }, [listener])
    return (
      <div ref={ref} style={{ background, margin: 1, padding: 1 }}>
        {children}
      </div>
    )
  }
  return RevealWrapper
}

export function useReveal(
  gradientSize: number = 80,
  lightColor: CSS.ColorProperty = 'rgba(160, 160, 160, 1)'
): Return {
  const RevealWrapper = createRevealWrapper(gradientSize, lightColor)
  return [RevealWrapper]
}
