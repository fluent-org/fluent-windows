/**
 * Create [Reveal Highlight](https://docs.microsoft.com/en-us/windows/uwp/design/style/reveal) Effects.
 *
 * Demo
 * import { useReveal } from '@fluent-ui/hooks'
 *
 * const [RevealWrapper] = useReveal(66)
 *
 * <RevealWrapper><div>1</div></RevealWrapper>
 * <RevealWrapper><div>2</div></RevealWrapper>
 * <RevealWrapper><div>3</div></RevealWrapper>
 */

import * as React from 'react'
import * as CSS from 'csstype'
import { useGlobal } from '../useGlobal'

type Return = [React.FC<RevealWrapperProps>]

interface RevealWrapperProps {
  children: React.ReactElement
}

const global = useGlobal() as Window

const createRevealWrapper = (
  gradientSize: number,
  lightColor: CSS.ColorProperty
): React.FC<RevealWrapperProps> => {
  const RevealWrapper = ({ children }: RevealWrapperProps): React.ReactElement => {
    const ref = React.useRef<HTMLDivElement>() as React.RefObject<HTMLDivElement>

    const listener = React.useCallback(
      (e: MouseEvent): void => {
        global.requestAnimationFrame((): void => {
          const rect = ref.current && ref.current.getBoundingClientRect()
          if (ref.current && rect) {
            const x = e.pageX - rect.left - global.scrollX
            const y = e.pageY - rect.top - global.scrollY
            ref.current.style.setProperty('--x', x + 'px')
            ref.current.style.setProperty('--y', y + 'px')
          }
        })
      },
      [ref]
    )

    React.useEffect((): (() => void) => {
      global.addEventListener('mousemove', listener)
      return (): void => {
        global.removeEventListener('mousemove', listener)
      }
    }, [listener])

    const gradient = React.useMemo(
      (): string =>
        `radial-gradient(circle ${gradientSize}px at var(--x) var(--y), ${lightColor}, rgba(255,255,255,0))`,
      []
    )

    return (
      <div ref={ref} style={{ background: gradient, margin: 1, padding: 1 }}>
        {React.cloneElement(children)}
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
