import * as React from 'react'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Form.styled'
import {
  FormProps,
  FormType,
  FormValue,
  FormState,
  FormPropTypes,
  FormClassProps
} from './Form.type'

import Field from './components/Field'
import { FormContext } from './Form.context'
import { createValidator } from './Form.validator'
import classNames from 'classnames'

export const name = 'Form'

const useStyles = createUseStyles<FormClassProps>(styles, { name })

const Form: React.FC<FormProps> = React.forwardRef<HTMLFormElement, FormProps>(
  (props, ref): React.ReactElement => {
    const {
      className: classNameProp,
      children,
      prefix,
      suffix,
      initialState,
      onSubmit,
      ...rest
    } = props

    const childrenArray = React.useMemo(
      (): React.ReactElement[] =>
        React.Children.toArray(children)
          .map((child: any): any => !!child.props.rules && child)
          .filter((v): React.ReactElement => v),
      [children]
    )
    const fields = React.useMemo(
      (): FormValue =>
        initialState ||
        childrenArray.reduce(
          (acc, cur): FormValue => ({
            ...acc,
            [cur.props.name]: ''
          }),
          {}
        ),
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
        childrenArray.reduce(
          (acc, cur): any => ({
            ...acc,
            [cur.props.name]: cur.props.rules
          }),
          {}
        ),
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

    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)

    return (
      <form className={className} ref={ref} onSubmit={handleSubmit} {...rest}>
        <FormContext.Provider value={contextValue}>
          <table className={classes.table}>
            <caption>{prefix}</caption>
            <tbody>
              {React.Children.map(
                children,
                (child: React.ReactElement): React.ReactElement => child
              )}
              <tr>
                <td colSpan={2}>{suffix}</td>
              </tr>
            </tbody>
          </table>
        </FormContext.Provider>
      </form>
    )
  }
)

Object.defineProperty(Form, 'Field', {
  get(): typeof Field {
    return Field
  }
})

Form.displayName = 'FForm'

Form.propTypes = FormPropTypes

export default Form as FormType
