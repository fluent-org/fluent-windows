import { Theme } from '@fluent-ui/core'
import { Style, Styles } from 'jss'

const hits = (theme: Theme): Style => ({
  maxWidth: '30em',
  maxHeight: '80vh',
  width: '80vw',
  overflow: 'scroll',
  padding: '0.7em 1em 0.4em',
  zIndex: 1002,
  background: theme.colors!.white!.default,
  boxShadow: theme.shadows![3],
  '& div a': {
    display: 'block',
    textDecoration: 'none',
    padding: '0.3em 0.2em',
    color: theme.colors!.standard!.dark2,
    transition: theme.transitions!.default,
    '&:hover': {
      backgroundColor: theme.colors!.standard!.default
    }
  }
})

const powerBy: Style = {
  width: '25%',
  float: 'right',
  overflow: 'hidden',
  marginTop: '1em'
}

export const styles = (theme: Theme): Styles => ({
  hits: hits(theme),
  powerBy
})
