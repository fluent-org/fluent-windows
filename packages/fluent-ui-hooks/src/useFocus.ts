import * as React from 'react'

export function useFocus(
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
