export interface ButtonProps
  extends React.ComponentPropsWithoutRef<'button'>,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  variant?: 'standard' | 'primary'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
