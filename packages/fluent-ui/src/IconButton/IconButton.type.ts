import { ButtonProps, ButtonPropTypes } from '../Button'

export type IconButtonClassProps =
  | 'root'
  | 'variantStandard'
  | 'variantPrimary'
  | 'sizeSmall'
  | 'sizeMedium'
  | 'sizeLarge'

// eslint-disable-next-line
export interface IconButtonProps extends ButtonProps {}

export const IconButtonPropTypes = ButtonPropTypes
