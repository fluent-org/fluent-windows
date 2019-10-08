/**
 * Subscribe to touch events based on `onTouchStart`, `onTouchEnd`
 *
 * Demo
 * import { useTouch } from '@fluent-ui/hooks'
 *
 * function handleChange() {
 *   // ...
 * }
 * const [status, bind] = useTouch(handleChange)
 *
 * <button {...bind}>{status}</button>
 */

import * as React from 'react'

function useTouch(
  statusHandler?: (status: boolean) => void
): [
  boolean,
  {
    onTouchStart: () => void
    onTouchEnd: () => void
  }
] {
  const [isTouched, setTouched] = React.useState(false)

  const bind = {
    onTouchStart: (): void => {
      statusHandler ? statusHandler(true) : setTouched(true)
    },
    onTouchEnd: (): void => {
      statusHandler ? statusHandler(false) : setTouched(false)
    }
  }

  return [isTouched, bind]
}

export default useTouch
