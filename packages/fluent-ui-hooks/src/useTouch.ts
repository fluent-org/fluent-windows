import * as React from 'react'

export function useTouch(
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
