import * as PropTypes from 'prop-types'

export interface PortalProps {
  children: React.ReactElement
  container?: Element | (() => Element) | null
  disablePortal?: boolean
}

export const PortalPropTypes = {
  children: PropTypes.element.isRequired,
  container: PropTypes.any,
  disablePortal: PropTypes.bool
}
