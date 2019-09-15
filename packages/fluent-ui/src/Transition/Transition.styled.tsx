import * as React from 'react'
import { Styles, Style } from 'jss'
import { TransitionClassProps, TransitionProps } from './Transition.type'

import { createBaseTransition } from '../styles/createTransition'

const fade: Style = {
  '&.fade-enter': {
    opacity: 0,
    '&-active': {
      opacity: 1
    }
  },
  '&.fade-exit': {
    opacity: 1,
    '&-active': {
      opacity: 0
    }
  }
}

const zoom: Style = {
  '&.zoom-enter': {
    '&-active': {
      transform: 'scale3d(0, 0, 0)'
    },
    '&-done': {
      transform: 'none'
    }
  },
  '&.zoom-exit': {
    '&-active': {
      transform: 'scale3d(0, 0, 0)'
    },
    '&-done': {
      transform: 'scale3d(0, 0, 0)'
    }
  }
}

const slide: Style = {
  '&.slide-enter': {
    transform: 'translateY(100vh)',
    '&-done': {
      transform: 'none'
    }
  },
  '&.slide-exit': {
    transform: 'none',
    '&-active': {
      transform: 'translateY(100vh)'
    },
    '&-done': {
      transform: 'translateY(100vh)'
    }
  }
}

const collapse = ({ wrapperHeight }: TransitionProps): Style => ({
  '&.collapse-enter': {
    height: 0,
    '&-active': {
      height: wrapperHeight
    },
    '&-done': {
      height: 'auto'
    }
  },
  '&.collapse-exit': {
    height: wrapperHeight,
    '&-active': {
      height: 0
    }
  }
})

const grow: Style = {
  '&.grow-enter': {
    opacity: 0,
    transform: 'scale(0.75, 0.5625)',
    '&-active': {
      opacity: 1,
      transform: 'scale(1, 1)'
    },
    '&-done': {
      opacity: 1,
      transform: 'none'
    }
  },
  '&.grow-exit': {
    '&-active': {
      opacity: 0,
      transform: 'scale(0.75, 0.5625)'
    },
    '&-done': {
      opacity: 0,
      transform: 'scale(0.75, 0.5625)'
    }
  }
}

const root = ({ type: _type, visible, wrapperHeight, custom }: TransitionProps) => {
  switch (_type) {
    case 'fade':
      return {
        transition: createBaseTransition(['opacity', 'visibility']),
        ...(visible
          ? {
              opacity: 1
            }
          : {
              opacity: 0,
              visibility: 'hidden'
            })
      }
    case 'zoom':
      return {
        transition: createBaseTransition(['transform', 'visibility']),
        ...(visible
          ? {
              transform: 'none'
            }
          : {
              transform: 'scale3d(0, 0, 0)',
              visibility: 'hidden'
            })
      }
    case 'slide':
      return {
        transition: createBaseTransition(['transform', 'visibility']),
        ...(visible
          ? {
              transform: 'none'
            }
          : {
              transform: 'translateY(100vh)',
              visibility: 'hidden'
            })
      }
    case 'collapse':
      return {
        overflow: 'hidden',
        transition: createBaseTransition(['height', 'visibility']),
        ...(visible
          ? {
              height: wrapperHeight
            }
          : {
              height: 0,
              visibility: 'hidden'
            })
      }
    case 'grow':
      return {
        transformOrigin: '0 0 0',
        transition: createBaseTransition(['opacity', 'transform', 'visibility']),
        ...(visible
          ? {
              opacity: 1,
              transform: 'none'
            }
          : {
              opacity: 0,
              transform: 'scale(0.75, 0.5625)',
              visibility: 'hidden'
            })
      }
    case 'custom':
      return custom
  }
}

// export const StyledContainer = styled(
//   ({
//     children,
//     forwardRef,
//     wrapper,
//     setWrapperHeight,
//     ...props
//   }: StyledContainerProps): React.ReactElement => {
//     const wrapperRef = React.useRef<HTMLDivElement>(null)
//     const wrapperHeight = (wrapperRef && wrapperRef.current && wrapperRef.current.clientHeight) || 0
//     React.useEffect((): void => {
//       setWrapperHeight(wrapperHeight)
//     }, [setWrapperHeight, wrapperHeight])
//     return wrapper ? (
//       <Box {...props} ref={forwardRef}>
//         <Box ref={wrapperRef}>{children}</Box>
//       </Box>
//     ) : (
//       React.cloneElement(children, {
//         ...props,
//         // @ts-ignore
//         className: [children.props.className, props.className]
//       })
//     )
//   }
// )<StyledContainerProps>`
//   ${type}
//
//   ${fade}
//   ${zoom}
//   ${slide}
//   ${collapse}
//   ${grow}
// `

export const styles: Styles<TransitionClassProps> = {
  root,
  fade,
  zoom,
  slide,
  collapse,
  grow
}
