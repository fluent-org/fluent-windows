import * as React from 'react'
import {
  StyledLabel,
  StyledLabelText,
  StyledCheckboxWrapper,
  StyledCheckbox
} from './Checkbox.styled'
import { Accept as AcceptIcon } from '@fluent-ui/icons'
import { CheckboxProps, CheckboxPropTypes } from './Checkbox.type'

const Checkbox: React.FC<CheckboxProps> = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, value, onChange, disabled, children, ...rest }, ref): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.checked)
    }
    return (
      <StyledLabel disabled={disabled}>
        <StyledCheckboxWrapper checked={checked} disabled={disabled}>
          {checked && <AcceptIcon />}
          <StyledCheckbox
            ref={ref}
            type="checkbox"
            checked={checked}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            {...rest}
          />
        </StyledCheckboxWrapper>
        <StyledLabelText>{children}</StyledLabelText>
      </StyledLabel>
    )
  }
)

Checkbox.displayName = 'FCheckbox'

Checkbox.propTypes = CheckboxPropTypes

export default Checkbox
