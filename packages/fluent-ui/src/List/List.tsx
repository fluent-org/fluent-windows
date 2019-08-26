import * as React from 'react'
import { StyledListWrapper, StyledListTitle } from './List.styled'
import { ListProps, ListPropTypes } from './List.type'
import { useReveal } from '@fluent-ui/hooks'

export const ListContext = React.createContext<{
  reveal: boolean
  acrylic: boolean
}>({
  reveal: false,
  acrylic: false
})

const List: React.FC<ListProps> = React.forwardRef<HTMLDivElement, ListProps>(
  ({ children, title, acrylic, reveal, ...rest }, ref): React.ReactElement => {
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
    return (
      <ListContext.Provider value={contextValue}>
        <StyledListWrapper ref={ref} acrylic={acrylic} reveal={reveal} {...rest}>
          {title && <StyledListTitle variant="subtitle2">{title}</StyledListTitle>}
          {theChildren}
        </StyledListWrapper>
      </ListContext.Provider>
    )
  }
)

List.displayName = 'FList'

List.propTypes = ListPropTypes

export default List
