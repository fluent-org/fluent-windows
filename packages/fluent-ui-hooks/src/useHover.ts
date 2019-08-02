/**
 * Subscribe to hover events based on `onMouseEnter`, `onMouseLeave`
 *
 * Demo
 * import { useHover } from '@fluent-ui/hooks'
 *
 * function handleChange() {
 *   // ...
 * }
 * const [status, bind] = useHover(handleChange)
 *
 * <button {...bind}>{status}</button>
 */

import * as React from 'react'

export function useHover(
  statusHandler: (status: boolean) => void
): [
  boolean,
  {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
] {
  const [isHovered, setHovered] = React.useState(false)

  const bind = {
    onMouseEnter: (): void => {
      statusHandler ? statusHandler(true) : setHovered(true)
    },
    onMouseLeave: (): void => {
      statusHandler ? statusHandler(false) : setHovered(false)
    }
  }

  return [isHovered, bind]
}
