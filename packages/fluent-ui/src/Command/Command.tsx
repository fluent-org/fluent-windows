import * as React from 'react'
import { More as MoreIcon } from '@fluent-ui/icons' // TODO treeShaking
import { usePortal, useClickOutside, useReveal } from '@fluent-ui/hooks' // TODO treeShaking
import { omit } from '../utils'
import {
  StyledContent,
  StyledPrimary,
  StyledContainer,
  StyledSecondaryContainer
} from './Command.styled'
import Secondary from './components/Secondary'
import Content from './components/Content'
import CommandButton from '../CommandButton'
import { CommandProps, CommandContainer, CommandChild, CommandType } from './Command.type'

export const CommandContext = React.createContext(false)

const Command = React.forwardRef<HTMLDivElement, CommandProps>(
  ({ acrylic, reveal, children, ...rest }: CommandProps, ref): React.ReactElement => {
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

    // Secondary Popup related
    const {
      // visible: secondaryVisible,
      setVisible: setSecondaryVisible,
      Portal: SecondaryPortal
    } = usePortal()
    const [portalStyle, setPortalStyle] = React.useState()
    function handleSecondaryVisible(e: React.MouseEvent<HTMLButtonElement>): void {
      const rect = e.currentTarget.getBoundingClientRect()
      const position = {
        position: 'absolute',
        left: `${rect.left + window.scrollX}px`,
        top: `${rect.top + window.scrollY + rect.height}px`,
        zIndex: 9999
      }
      setSecondaryVisible((visible: boolean): boolean => !visible)
      setPortalStyle(position)
    }

    // Reveal does not take effect when using acrylic
    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal()

    // Click on the area outside the More menu to close the More menu.
    const secondaryRef = React.useRef<HTMLDivElement>(null)
    useClickOutside(
      secondaryRef,
      (): void => {
        setSecondaryVisible((visible: boolean): boolean => !visible)
      }
    )

    const otherProps = omit(rest, ['display', 'backgroundColor', 'color'])
    return (
      <StyledContainer ref={ref} acrylic={acrylic} {...otherProps}>
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
                <CommandButton style={{ height: '100%' }} onClick={handleSecondaryVisible}>
                  <MoreIcon />
                </CommandButton>
              </RevealWrapper>
            ) : (
              <CommandButton onClick={handleSecondaryVisible}>
                <MoreIcon />
              </CommandButton>
            ))}

          <SecondaryPortal style={portalStyle}>
            <StyledSecondaryContainer ref={secondaryRef} acrylic={acrylic}>
              {container.secondary}
            </StyledSecondaryContainer>
          </SecondaryPortal>
        </CommandContext.Provider>
      </StyledContainer>
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

Command.defaultProps = {
  acrylic: false,
  reveal: false
}

export default Command as CommandType
