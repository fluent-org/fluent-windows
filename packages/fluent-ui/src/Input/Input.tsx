import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Input.styled'
import { Theme } from '../styles'
import { InputClassProps, InputProps, InputPropTypes, InputType } from './Input.type'

import { CloseLine as CloseLineIconIcon } from '@fluent-ui/icons'
import Transition from '../Transition'
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
      placeholder,
      disabled,
      cleared,
      password,
      error,
      prefix = null,
      suffix = null,
      ghost,
      ...rest
    } = props

    const clearedRef = React.useRef<HTMLSpanElement>(null)
    const [clearedHeight, setClearedHeight] = React.useState(0)
    React.useEffect((): void => {
      if (clearedRef && clearedRef.current) {
        setClearedHeight(clearedRef.current.offsetHeight)
      }
    }, [])
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement> | null): void => {
        onChange && onChange(e ? e.target.value : '')
      },
      [onChange]
    )
    const handleClear = React.useCallback(
      (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        e.stopPropagation()
        handleChange(null)
      },
      [handleChange]
    )

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.error]: error,
        [classes.ghost]: ghost
      },
      classNameProp
    )
    const clearedInputStyle = React.useMemo(
      (): object =>
        cleared
          ? {
              paddingRight: clearedHeight + (suffix ? 30 : 0)
            }
          : {},
      [cleared, clearedHeight, suffix]
    )

    return (
      <div className={classes.wrapper} style={style}>
        {prefix && <div className={classes.prefix}>{prefix}</div>}
        <input
          className={className}
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          type={password ? 'password' : 'text'}
          style={clearedInputStyle}
          {...rest}
        />
        {suffix && <div className={classes.suffix}>{suffix}</div>}
        {cleared && (
          <Transition visible={!!value} wrapper={false}>
            <span
              className={classes.clearedIcon}
              onClick={handleClear}
              ref={clearedRef}
              style={{
                width: clearedHeight
              }}
            >
              <CloseLineIconIcon />
            </span>
          </Transition>
        )}
      </div>
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
  prefix: null,
  suffix: null
}

export default Input as InputType
