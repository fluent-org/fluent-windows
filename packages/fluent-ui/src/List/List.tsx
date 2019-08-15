import * as React from 'react'
import { StyledListWrapper, StyledListTitle } from './List.styled'
import { ListProps } from './List.type'
import { useReveal } from '@fluent-ui/hooks'

export const ListContext = React.createContext<{
  reveal: boolean
  acrylic: boolean
}>({
  reveal: false,
  acrylic: false
})

const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ children, title, acrylic, reveal, ...rest }: ListProps, ref): React.ReactElement => {
    // handle Reveal Effects
    const [RevealWrapper] = useReveal(66)
    const childs = reveal
      ? React.useMemo(
          (): React.ReactElement[] =>
            React.Children.map(
              children,
              (child, i): React.ReactElement => {
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
    return (
      <ListContext.Provider value={contextValue}>
        <StyledListWrapper ref={ref} acrylic={acrylic} reveal={reveal} {...rest}>
          {title && <StyledListTitle variant="subtitle2">{title}</StyledListTitle>}
          {childs}
        </StyledListWrapper>
      </ListContext.Provider>
    )
  }
)

List.displayName = 'FList'

export default List
