import * as React from 'react'
import { StyledRadioWrapper, StyledRadio, StyledCircle } from './Radio.styled'
import { StyledLabel, StyledLabelText } from '../Checkbox/Checkbox.styled'

interface RadioProps {
  checked?: boolean
  value?: string
  onChange?: (checked: string) => void
  disabled?: boolean
  children?: React.ReactNode
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    { checked, value, onChange, disabled, children }: RadioProps,
    ref
  ): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.value)
    }
    return (
      <StyledLabel disabled={disabled}>
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
        <StyledLabelText>{children}</StyledLabelText>
      </StyledLabel>
    )
  }
)

Radio.displayName = 'FRadio'

export default Radio
