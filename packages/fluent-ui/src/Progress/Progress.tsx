import * as React from 'react'
import { StyledProgressWrapper, StyledProgress } from './Progress.styled'
import { ProgressProps, ProgressPropTypes } from './Progress.type'

const Progress: React.FC<ProgressProps> = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, ...rest }, ref): React.ReactElement => {
    const isIndeterminate = !(typeof value === 'number')
    const transform = !isIndeterminate && value ? value - 100 : false
    return (
      <StyledProgressWrapper ref={ref} {...rest}>
        <StyledProgress
          isIndeterminate={isIndeterminate}
          style={transform ? { transform: `translateX(${transform}%)` } : {}}
        />
      </StyledProgressWrapper>
    )
  }
)

Progress.displayName = 'FProgress'

Progress.propTypes = ProgressPropTypes

export default Progress
