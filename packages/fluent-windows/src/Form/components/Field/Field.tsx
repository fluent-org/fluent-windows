import * as React from 'react'
import { createUseStyles } from '@fluent-windows/styles'
import { styles } from './Field.styled'
import { FieldProps, FieldPropTypes, FormFieldClassProps } from '../../Form.type'
import { Theme } from '../../../styles'

import Typography from '../../../Typography'
import Transition from '../../../Transition'
import { FormContext } from '../../Form.context'
import { createValidator } from '../../Form.validator'
import classNames from 'classnames'

export const name = 'FormField'

const useStyles = createUseStyles<Theme, FormFieldClassProps>(styles, { name })

const Field: React.FC<FieldProps> = React.forwardRef<HTMLTableRowElement, FieldProps>(
  (props, ref): React.ReactElement => {
    const { children, onChange, label, name, rules, ...rest } = props

    const { state, dispatch, descriptor } = React.useContext(FormContext)

    const [value, setValue] = React.useState(state.values[name] || '')

    const handleValueChange = React.useCallback(
      (v): void => {
        dispatch({
          type: 'onChange',
          payload: {
            [name]: v
          }
        })

        onChange ? onChange(v) : setValue(v)
      },
      [onChange, dispatch, name]
    )

    React.useEffect((): void => {
      createValidator(descriptor, state.values, (errors: any[]): void => {
        dispatch({ type: 'onError', payload: errors })
      })
    }, [dispatch, descriptor, state.values])

    const required = React.useMemo(
      (): boolean => (rules ? !!rules.find((v): boolean => v.required === true) : false),
      [rules]
    )

    // About the error message
    const { errors } = state
    const selfError = errors[name]

    const classes = useStyles(props)
    const labelClassName = classNames(classes.label, {
      [classes.labelRequired]: required
    })

    return (
      <tr ref={ref}>
        {label && (
          <Typography variant="body1" as="td">
            <label className={labelClassName} htmlFor={name}>
              {label}
            </label>
          </Typography>
        )}
        <td>
          {React.cloneElement(children, {
            name,
            value,
            onChange: handleValueChange,
            error: !!selfError,
            ...rest
          })}
          <Transition visible={!!selfError} wrapper={false} mountOnEnter unmountOnExit>
            <Typography variant="body2" color="error.default">
              {selfError}
            </Typography>
          </Transition>
        </td>
      </tr>
    )
  }
)

Field.displayName = 'FFormField'

Field.propTypes = FieldPropTypes

export default Field
