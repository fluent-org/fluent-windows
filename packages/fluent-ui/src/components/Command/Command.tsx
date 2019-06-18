import React, { SFC, ReactElement } from 'react'
import StyledCommand from './Command.styled'

interface CommandProps {
  reveal?: boolean
}

const Command: SFC<CommandProps> = (props: CommandProps): ReactElement => {
  return <StyledCommand {...props} />
}

Command.defaultProps = {
  reveal: true
}

export default Command
