import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
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
      [classes.circleDisable]: disabled
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.value)
    }
    return (
      <Component className={className}>
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
