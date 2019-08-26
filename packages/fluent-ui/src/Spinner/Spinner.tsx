import * as React from 'react'
import { StyledSpinnerWrapper, StyledSpinner } from './Spinner.styled'
import { SpinnerProps, SpinnerPropTypes } from './Spinner.type'
import Typography from '../Typography'

const Spinner: React.FC<SpinnerProps> = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'medium', label, labelPosition = 'bottom', ...rest }, ref): React.ReactElement => {
    const gap = React.useMemo((): object => {
      switch (labelPosition) {
        case 'top':
          return { marginBottom: '8px' }
        case 'bottom':
          return { marginTop: '8px' }
        case 'left':
          return { marginRight: '8px' }
        case 'right':
          return { marginLeft: '8px' }
      }
    }, [labelPosition])
    return (
      <StyledSpinnerWrapper labelPosition={labelPosition} {...rest}>
        {label && (
          <Typography variant="body2" as="label" color="primary.default" style={gap}>
            {label}
          </Typography>
        )}
        <StyledSpinner ref={ref} size={size} />
      </StyledSpinnerWrapper>
    )
  }
)

Spinner.displayName = 'FSpinner'

Spinner.propTypes = SpinnerPropTypes

export default Spinner
