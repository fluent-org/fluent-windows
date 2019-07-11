import * as React from 'react'
import {
  StyledLabel,
  StyledLabelText,
  StyledToggleWrapper,
  StyledToggleCircle,
  StyledToggle
} from './Toggle.styled'

interface ToggleProps {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
  children?: React.ReactNode
}

const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  (
    { checked, value, onChange, disabled, children }: ToggleProps,
    ref
  ): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.checked)
    }
    return (
      <StyledLabel disabled={disabled}>
        <StyledToggleWrapper checked={checked} disabled={disabled}>
          <StyledToggleCircle checked={checked} disabled={disabled} />
          <StyledToggle
            ref={ref}
            type="checkbox"
            checked={checked}
            value={value}
            onChange={handleChange}
            disabled={disabled}
          />
        </StyledToggleWrapper>
        <StyledLabelText>{children}</StyledLabelText>
      </StyledLabel>
    )
  }
)

Toggle.displayName = 'FToggle'

export default Toggle
