import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Input.styled'
import { Theme } from '../styles'
import { InputClassProps, InputProps, InputPropTypes, InputType } from './Input.type'
import { toUpperCase } from '../utils'

import FormLabel from '../FormLabel'
import { CloseLine as CloseLineIconIcon } from '@fluent-ui/icons'
import Transition from '../Transition'
import IconButton from '../IconButton'
import TextArea from './components/TextArea'

export const name = 'Input'

const useStyles = createUseStyles<Theme, InputClassProps>(styles, { name })

const Input: React.FC<InputProps> = React.forwardRef<HTMLInputElement, InputProps>(
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
      cleared,
      password,
      error,
      // TODO cleared 和 suffix 同时存在时应该 warning
      suffix = null,
      ghost,
      ...rest
    } = props

    const clearedRef = React.useRef<HTMLButtonElement>(null)
    const [_value, _setValue] = React.useState(value)
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement> | null): void => {
        onChange && onChange(e ? e.target.value : '')
        _setValue(e ? e.target.value : '')
      },
      [onChange]
    )
    const handleClear = React.useCallback(
      (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        e.stopPropagation()
        handleChange(null)
        // TODO 应该引入 warning 当前组件为非受控组件时提示
      },
      [handleChange]
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
        [classes.ghost]: ghost
      },
      classNameProp
    )

    return (
      <FormLabel className={wrapperClassName} label={_label} style={style}>
        <div>
          <input
            className={className}
            ref={ref}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            type={password ? 'password' : 'text'}
            {...rest}
          />
          {suffix && <div className={classes.suffix}>{suffix}</div>}
          {cleared && (
            <Transition visible={!!value} wrapper={false}>
              <IconButton
                className={classes.clearedIcon}
                onClick={handleClear}
                size="small"
                ref={clearedRef}
              >
                <CloseLineIconIcon />
              </IconButton>
            </Transition>
          )}
        </div>
      </FormLabel>
    )
  }
)

Object.defineProperty(Input, 'TextArea', {
  get(): typeof TextArea {
    return TextArea
  }
})

Input.displayName = `F${name}`

Input.propTypes = InputPropTypes

Input.defaultProps = {
  suffix: null
}

export default Input as InputType
