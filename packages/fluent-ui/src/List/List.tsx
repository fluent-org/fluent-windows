import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './List.styled'
import { Theme } from '../styles'
import { ListClassProps, ListProps, ListPropTypes } from './List.type'
import { useReveal } from '@fluent-ui/hooks'

import Box from '../Box'
import Typography from '../Typography'

export const ListContext = React.createContext<{
  reveal: boolean
  acrylic: boolean
}>({
  reveal: false,
  acrylic: false
})

export const name = 'List'

const useStyles = createUseStyles<Theme, ListClassProps>(styles, { name })

const List: React.FC<ListProps> = React.forwardRef<HTMLDivElement, ListProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      children,
      title,
      acrylic,
      reveal,
      ...rest
    } = props

    // handle Reveal Effects
    const [RevealWrapper] = useReveal(66)
    const theChildren = reveal
      ? React.useMemo(
          (): React.ReactElement[] =>
            React.Children.map(
              children,
              (child: React.ReactElement, i): React.ReactElement => {
                if (child.type && (child as any).type.displayName === 'FItem') {
                  return <RevealWrapper key={i}>{child}</RevealWrapper>
                }
                return child
              }
            ),
          [children]
        )
      : children

    const contextValue = {
      reveal: reveal as boolean,
      acrylic: acrylic as boolean
    }

    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)
    return (
      <ListContext.Provider value={contextValue}>
        <Box className={className} ref={ref} as={as} acrylic={acrylic} {...rest}>
          {title && (
            <Typography className={classes.title} variant="subtitle2">
              {title}
            </Typography>
          )}
          {theChildren}
        </Box>
      </ListContext.Provider>
    )
  }
)

List.displayName = `F${name}`

List.propTypes = ListPropTypes

export default List
