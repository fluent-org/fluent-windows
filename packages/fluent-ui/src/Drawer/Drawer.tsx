import * as React from 'react'
import { createUseStyles } from '@fluent-ui/styles'
import { createSwipe, styles } from './Drawer.styled'
import { DrawerClassProps, DrawerProps, DrawerPropTypes } from './Drawer.type'
import { Theme } from '../styles'

import Portal from '../Portal'
import Transition from '../Transition'
import classNames from 'classnames'
import { useCallback } from 'react'

export const name = 'Drawer'

const useStyles = createUseStyles<Theme, DrawerClassProps>(styles, { name })

const Drawer: React.FC<DrawerProps> = React.forwardRef<HTMLDivElement, DrawerProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'div',
      className: classNameProp,
      children,
      visible,
      onChange,
      anchor = 'left',
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)

    const handleClose = useCallback((): void => {
      onChange && onChange(false)
    }, [onChange])

    return (
      <>
        <Portal>
          <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
            <div className={classes.mask} onClick={handleClose} />
          </Transition>
        </Portal>
        <Portal>
          <Transition
            type="custom"
            custom={createSwipe(anchor)}
            visible={visible}
            wrapper={false}
            mountOnEnter
            unmountOnExit
          >
            <Component className={className} ref={ref} {...rest}>
              {children}
            </Component>
          </Transition>
        </Portal>
      </>
    )
  }
)

Drawer.displayName = `F${name}`

Drawer.propTypes = DrawerPropTypes

Drawer.defaultProps = {
  anchor: 'left'
}

export default Drawer
