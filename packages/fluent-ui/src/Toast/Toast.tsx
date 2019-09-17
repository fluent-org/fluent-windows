import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Toast.styled'
import { Theme } from '../styles'
import { ToastClassProps, ToastProps, ToastPropTypes } from './Toast.type'

import Portal from '../Portal'
import Transition from '../Transition'
import Box from '../Box'

export const name = 'Toast'

const useStyles = createUseStyles<Theme, ToastClassProps>(styles, { name })

const Toast: React.FC<ToastProps> = React.forwardRef<HTMLDivElement, ToastProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      children,
      visible = false,
      actions,
      placement = 'top',
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.placementTopStart]: placement === 'top-start',
        [classes.placementTop]: placement === 'top',
        [classes.placementTopEnd]: placement === 'top-end',
        [classes.placementBottomStart]: placement === 'bottom-start',
        [classes.placementBottom]: placement === 'bottom',
        [classes.placementBottomEnd]: placement === 'bottom-end',
        [classes.placementCenter]: placement === 'center'
      },
      classNameProp
    )
    return (
      <Portal>
        <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <Box
            className={className}
            ref={ref}
            as={as}
            width={{ xs: '288px', sm: 'auto' }}
            minWidth={{ xs: '288px', sm: '340px' }}
            placement={placement}
            {...rest}
          >
            <div className={classes.container}>{children}</div>
            <div className={classes.actions}>{actions}</div>
          </Box>
        </Transition>
      </Portal>
    )
  }
)

Toast.displayName = `F${name}`

Toast.propTypes = ToastPropTypes

export default Toast
