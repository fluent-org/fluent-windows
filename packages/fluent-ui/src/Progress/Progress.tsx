import * as React from 'react'
import { StyledProgressWrapper, StyledProgress } from './Progress.styled'
import { ProgressProps } from './Progress.type'

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ value, ...rest }: ProgressProps, ref): React.ReactElement => {
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

export default Progress
