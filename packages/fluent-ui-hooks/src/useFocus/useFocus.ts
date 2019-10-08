/**
 * Subscribe to focus events based on `onFocus`, `onBlur`
 *
 * Demo
 * import { useFocus } from '@fluent-ui/hooks'
 *
 * function handleChange() {
 *   // ...
 * }
 * const [status, bind] = useFocus(handleChange)
 *
 * <button {...bind}>{status}</button>
 */

import * as React from 'react'

function useFocus(
  statusHandler?: (status: boolean) => void
): [
  boolean,
  {
    onFocus: () => void
    onBlur: () => void
  }
] {
  const [isFocused, setFocused] = React.useState(false)

  const bind = {
    onFocus: (): void => {
      statusHandler ? statusHandler(true) : setFocused(true)
    },
    onBlur: (): void => {
      statusHandler ? statusHandler(false) : setFocused(false)
    }
  }

  return [isFocused, bind]
}

export default useFocus
