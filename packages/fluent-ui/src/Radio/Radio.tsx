import * as React from 'react'
import { StyledRadioWrapper, StyledRadio, StyledCircle } from './Radio.styled'

interface RadioProps {
  checked?: boolean
  value?: string
  onChange?: (checked: string) => void
  disabled?: boolean
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    { checked, value, onChange, disabled }: RadioProps,
    ref
  ): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.value)
    }
    return (
      <StyledRadioWrapper checked={checked} disabled={disabled}>
        {checked && <StyledCircle disabled={disabled} />}
        <StyledRadio
          ref={ref}
          type="radio"
          checked={checked}
          value={value}
          onChange={handleChange}
          disabled={disabled}
        />
      </StyledRadioWrapper>
    )
  }
)

Radio.displayName = 'FRadio'

export default Radio
