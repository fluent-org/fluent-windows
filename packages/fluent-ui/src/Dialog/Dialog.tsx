import * as React from 'react'
import { usePortal } from '@fluent-ui/hooks'
import { StyledDialogMask, StyledDialog, StyledDialogContent } from './Dialog.styled'
import Transition from '../Transition'
import Title from './components/Title'
import Content from './components/Content'
import Actions from './components/Actions'
import {
  DialogProps,
  DialogType,
  DialogChild,
  DialogContainer,
  DialogContextType
} from './Dialog.type'

export const DialogContext = React.createContext<DialogContextType>({
  onChange: (): void => {}
})

const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ children, visible, onChange }: DialogProps, ref): React.ReactElement | null => {
    const { Portal } = usePortal({ defaultVisible: true })
    function handleClose(): void {
      onChange && onChange(false)
    }

    const container: DialogContainer = {
      title: undefined,
      content: [],
      actions: undefined
    }
    React.Children.forEach(
      children,
      (child: DialogChild): void => {
        if (child.type.displayName! === 'FDialogTitle') {
          container.title = child
        } else if (child.type.displayName === 'FDialogActions') {
          container.actions = child
        } else {
          container.content.push(child)
        }
      }
    )

    const contextValue: DialogContextType = {
      onChange: onChange as (visible: boolean) => void
    }

    return (
      <>
        <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <Portal>
            <StyledDialogMask onClick={handleClose} />
          </Portal>
        </Transition>
        <Transition visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <Portal>
            <StyledDialog
              ref={ref}
              boxShadow="5"
              width={{ xs: '288px', sm: 'auto' }}
              maxWidth={{ xs: '340px', sm: '450px' }}
              minWidth={{ xs: '288px', sm: '340px' }}
            >
              <DialogContext.Provider value={contextValue}>
                {!!container.title && container.title}
                <StyledDialogContent>{container.content}</StyledDialogContent>
                {!!container.actions && container.actions}
              </DialogContext.Provider>
            </StyledDialog>
          </Portal>
        </Transition>
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

Dialog.displayName = 'FDialog'

export default Dialog as DialogType
