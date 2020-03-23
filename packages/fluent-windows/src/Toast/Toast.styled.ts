import { themeGet } from '@fluent-windows/styles'
import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ToastClassProps } from './Toast.type'

const root = (theme: Theme): Style => ({
  position: 'fixed',
  zIndex: 1001,
  backgroundColor: themeGet(`colors.white.default`, 'white')(theme),
  boxShadow: themeGet(
    `shadows.3`,
    '0px 6.4px 14.4px 0px rgba(0, 0, 0, 0.132), 0px 1.2px 3.6px 0px rgba(0, 0, 0, 0.108)'
  )(theme),
  borderRadius: 2,
  padding: '6px 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 288,
  minWidth: 288,
  '@media screen and (min-width: 600px)': {
    '&': {
      width: 'auto',
      minWidth: 340
    }
  }
})
const baseSpace = 24
const placementTopStart: Style = {
  top: baseSpace,
  left: baseSpace,
  right: 'auto'
}
const placementTop: Style = {
  top: baseSpace,
  left: '50%',
  right: 'auto',
  transform: 'translateX(-50%)'
}
const placementTopEnd: Style = {
  top: baseSpace,
  left: 'auto',
  right: baseSpace
}
const placementBottomStart: Style = {
  bottom: baseSpace,
  left: baseSpace,
  right: 'auto'
}
const placementBottom: Style = {
  bottom: baseSpace,
  left: '50%',
  right: 'auto',
  transform: 'translateX(-50%)'
}
const placementBottomEnd: Style = {
  bottom: baseSpace,
  left: 'auto',
  right: baseSpace
}
const placementCenter: Style = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

const container: Style = {
  padding: '8px 0',
  lineHeight: 1.5,
  flex: 1
}
const actions: Style = {}

export const styles = (theme: Theme): Styles<ToastClassProps> => ({
  root: root(theme),
  placementTopStart,
  placementTop,
  placementTopEnd,
  placementBottomStart,
  placementBottom,
  placementBottomEnd,
  placementCenter,
  container,
  actions
})
