import { createContext } from 'react'

interface FormContextType {
  value: any
  dispatch: React.Dispatch<any>
  descriptor: any
}

// @ts-ignore
export const FormContext = createContext<FormContextType>(null)
