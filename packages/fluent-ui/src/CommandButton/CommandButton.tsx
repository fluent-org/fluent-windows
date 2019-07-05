import * as React from 'react'
import {
  ReactElement,
  MouseEventHandler,
  forwardRef,
  ButtonHTMLAttributes,
  useContext,
  ReactNode
} from 'react'
import styled from '@xstyled/styled-components'
import { th } from '@xstyled/system'
import * as Icons from '@fluent-ui/icons'
import * as CSS from 'csstype'
import { CommandContext } from '../Command/Command'

export interface CommandButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  icon?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  children?: ReactNode
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: inherit;
  background-color: ${({ reveal }): CSS.ColorProperty =>
    reveal ? th.color('primary.1') : 'transparent'};
  &:hover {
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('primary.2') : th.color('primary.7')};
  }
  &:active {
    color: black;
    background-color: ${({ reveal }): CSS.ColorProperty =>
      reveal ? th.color('primary.4') : th.color('primary.8')};
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

type IconType = keyof (typeof Icons)

const CommandButton = forwardRef<HTMLButtonElement, CommandButtonProps>(
  (
    { icon, onClick, children, ...rest }: CommandButtonProps,
    ref
  ): ReactElement => {
    const reveal = useContext(CommandContext)
    const Icon = Icons[icon as IconType]
    return (
      <CommandButtonStyled
        onClick={onClick}
        ref={ref}
        reveal={reveal}
        {...rest}
      >
        {icon && <Icon />}
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
