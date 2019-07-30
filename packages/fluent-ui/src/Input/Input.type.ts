export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'onChange' | 'type'
  > {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  cleared?: boolean
  password?: boolean
  error?: boolean
}
