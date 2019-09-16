import { Style, Styles } from 'jss'
import { FormFieldClassProps } from '../../Form.type'
import { Theme } from '../../../styles'

const label: Style = {
  position: 'relative'
}

const labelRequired = (theme: Theme): Style => ({
  '&::after': {
    content: '*',
    position: 'absolute',
    right: -9,
    top: 0,
    fontSize: 14,
    color: theme.colors!.error!.default
  }
})

export const styles = (theme: Theme): Styles<FormFieldClassProps> => ({
  label,
  labelRequired: labelRequired(theme)
})
