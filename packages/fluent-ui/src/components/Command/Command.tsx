import React, {
  ReactElement,
  Children,
  forwardRef,
  ReactComponentElement,
  ForwardRefExoticComponent
} from 'react'
import { StyledContent, StyledPrimary } from './Command.styled'
import Secondary from './Secondary'
import Content from './Content'
import Box from '../Box'
import CommandButton from '../CommandButton'
import { omit } from '../../utils'

type Children =
  | ReactComponentElement<typeof CommandButton>
  | ReactComponentElement<typeof Content>
  | ReactComponentElement<typeof Secondary>
  | any

interface CommandProps {
  acrylic?: boolean
  reveal?: boolean
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
    const otherProps = omit(rest, ['display'])
    return (
      <Box display="flex" ref={ref} acrylic={acrylic} {...otherProps}>
        {!!container.content.length && (
          <StyledContent>{container.content}</StyledContent>
        )}
        <StyledPrimary>{container.primary}</StyledPrimary>
        {!!container.secondary.length && <CommandButton icon="More" />}
      </Box>
    )
  }
)

Command.Secondary = Secondary
Command.Content = Content

Command.displayName = 'FCommand'

Command.defaultProps = {
  acrylic: false,
  reveal: true
}

export default Command
