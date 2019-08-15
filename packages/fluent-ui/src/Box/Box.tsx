import * as React from 'react'
import { BaseBox, AcrylicBox } from './Box.styled'
import { BoxProps } from './Box.type'

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ acrylic, ...rest }: BoxProps, ref): React.ReactElement => {
    if (acrylic) {
      return <AcrylicBox ref={ref} {...rest} />
    }
    return <BaseBox ref={ref} {...rest} />
  }
)

Box.defaultProps = {
  acrylic: false
}

Box.displayName = 'FBox'

export default Box
