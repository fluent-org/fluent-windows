import * as React from 'react'
import { omit } from '../utils'
import { BaseBox, AcrylicBox } from './Box.styled'
import { BoxProps } from './Box.type'

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref): React.ReactElement => {
    const otherProps = omit(props, ['acrylic'])
    if (props.acrylic) {
      return <AcrylicBox ref={ref} {...otherProps} />
    }
    return <BaseBox ref={ref} {...otherProps} />
  }
)

Box.defaultProps = {
  acrylic: false
}

Box.displayName = 'FBox'

export default Box
