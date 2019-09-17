import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Input.styled'
import { Theme } from '../styles'
import { InputClassProps, InputProps, InputPropTypes } from './Input.type'

import { ChromeClose as ChromeCloseIcon } from '@fluent-ui/icons'
import Transition from '../Transition'

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
      ...rest
    } = props

    const clearedRef = React.useRef<HTMLSpanElement>(null)
    const [clearedHeight, setClearedHeight] = React.useState(0)
    React.useEffect((): void => {
      if (clearedRef && clearedRef.current) {
        setClearedHeight(clearedRef.current.offsetHeight)
      }
    }, [])
    function handleChange(e: React.ChangeEvent<HTMLInputElement> | null): void {
      onChange && onChange(e ? e.target.value : '')
    }
    function handleClear(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      e.stopPropagation()
      handleChange(null)
    }

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.error]: error
      },
      classNameProp
    )
    const clearedInputStyle = React.useMemo(
      (): object =>
        cleared
          ? {
              paddingRight: clearedHeight
            }
          : {},
      [cleared, clearedHeight]
    )

    return (
      <div className={classes.wrapper} style={style}>
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
              <ChromeCloseIcon />
            </span>
          </Transition>
        )}
      </div>
    )
  }
)

Input.displayName = `F${name}`

Input.propTypes = InputPropTypes

export default Input
