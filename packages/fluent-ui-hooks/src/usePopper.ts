import * as React from 'react'
import PopperJS from 'popper.js'

export function usePopper({
  placement = 'bottom',
  positionFixed = false,
  eventsEnabled = true,
  ...otherOptions
}: PopperJS.PopperOptions): [React.MutableRefObject<null>, React.MutableRefObject<null>] {
  const popperInstance = React.useRef<PopperJS>(null)
  const referenceRef = React.useRef(null)
  const popperRef = React.useRef(null)

  React.useEffect((): (() => void) | void => {
    if (popperInstance.current !== null) {
      popperInstance.current.destroy()
    }
    if (referenceRef.current === null || popperRef.current === null) return

    // @ts-ignore
    popperInstance.current = new PopperJS(referenceRef.current, popperRef.current, {
      placement,
      positionFixed,
      eventsEnabled,
      ...otherOptions
    })

    return (): void => {
      if (popperInstance.current !== null) {
        popperInstance.current.destroy()
      }
    }
  }, [placement, positionFixed, eventsEnabled, otherOptions])

  React.useEffect((): void => {
    if (popperInstance.current === null) return

    if (eventsEnabled) {
      popperInstance.current.enableEventListeners()
    } else {
      popperInstance.current.disableEventListeners()
    }
  }, [popperInstance, eventsEnabled])

  React.useEffect((): void => {
    if (popperInstance.current !== null) {
      popperInstance.current.scheduleUpdate()
    }
  }, [popperInstance])

  return [referenceRef, popperRef]
}
