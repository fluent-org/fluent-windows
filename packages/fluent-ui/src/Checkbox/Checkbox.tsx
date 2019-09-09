import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { Accept as AcceptIcon } from '@fluent-ui/icons'
import { CheckboxProps, CheckboxPropTypes, CheckboxClassProps } from './Checkbox.type'
import { Theme } from '../styles'
import { styles } from './Checkbox.styled'

export const name = 'Checkbox'

const useStyles = createUseStyles<Theme, CheckboxClassProps>(styles, { name })

const Checkbox: React.FC<CheckboxProps> = React.forwardRef<HTMLInputElement, CheckboxProps>(
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

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>): void => {
        onChange && onChange(e.target.checked)
      },
      [onChange]
    )

    return (
      <Component className={className}>
        {checked && <AcceptIcon />}
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

Checkbox.displayName = `F${name}`

Checkbox.propTypes = CheckboxPropTypes

export default Checkbox
