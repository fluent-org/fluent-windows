import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from './FormLabel.styled'
import { FormLabelClassProps, FormLabelProps, FormLabelPropTypes } from './FormLabel.type'

import Typography from '../Typography'

export const name = 'FormLabel'

const useStyles = createUseStyles<FormLabelClassProps>(styles, { name })

const FormLabel: React.FC<FormLabelProps> = React.forwardRef<HTMLDivElement, FormLabelProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'label',
      className: classNameProp,
      label,
      children,
      position = 'right',
      ...rest
    } = props

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.positionTop]: position === 'top',
        [classes.positionBottom]: position === 'bottom',
        [classes.positionLeft]: position === 'left',
        [classes.positionRight]: position === 'right'
      },
      classNameProp
    )

    const gap = React.useMemo((): object => {
      switch (position) {
        case 'top':
          return { marginTop: '8px' }
        case 'bottom':
          return { marginBottom: '8px' }
        case 'left':
          return { marginLeft: '8px' }
        case 'right':
          return { marginRight: '8px' }
      }
    }, [position])

    return (
      <Typography className={className} variant="body2" as={as} ref={ref} {...rest}>
        <span className={classes.text}>{label}</span>
        {React.cloneElement(children, { style: gap })}
      </Typography>
    )
  }
)

FormLabel.displayName = `F${name}`

FormLabel.propTypes = FormLabelPropTypes

FormLabel.defaultProps = {
  position: 'right'
}

export default FormLabel
