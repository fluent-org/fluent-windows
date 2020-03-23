import { Style, Styles } from 'jss'
import { Theme } from '../styles'
import { ItemGroupClassProps, ItemGroupProps } from './ItemGroup.type'

const root = (theme: Theme): Style => ({
  overflow: 'visible',
  boxShadow: theme.shadows![3],
  zIndex: 9999
})
const level = (props: ItemGroupProps): Style => ({
  '& .FItem-root': {
    paddingLeft: props.level && 40 + props.level * 12
  }
})
const float: Style = {
  '& .FItem-root': {
    paddingRight: 40
  }
}

const titleRoot: Style = {
  position: 'relative',
  color: 'inherit'
}
const titleActive = (theme: Theme): Style => ({
  color: theme.colors!.primary!.default
})
const titleFloatAndHorizontal: Style = {
  '& > .FItem-root': {
    paddingRight: 36
  }
}
const titlePrefix = (theme: Theme): Style => ({
  width: 24,
  height: 24,
  position: 'absolute',
  right: 12,
  top: '50%',
  cursor: 'pointer',
  marginTop: -12,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 12,
  transition: theme.transitions!.default,
  // acrylic false
  zIndex: 1,
  // horizontal === false && expanded === true
  opacity: 0
})
const titlePrefixAcrylic: Style = {
  zIndex: 1
}
const titlePrefixNotFloatOpen: Style = {
  transform: 'rotate(180deg)'
}
const titlePrefixNotFloatClose: Style = {
  transform: 'rotate(0deg)'
}
const titlePrefixHorizontal: Style = {
  opacity: 1
}
const titlePrefixExpanded: Style = {
  opacity: 1
}

export const styles = (theme: Theme): Styles<ItemGroupClassProps> => ({
  root: root(theme),
  level,
  float,
  titleRoot,
  titleActive: titleActive(theme),
  titleFloatAndHorizontal,
  titlePrefix: titlePrefix(theme),
  titlePrefixAcrylic,
  titlePrefixNotFloatOpen,
  titlePrefixNotFloatClose,
  titlePrefixHorizontal,
  titlePrefixExpanded
})
