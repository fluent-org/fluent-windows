import * as React from 'react'
import { StyledWrapper, StyledInput, StyledIcon } from './Input.styled'
import { ChromeClose as ChromeCloseIcon } from '@fluent-ui/icons'

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'onChange' | 'type'
  > {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  cleared?: boolean
  password?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { value, onChange, placeholder, disabled, cleared, password, ...rest }: InputProps,
    ref
  ): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement> | null): void {
      onChange && onChange(e ? e.target.value : '')
    }
    function handleClear(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      e.stopPropagation()
      handleChange(null)
    }
    return (
      <StyledWrapper>
        <StyledInput
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          cleared={cleared}
          type={password ? 'password' : 'text'}
          {...rest}
        />
        {value && cleared && (
          <StyledIcon onClick={handleClear}>
            <ChromeCloseIcon />
          </StyledIcon>
        )}
      </StyledWrapper>
    )
  }
)

Input.displayName = 'FInput'

export default Input
