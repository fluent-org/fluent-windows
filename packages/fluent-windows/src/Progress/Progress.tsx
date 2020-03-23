import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from './Progress.styled'
import { Theme } from '../styles'
import { ProgressClassProps, ProgressProps, ProgressPropTypes } from './Progress.type'

export const name = 'Progress'

const useStyles = createUseStyles<Theme, ProgressClassProps>(styles, { name })

const Progress: React.FC<ProgressProps> = React.forwardRef<HTMLDivElement, ProgressProps>(
  (props, ref): React.ReactElement => {
    const { as: Component = 'div', className: classNameProp, value, ...rest } = props

    const isIndeterminate = !(typeof value === 'number')
    const transform = !isIndeterminate && value ? value - 100 : false

    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)
    const progressClassName = classNames(classes.progress, {
      [classes.isIndeterminate]: isIndeterminate
    })

    return (
      <Component className={className} ref={ref} {...rest}>
        <div
          className={progressClassName}
          style={transform ? { transform: `translateX(${transform}%)` } : {}}
        />
      </Component>
    )
  }
)

Progress.displayName = `F${name}`

Progress.propTypes = ProgressPropTypes

export default Progress
