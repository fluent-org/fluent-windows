import * as React from 'react'
import { StyledFieldWrapper, StyledFieldItem, StyledFieldLabel } from './Field.styled'
import { FieldProps } from './Field.type'
import Typography from '../../../Typography'
import Transition from '../../../Transition'
import { FormContext } from '../../Form.context'
import { createValidator } from '../../Form.validator'

const Field = React.forwardRef<HTMLTableRowElement, FieldProps>(
  ({ children, onChange, label, name, rules, ...rest }: FieldProps, ref): React.ReactElement => {
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
      createValidator(
        descriptor,
        state.values,
        (errors: any[]): void => {
          dispatch({ type: 'onError', payload: errors })
        }
      )
    }, [dispatch, descriptor, state.values])

    const required = React.useMemo(
      (): boolean => (rules ? !!rules.find((v): boolean => v.required === true) : false),
      [rules]
    )

    // About the error message
    const { errors } = state
    const selfError = errors[name]

    return (
      <StyledFieldWrapper ref={ref}>
        {label && (
          <Typography variant="body1" as="td">
            <StyledFieldLabel htmlFor={name} required={required}>
              {label}
            </StyledFieldLabel>
          </Typography>
        )}
        <StyledFieldItem>
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
        </StyledFieldItem>
      </StyledFieldWrapper>
    )
  }
)

Field.displayName = 'FFormField'

export default Field
