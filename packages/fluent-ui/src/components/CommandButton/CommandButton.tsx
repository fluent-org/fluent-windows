import React, {
  ReactElement,
  MouseEventHandler,
  forwardRef,
  ButtonHTMLAttributes,
  useContext
} from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import { Icon } from '@fluent-ui/icons'
import * as CSS from 'csstype'
import { CommandContext } from '../Command/Command'

export interface CommandButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactElement
}

const CommandButtonStyled = styled.button<{
  reveal?: boolean
}>`
  border: none;
  outline: none;
  padding: 10px 22px;
  line-height: 1;
  transition: ${th.transition('button')};
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: inherit;
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('gray100') : 'transparent'};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('gray200') : th.color('secondary')};
  }
  &:active {
    color: black;
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('gray300') : th.color('primary')};
  }
`

const CommandButtonTextStyled = styled.div<{
  icon?: boolean
}>`
  font-size: 12px;
  margin-top: ${({ icon }): string => (icon ? '6px' : '0')};
  text-overflow: ellipsis;
  overflow: hidden;
`

const CommandButton = forwardRef<HTMLButtonElement, CommandButtonProps>(
  (
    { icon, onClick, children, ...rest }: CommandButtonProps,
    ref
  ): ReactElement => {
    const reveal = useContext(CommandContext)
    return (
      <CommandButtonStyled
        onClick={onClick}
        ref={ref}
        reveal={reveal}
        {...rest}
      >
        {icon && <Icon type={icon} />}
        {children && (
          <CommandButtonTextStyled icon={!!icon}>
            {children}
          </CommandButtonTextStyled>
        )}
      </CommandButtonStyled>
    )
  }
)

CommandButton.displayName = 'FCommandButton'

export default CommandButton
