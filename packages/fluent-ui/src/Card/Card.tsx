import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import Box from '../Box'
import { styles } from './Card.styled'
import Content from './components/Content'
import Actions from './components/Actions'
import Header from './components/Header'
import { CardProps, CardType, CardPropTypes, CardClassProps } from './Card.type'
import { Theme } from '../styles'

export const name = 'Card'

const useStyles = createUseStyles<Theme, CardClassProps>(styles, { name })

const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, CardProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'div',
      className: classNameProp,
      pure = false,
      dynamic = false,
      minWidth = 275,
      maxWidth = 355,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.pure]: pure,
        [classes.dynamic]: dynamic
      },
      classNameProp
    )
    return (
      <Box
        as={Component}
        className={className}
        ref={ref}
        minWidth={minWidth}
        maxWidth={maxWidth}
        {...rest}
      />
    )
  }
)

Object.defineProperty(Card, 'Content', {
  get(): typeof Content {
    return Content
  }
})
Object.defineProperty(Card, 'Actions', {
  get(): typeof Actions {
    return Actions
  }
})
Object.defineProperty(Card, 'Header', {
  get(): typeof Header {
    return Header
  }
})

Card.displayName = `F${name}`

Card.propTypes = CardPropTypes

export default Card as CardType
