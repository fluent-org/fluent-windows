import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-windows/styles'
import { RadioClassProps, RadioProps, RadioPropTypes } from './Radio.type'
import { Theme } from '../styles'
import { styles } from './Radio.styled'

export const name = 'Radio'

const useStyles = createUseStyles<Theme, RadioClassProps>(styles, { name })

const Radio: React.FC<RadioProps> = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'div',
      className: classNameProp,
      style,
      checked,
      value,
      onChange,
      disabled,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.checked]: checked,
        [classes.disabled]: disabled
      },
      classNameProp
    )
    const circleClassName = classNames(classes.circle, {
      [classes.circleChecked]: checked,
      [classes.circleDisabled]: disabled
    })

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(e.target.value)
      },
      [onChange]
    )
    return (
      <Component className={className} style={style}>
        <div className={circleClassName} />
        <input
          ref={ref}
          type="radio"
          checked={checked}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...rest}
        />
      </Component>
    )
  }
)

Radio.displayName = `F${name}`

Radio.propTypes = RadioPropTypes

export default Radio
