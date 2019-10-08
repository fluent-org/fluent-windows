/**
 * Subscribe to events that click on a location other than the specified element.
 *
 * Demo
 * import { useClickOutside } from '@fluent-ui/hooks'
 *
 * const reference = React.useRef(null)
 *
 * useClickOutside(
 *   reference,
 *   (): void => {
 *     // ...
 *   }
 * )
 *
 * <div ref={reference}>xxx</div>
 */

import * as React from 'react'

function useClickOutside(
  ref: React.RefObject<HTMLDivElement>,
  handler: (e: MouseEvent | TouchEvent) => void
): void {
  React.useEffect((): (() => void) => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      // @ts-ignore
      if (
        !ref.current ||
        (typeof ref.current.contains === 'function' &&
          event.target &&
          ref.current.contains(event.target as Node))
      ) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return (): void => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export default useClickOutside
