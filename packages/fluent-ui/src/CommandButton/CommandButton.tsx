import * as React from 'react'
import { CommandContext } from '../Command/Command'
import { CommandButtonStyled, CommandButtonTextStyled } from './CommandButton.styled'
import { CommandButtonProps } from './CommandButton.type'

const CommandButton = React.forwardRef<HTMLButtonElement, CommandButtonProps>(
  ({ onClick, children, ...rest }: CommandButtonProps, ref): React.ReactElement => {
    const reveal = React.useContext(CommandContext)
    const theChildren = React.Children.toArray(children)
    const icon = theChildren[0]
    const text = React.Children.count(children) > 1 ? theChildren[1] : null
    return (
      <CommandButtonStyled onClick={onClick} ref={ref} reveal={reveal} {...rest}>
        {icon}
        {text && <CommandButtonTextStyled hasIcon={!!icon}>{text}</CommandButtonTextStyled>}
      </CommandButtonStyled>
    )
  }
)

CommandButton.displayName = 'FCommandButton'

export default CommandButton
