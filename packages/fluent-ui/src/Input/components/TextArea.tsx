import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './TextArea.styled'
import { Theme } from '../../styles'
import { TextAreaClassProps, TextAreaProps, TextAreaPropTypes } from './TextArea.type'
import FormLabel from '../../FormLabel'
import { toUpperCase } from '../../utils'

export const name = 'TextArea'

const useStyles = createUseStyles<Theme, TextAreaClassProps>(styles, { name })

const TextArea: React.FC<TextAreaProps> = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref): React.ReactElement => {
    const {
      className: classNameProp,
      style,
      value,
      onChange,
      onFocus,
      onBlur,
      label,
      placeholder,
      disabled,
      error,
      ghost,
      resize = 'both',
      ...rest
    } = props

    const [_value, _setValue] = React.useState(value)
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement> | null): void => {
        onChange && onChange(e ? e.target.value : '')
        _setValue(e ? e.target.value : '')
      },
      [onChange]
    )

    const _label = React.useMemo((): string => (label ? toUpperCase(label) : ''), [label])
    const [focus, setFocus] = React.useState(false)
    const handleFocus = React.useCallback(
      (e): void => {
        typeof onFocus === 'function' && onFocus(e)
        setFocus(true)
      },
      [onFocus]
    )
    const handleBlur = React.useCallback(
      (e): void => {
        typeof onBlur === 'function' && onBlur(e)
        setFocus(false)
      },
      [onBlur]
    )

    const classes = useStyles({ ...props, focus, _value })
    const wrapperClassName = classNames(classes.wrapper, {
      [classes.disabled]: disabled
    })

    const className = classNames(
      classes.root,
      {
        [classes.error]: error,
        [classes.ghost]: ghost,
        [classes.resize]: !!resize
      },
      classNameProp
    )

    return (
      <FormLabel className={wrapperClassName} label={_label} style={style}>
        <textarea
          className={className}
          ref={ref}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          {...rest}
        />
      </FormLabel>
    )
  }
)

TextArea.displayName = `F${name}`

TextArea.propTypes = TextAreaPropTypes

TextArea.defaultProps = {
  resize: 'both'
}

export default TextArea
