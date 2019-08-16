import * as React from 'react'
import { StyledCardWrapper } from './Card.styled'
import Content from './components/Content'
import Actions from './components/Actions'
import Header from './components/Header'
import { CardProps, CardType } from './Card.type'

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { pure = false, dynamic = false, minWidth = 275, maxWidth = 355, ...rest }: CardProps,
    ref
  ): React.ReactElement => {
    return (
      <StyledCardWrapper
        ref={ref}
        pure={pure}
        dynamic={dynamic}
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

Card.displayName = 'FCard'

export default Card as CardType
