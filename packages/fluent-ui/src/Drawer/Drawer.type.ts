export interface DrawerProps {
  children: React.ReactElement
  visible: boolean
  onChange?: (visible: boolean) => void
  anchor?: 'left' | 'top' | 'right' | 'bottom'
}
