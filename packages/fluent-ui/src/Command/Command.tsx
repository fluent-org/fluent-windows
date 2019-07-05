import * as React from 'react'
import {
  ReactElement,
  Children,
  forwardRef,
  ReactComponentElement,
  ForwardRefExoticComponent,
  createContext,
  useState,
  MouseEvent,
  useRef
} from 'react'
import { StyledContent, StyledPrimary } from './Command.styled'
import Secondary from './Secondary'
import Content from './Content'
import Box from '../Box'
import CommandButton from '../CommandButton'
import { omit } from '../utils'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../styles/createTheme'
import { usePortal } from '../hooks/usePortal'
import { useOnClickOutside } from '../hooks/useOnClickOutside'
import { useReveal } from '../hooks/useReveal'
import { primary } from '../colors'

type Child =
  | ReactComponentElement<typeof CommandButton>
  | ReactComponentElement<typeof Content>
  | ReactComponentElement<typeof Secondary>
  | any

interface CommandProps extends BoxProps, ThemeProps {
  reveal?: boolean
  children: Child[]
}

interface Container {
  primary: ReactComponentElement<typeof CommandButton>[]
  content: ReactComponentElement<typeof Content>[]
  secondary: ReactComponentElement<typeof Secondary>[]
}

interface CommandType extends ForwardRefExoticComponent<CommandProps> {
  Content: typeof Content
  Secondary: typeof Secondary
}

export const CommandContext = createContext(false)

const Command = forwardRef<HTMLDivElement, CommandProps>(
  ({ acrylic, reveal, children, ...rest }: CommandProps, ref): ReactElement => {
    const container: Container = {
      content: [],
      primary: [],
      secondary: []
    }
    Children.forEach(
      children,
      (child: Child): void => {
        if (child.type.name! === 'Content') {
          container.content.push(child)
        } else if (child.type.name === 'Secondary') {
          container.secondary = child.props.children
        } else {
          container.primary.push(child)
        }
      }
    )

    const [secondaryVisible, setSecondaryVisible, SecondaryPortal] = usePortal()
    const [portalStyle, setPortalStyle] = useState()
    function handleSecondaryVisible(e: MouseEvent<HTMLButtonElement>): void {
      const rect = e.currentTarget.getBoundingClientRect()
      const position = {
        position: 'absolute',
        left: `${rect.left + window.scrollX}px`,
        top: `${rect.top + window.scrollY + rect.height}px`
      }
      setSecondaryVisible((visible): boolean => !visible)
      setPortalStyle(position)
    }

    // 当使用 acrylic 时 reveal 不生效
    reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal()

    // 点击 More 菜单之外的区域关闭 More 菜单
    const secondaryRef = useRef<HTMLDivElement>(null)
    useOnClickOutside(
      secondaryRef,
      (): void => {
        setSecondaryVisible((visible): boolean => !visible)
      }
    )

    const otherProps = omit(rest, ['display'])
    return (
      <Box display="flex" ref={ref} acrylic={acrylic} {...otherProps}>
        <CommandContext.Provider value={reveal as boolean}>
          {!!container.content.length && (
            <StyledContent>{container.content}</StyledContent>
          )}
          <StyledPrimary>
            {reveal
              ? container.primary.map(
                  (child, i): ReactElement => (
                    <RevealWrapper key={i}>{child}</RevealWrapper>
                  )
                )
              : container.primary}
          </StyledPrimary>
          {!!container.secondary.length &&
            (reveal ? (
              <RevealWrapper>
                <CommandButton
                  icon="More"
                  style={{ height: '100%' }}
                  onClick={handleSecondaryVisible}
                />
              </RevealWrapper>
            ) : (
              <CommandButton icon="More" onClick={handleSecondaryVisible} />
            ))}
          {secondaryVisible && (
            <SecondaryPortal style={portalStyle}>
              <Box
                ref={secondaryRef}
                width={130}
                display="flex"
                flexDirection="column"
                backgroundColor="#e6e6e6"
                acrylic={acrylic}
              >
                {container.secondary}
              </Box>
            </SecondaryPortal>
          )}
        </CommandContext.Provider>
      </Box>
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
  reveal: false,
  backgroundColor: primary.light2
}

export default Command as CommandType