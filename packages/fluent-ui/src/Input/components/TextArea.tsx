import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './TextArea.styled'
import { Theme } from '../../styles'
import { TextAreaClassProps, TextAreaProps, TextAreaPropTypes } from './TextArea.type'

export const name = 'TextArea'

const useStyles = createUseStyles<Theme, TextAreaClassProps>(styles, { name })

const TextArea: React.FC<TextAreaProps> = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref): React.ReactElement => {
    const {
      className: classNameProp,
      value,
      onChange,
      placeholder,
      disabled,
      error,
      ghost,
      resize = 'both',
      ...rest
    } = props

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement> | null): void => {
        onChange && onChange(e ? e.target.value : '')
      },
      [onChange]
    )

    const classes = useStyles(props)
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
      <textarea
        className={className}
        ref={ref}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
    )
  }
)

TextArea.displayName = `F${name}`

TextArea.propTypes = TextAreaPropTypes

TextArea.defaultProps = {
  resize: 'both'
}

export default TextArea
