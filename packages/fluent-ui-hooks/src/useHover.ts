import * as React from 'react'

export function useHover(): [
  boolean,
  {
    onMouseEnter: () => void
    onMouseLeave: () => void
  }
] {
  const [isHovered, setHovered] = React.useState(false)

  const bind = {
    onMouseEnter: (): void => {
      setHovered(true)
    },
    onMouseLeave: (): void => {
      setHovered(false)
    }
  }

  return [isHovered, bind]
}
