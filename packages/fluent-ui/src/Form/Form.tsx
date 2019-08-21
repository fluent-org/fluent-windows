import * as React from 'react'
import { StyledFormWrapper, StyledFormTable } from './Form.styled'
import { FormProps, FormType, FormValue, FormState } from './Form.type'
import Field from './components/Field'
import { FormContext } from './Form.context'
import { createValidator } from './Form.validator'

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  (
    { children, prefix, suffix, initialState, onSubmit, ...rest }: FormProps,
    ref
  ): React.ReactElement => {
    const childrenArray = React.useMemo(
      (): React.ReactElement[] => React.Children.toArray(children),
      [children]
    )
    const fields = React.useMemo(
      (): FormValue =>
        initialState ||
        childrenArray.reduce((acc, cur): FormValue => {
          return {
            ...acc,
            [cur.props.name]: ''
          }
        }, {}),
      [childrenArray, initialState]
    )
    const reducer = React.useCallback(
      (state: FormValue, action): FormState => {
        switch (action.type) {
          case 'reset':
            return { values: fields, errors: {} }
          case 'onChange':
            return { values: { ...state.values, ...action.payload }, errors: state.errors }
          case 'onError':
            // eslint-disable-next-line
            const errors = Array.isArray(action.payload)
              ? action.payload.reduce(
                  (acc: FormValue, cur: any): FormValue => ({
                    ...acc,
                    [cur.field]: cur.message
                  }),
                  {}
                )
              : {}
            return { values: state.values, errors }
          default:
            throw new Error(
              'The `type` provided by `dispatch` does not conform to the specification'
            )
        }
      },
      [fields]
    )
    const [state, dispatch] = React.useReducer(reducer, { values: fields, errors: {} })
    const descriptor = React.useMemo(
      (): FormValue =>
        childrenArray.reduce((acc, cur): any => {
          return {
            ...acc,
            [cur.props.name]: cur.props.rules
          }
        }, {}),
      [childrenArray]
    )
    const contextValue = {
      state,
      dispatch,
      descriptor
    }
    // Used to control the content triggered by the submit event
    const handleSubmit = React.useCallback(
      (e: React.FormEvent): void => {
        e.preventDefault()
        createValidator(
          descriptor,
          state.values,
          (errors: any[]): void => {
            dispatch({ type: 'onError', payload: errors })
            onSubmit && onSubmit(state.values, errors)
          }
        )
      },
      [state, onSubmit, descriptor]
    )

    return (
      <StyledFormWrapper ref={ref} onSubmit={handleSubmit} {...rest}>
        <FormContext.Provider value={contextValue}>
          <StyledFormTable>
            <caption>{prefix}</caption>
            <tbody>
              {React.Children.map(children, (child): React.ReactElement => child)}
              <tr>
                <td colSpan={2}>{suffix}</td>
              </tr>
            </tbody>
          </StyledFormTable>
        </FormContext.Provider>
      </StyledFormWrapper>
    )
  }
)

Object.defineProperty(Form, 'Field', {
  get(): typeof Field {
    return Field
  }
})

Form.displayName = 'FForm'

export default Form as FormType
