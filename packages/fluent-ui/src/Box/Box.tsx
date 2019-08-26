import * as React from 'react'
import { BaseBox, AcrylicBox } from './Box.styled'
import { BoxProps, BoxPropTypes } from './Box.type'
import { getSystemPropTypes, system } from '../styles/styled'

const Box: React.FC<BoxProps> = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ acrylic = false, ...rest }, ref): React.ReactElement => {
    if (acrylic) {
      return <AcrylicBox ref={ref} {...rest} />
    }
    return <BaseBox ref={ref} {...rest} />
  }
)

Box.displayName = 'FBox'

Box.propTypes = {
  ...getSystemPropTypes(system),
  ...BoxPropTypes
}

export default Box
