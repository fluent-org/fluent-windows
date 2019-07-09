import * as React from 'react'
import { StyledCheckboxWrapper, StyledCheckbox } from './Checkbox.styled'
import { Accept as AcceptIcon } from '@fluent-ui/icons'

interface CheckboxProps {
  checked?: boolean
  value?: string
  onChange?: (checked: boolean) => void
  disabled?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { checked, value, onChange, disabled }: CheckboxProps,
    ref
  ): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.checked)
    }
    return (
      <StyledCheckboxWrapper checked={checked} disabled={disabled}>
        {checked && <AcceptIcon />}
        <StyledCheckbox
          ref={ref}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </StyledCheckboxWrapper>
    )
  }
)

Checkbox.displayName = 'FCheckbox'

export default Checkbox
