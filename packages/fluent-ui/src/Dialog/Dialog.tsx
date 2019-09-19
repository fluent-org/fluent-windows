import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Dialog.styled'
import { Theme } from '../styles'

import Box from '../Box'
import Portal from '../Portal'
import Transition from '../Transition'
import Title from './components/Title'
import Content from './components/Content'
import Actions from './components/Actions'
import {
  DialogProps,
  DialogType,
  DialogChild,
  DialogContainer,
  DialogContextType,
  DialogPropTypes,
  DialogClassProps
} from './Dialog.type'

export const name = 'Dialog'

const useStyles = createUseStyles<Theme, DialogClassProps>(styles, { name })

export const DialogContext = React.createContext<DialogContextType>({
  onChange: (): void => {}
})

const Dialog: React.FC<DialogProps> = React.forwardRef<HTMLDivElement, DialogProps>(
  (props, ref): React.ReactElement | null => {
    const { as = 'div', className: classNameProp, children, visible, onChange, ...rest } = props

    function handleClose(): void {
      onChange && onChange(false)
    }

    const container: DialogContainer = {
      title: undefined,
      content: [],
      actions: undefined
    }
    React.Children.forEach(children, (child: DialogChild): void => {
      if (child.type.displayName! === `F${name}Title`) {
        container.title = child
      } else if (child.type.displayName === `F${name}Actions`) {
        container.actions = child
      } else {
        container.content.push(child)
      }
    })

    const contextValue: DialogContextType = {
      onChange: onChange as (visible: boolean) => void
    }

    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)

    return (
      <>
        <Portal>
          <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
            <div className={classes.mask} onClick={handleClose} />
          </Transition>
        </Portal>
        <Portal>
          <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
            <Box className={className} ref={ref} as={as} boxShadow="5" {...rest}>
              <DialogContext.Provider value={contextValue}>
                {!!container.title && container.title}
                <div className={classes.content}>{container.content}</div>
                {!!container.actions && container.actions}
              </DialogContext.Provider>
            </Box>
          </Transition>
        </Portal>
      </>
    )
  }
)

Object.defineProperty(Dialog, 'Title', {
  get(): typeof Title {
    return Title
  }
})
Object.defineProperty(Dialog, 'Content', {
  get(): typeof Content {
    return Content
  }
})
Object.defineProperty(Dialog, 'Actions', {
  get(): typeof Actions {
    return Actions
  }
})

Dialog.displayName = `F${name}`

Dialog.propTypes = DialogPropTypes

export default Dialog as DialogType
