import * as React from 'react'
import { StyledLabel, StyledLabelText } from '../Checkbox/Checkbox.styled'
import { StyledRadioWrapper, StyledRadio, StyledCircle } from './Radio.styled'
import { RadioProps } from './Radio.type'

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ checked, value, onChange, disabled, children }: RadioProps, ref): React.ReactElement => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.value)
    }
    return (
      <StyledLabel disabled={disabled}>
        <StyledRadioWrapper checked={checked} disabled={disabled}>
          <StyledCircle disabled={disabled} checked={checked} />
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
