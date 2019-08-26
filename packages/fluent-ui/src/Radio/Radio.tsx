import * as React from 'react'
import { StyledLabel, StyledLabelText } from '../Checkbox/Checkbox.styled'
import { StyledRadioWrapper, StyledRadio, StyledCircle } from './Radio.styled'
import { RadioProps, RadioPropTypes } from './Radio.type'

const Radio: React.FC<RadioProps> = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ checked, value, onChange, disabled, children, ...rest }, ref): React.ReactElement => {
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
            {...rest}
          />
        </StyledRadioWrapper>
        <StyledLabelText>{children}</StyledLabelText>
      </StyledLabel>
    )
  }
)

Radio.displayName = 'FRadio'

Radio.propTypes = RadioPropTypes

export default Radio
