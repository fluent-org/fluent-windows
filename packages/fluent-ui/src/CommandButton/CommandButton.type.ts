export interface CommandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    StyledProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode
}
