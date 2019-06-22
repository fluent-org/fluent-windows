import React, {
  ReactElement,
  Children,
  forwardRef,
  ReactComponentElement,
  ForwardRefExoticComponent,
  useEffect,
  createContext
} from 'react'
import {
  StyledContent,
  StyledPrimary,
  RevealButtonWrapper
} from './Command.styled'
import Secondary from './Secondary'
import Content from './Content'
import Box from '../Box'
import CommandButton from '../CommandButton'
import { omit } from '../../utils'
import { BoxProps } from '../Box/Box'
import { ThemeProps } from '../../theme'

type Children =
  | ReactComponentElement<typeof CommandButton>
  | ReactComponentElement<typeof Content>
  | ReactComponentElement<typeof Secondary>
  | any

interface CommandProps extends BoxProps, ThemeProps {
  reveal: boolean
  children: Children[]
}

interface Container {
  primary: ReactComponentElement<typeof CommandButton>[]
  content: ReactComponentElement<typeof Content>[]
  secondary: ReactComponentElement<typeof Secondary>[]
}

interface CommandType extends ForwardRefExoticComponent<CommandProps> {
  Content?: typeof Content
  Secondary?: typeof Secondary
}

// 用于与子组件 CommandButton 通信
export const CommandContext = createContext(false)

const Command: CommandType = forwardRef<HTMLDivElement, CommandProps>(
  ({ acrylic, reveal, children, ...rest }: CommandProps, ref): ReactElement => {
    const container: Container = {
      content: [],
      primary: [],
      secondary: []
    }
    Children.forEach(
      children,
      (child: Children): void => {
        if (child.type.name! === 'Content') {
          container.content.push(child)
        } else if (child.type.name === 'Secondary') {
          container.secondary.push(child)
        } else {
          container.primary.push(child)
        }
      }
    )
    useEffect((): void => {
      if (reveal) {
        document.addEventListener(
          'mousemove',
          (e): void => {
            const wrappers = document.querySelectorAll('.fluent_reveal_button')
            wrappers.forEach(
              (item: Element): void => {
                const rect = item.getBoundingClientRect()
                const x = e.pageX - rect.left - window.scrollX
                const y = e.pageY - rect.top - window.scrollY
                const gradientSize = 80
                const lightColor = 'rgba(160,160,160,1)'
                const gradient = `radial-gradient(circle ${gradientSize}px at ${x}px ${y}px, ${lightColor}, rgba(255,255,255,0))`
                item.style.background = gradient
              }
            )
          }
        )
      }
    }, [reveal])

    // 当使用 acrylic 时 reveal 不生效
    reveal = acrylic ? false : reveal

    const otherProps = omit(rest, ['display'])
    return (
      <Box display="flex" ref={ref} acrylic={acrylic} {...otherProps}>
        <CommandContext.Provider value={reveal}>
          {!!container.content.length && (
            <StyledContent>{container.content}</StyledContent>
          )}
          <StyledPrimary>
            {reveal
              ? container.primary.map(
                  (primary, i): ReactElement => (
                    <RevealButtonWrapper key={i}>{primary}</RevealButtonWrapper>
                  )
                )
              : container.primary}
          </StyledPrimary>
          {!!container.secondary.length &&
            (reveal ? (
              <RevealButtonWrapper>
                <CommandButton icon="More" style={{ height: '100%' }} />
              </RevealButtonWrapper>
            ) : (
              <CommandButton icon="More" />
            ))}
        </CommandContext.Provider>
      </Box>
    )
  }
)

Command.Secondary = Secondary
Command.Content = Content

Command.displayName = 'FCommand'

Command.defaultProps = {
  acrylic: false,
  reveal: false,
  backgroundColor: '#e6e6e6'
}

export default Command
