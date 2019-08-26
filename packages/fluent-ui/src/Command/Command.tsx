import * as React from 'react'
import { More as MoreIcon } from '@fluent-ui/icons' // TODO treeShaking
import { useClickOutside, useReveal, usePopper } from '@fluent-ui/hooks' // TODO treeShaking
import { omit } from '../utils'
import {
  StyledContent,
  StyledPrimary,
  StyledCommandWrapper,
  StyledSecondaryContainer
} from './Command.styled'
import Secondary from './components/Secondary'
import Content from './components/Content'
import Portal from '../Portal'
import Item from '../Item'
import Transition from '../Transition'
import {
  CommandProps,
  CommandContainer,
  CommandChild,
  CommandType,
  CommandPropTypes
} from './Command.type'

export const CommandContext = React.createContext(false)

const Command: React.FC<CommandProps> = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ acrylic = false, reveal = false, children, ...rest }, ref): React.ReactElement => {
    const container: CommandContainer = {
      content: [],
      standard: [],
      secondary: []
    }
    React.Children.forEach(
      children,
      (child: CommandChild): void => {
        if (child.type.displayName! === 'FCommandContent') {
          container.content.push(child)
        } else if (child.type.displayName === 'FCommandSecondary') {
          container.secondary = child.props.children
        } else {
          container.standard.push(child)
        }
      }
    )

    // Reveal does not take effect when using acrylic
    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal()
    // Secondary Popup related
    const [secondaryVisible, setSecondaryVisible] = React.useState(false)
    function handleSecondaryVisible(): void {
      if (secondaryVisible) return
      setSecondaryVisible((visible: boolean): boolean => !visible)
    }
    // Click on the area outside the More menu to close the More menu.
    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
      placement: 'bottom'
    })
    useClickOutside(
      popperRef,
      (event: MouseEvent | TouchEvent): void => {
        // @ts-ignore
        if (!referenceRef.current || referenceRef.current.contains(event.target)) return
        setSecondaryVisible((visible: boolean): boolean => !visible)
      }
    )

    const otherProps = omit(rest, ['display', 'backgroundColor', 'color'])
    return (
      <StyledCommandWrapper ref={ref} acrylic={acrylic} {...otherProps}>
        <CommandContext.Provider value={reveal as boolean}>
          {!!container.content.length && <StyledContent>{container.content}</StyledContent>}
          <StyledPrimary>
            {reveal
              ? container.standard.map(
                  (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
                )
              : container.standard}
          </StyledPrimary>
          {!!container.secondary.length &&
            (reveal ? (
              <RevealWrapper>
                <Item
                  ref={referenceRef}
                  style={{ height: '100%' }}
                  onClick={handleSecondaryVisible}
                  prefix={<MoreIcon />}
                />
              </RevealWrapper>
            ) : (
              <Item ref={referenceRef} onClick={handleSecondaryVisible} prefix={<MoreIcon />} />
            ))}

          <Portal>
            <Transition visible={secondaryVisible} wrapper={false} mountOnEnter unmountOnExit>
              <StyledSecondaryContainer ref={popperRef} acrylic={acrylic}>
                {container.secondary}
              </StyledSecondaryContainer>
            </Transition>
          </Portal>
        </CommandContext.Provider>
      </StyledCommandWrapper>
    )
  }
)

Object.defineProperty(Command, 'Secondary', {
  get(): typeof Secondary {
    return Secondary
  }
})
Object.defineProperty(Command, 'Content', {
  get(): typeof Content {
    return Content
  }
})

Command.displayName = 'FCommand'

Command.propTypes = CommandPropTypes

export default Command as CommandType
