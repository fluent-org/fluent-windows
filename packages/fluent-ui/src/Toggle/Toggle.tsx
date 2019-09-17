import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { ToggleClassProps, ToggleProps, TogglePropTypes } from './Toggle.type'
import { Theme } from '../styles'
import { styles } from './Toggle.styled'

export const name = 'Toggle'

const useStyles = createUseStyles<Theme, ToggleClassProps>(styles, { name })

const Toggle: React.FC<ToggleProps> = React.forwardRef<HTMLInputElement, ToggleProps>(
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
        [classes.disabled]: disabled,
        [classes.checkedAndDisabled]: checked && disabled
      },
      classNameProp
    )
    const circleClassName = classNames(classes.circle, {
      [classes.circleChecked]: checked,
      [classes.circleDisabled]: disabled,
      [classes.circleCheckedAndDisabled]: checked && disabled
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
      onChange && onChange(e.target.checked)
    }
    return (
      <Component className={className} style={style}>
        <div className={circleClassName} />
        <input
          ref={ref}
          type="checkbox"
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

Toggle.displayName = `F${name}`

Toggle.propTypes = TogglePropTypes

export default Toggle
