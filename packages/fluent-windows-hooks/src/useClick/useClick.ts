/**
 * Subscribe to mouse click events based on `onMouseUp`
 *
 * Demo
 * import { useClick } from '@fluent-windows/hooks'
 *
 * function handleChange() {
 *   // ...
 * }
 * const [status, bind, setStatus] = useClick(handleChange)
 *
 * <div {...bind}>{status}</div>
 */

import * as React from 'react'

function useClick(
  statusHandler?: (status: boolean) => void
): [
  boolean,
  {
    onMouseUp: () => void
  },
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [isClicked, setClicked] = React.useState(false)

  const bind = {
    onMouseUp: (): void => {
      statusHandler ? statusHandler(true) : setClicked(true)
    }
  }

  return [isClicked, bind, setClicked]
}

export default useClick
