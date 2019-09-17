import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Spinner.styled'
import { Theme } from '../styles'
import { SpinnerClassProps, SpinnerProps, SpinnerPropTypes } from './Spinner.type'

export const name = 'Spinner'

const useStyles = createUseStyles<Theme, SpinnerClassProps>(styles, { name })

const Spinner: React.FC<SpinnerProps> = React.forwardRef<HTMLDivElement, SpinnerProps>(
  (props, ref): React.ReactElement => {
    const { as: Component = 'span', className: classNameProp, size = 'medium', ...rest } = props

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.sizeSmall]: size === 'small',
        [classes.sizeMedium]: size === 'medium',
        [classes.sizeLarge]: size === 'large'
      },
      classNameProp
    )

    return <Component className={className} ref={ref} {...rest} />
  }
)

Spinner.displayName = `F${name}`

Spinner.propTypes = SpinnerPropTypes

Spinner.defaultProps = {
  size: 'medium'
}

export default Spinner
