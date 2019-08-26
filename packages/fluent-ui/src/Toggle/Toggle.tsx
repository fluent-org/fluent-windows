import * as React from 'react'
import {
  StyledLabel,
  StyledLabelText,
  StyledToggleWrapper,
  StyledToggleCircle,
  StyledToggle
} from './Toggle.styled'
import { ToggleProps, TogglePropTypes } from './Toggle.type'

const Toggle: React.FC<ToggleProps> = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked, value, onChange, disabled, children, ...rest }, ref): React.ReactElement => {
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
            {...rest}
          />
        </StyledToggleWrapper>
        <StyledLabelText>{children}</StyledLabelText>
      </StyledLabel>
    )
  }
)

Toggle.displayName = 'FToggle'

Toggle.propTypes = TogglePropTypes

export default Toggle
