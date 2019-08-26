import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

type Anchor = 'left' | 'top' | 'right' | 'bottom'

export interface DrawerProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement, 'onChange'> {
  children: React.ReactElement
  visible: boolean
  onChange?: (visible: boolean) => void
  anchor?: Anchor
}

export const DrawerPropTypes = {
  children: PropTypes.element.isRequired,
  visible: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  anchor: PropTypes.oneOf<Anchor>(['left', 'top', 'right', 'bottom'])
}
