import React, { ReactElement, MouseEventHandler, forwardRef } from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Icon } from '@fluent-ui/icons'

export interface CommandButtonProps {
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactElement
}

const CommandButtonStyled = styled.button`
  border: none;
  outline: none;
  padding: 10px 22px;
  line-height: 1;
  transition: ${th.transition('button')};
  color: inherit;
  background-color: transparent;
  display: inline-block;
  &:hover {
    background-color: secondary;
  }
  &:active {
    color: black;
    background-color: primary;
  }
`

const CommandButtonTextStyled = styled.div`
  font-size: 12px;
  margin-top: 6px;
  text-overflow: ellipsis;
  overflow: hidden;
`

const CommandButton = forwardRef<HTMLButtonElement, CommandButtonProps>(
  ({ icon, onClick, children }: CommandButtonProps, ref): ReactElement => (
    <CommandButtonStyled onClick={onClick} ref={ref}>
      {icon && <Icon type={icon} />}
      {children && (
        <CommandButtonTextStyled>{children}</CommandButtonTextStyled>
      )}
    </CommandButtonStyled>
  )
)

CommandButton.displayName = 'FCommandButton'

export default CommandButton
