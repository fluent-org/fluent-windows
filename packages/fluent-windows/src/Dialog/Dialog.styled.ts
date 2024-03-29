import { Theme } from '../styles'
import { Style, Styles } from 'jss'
import { DialogClassProps } from './Dialog.type'

const root = (theme: Theme): Style => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  zIndex: 1001,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.colors!.white!.default,
  borderRadius: 2,
  padding: '16px 24px 24px',
  width: 288,
  maxWidth: 340,
  minWidth: 288,
  '@media screen and (min-width: 600px)': {
    '&': {
      width: 'auto',
      maxWidth: 450,
      minWidth: 340
    }
  }
})

const title: Style = {
  width: '100%',
  display: 'inline-flex',
  justifyContent: 'space-between',
  overflow: 'hidden',
  '& > h6': {
    flex: 1,
    overflow: 'hidden'
  }
}
const content: Style = {
  marginTop: 16,
  minHeight: 40
}
const actions: Style = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 16,
  '> *': {
    margin: '0 4px',
    '&:last-child': {
      marginRight: 0
    }
  }
}

const mask = (theme: Theme): Style => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors!.standard!.transparent2
})

export const styles = (theme: Theme): Styles<DialogClassProps> => ({
  root: root(theme),
  title,
  content,
  actions,
  mask: mask(theme)
})
