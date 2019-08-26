import * as React from 'react'
import { StyledTabsWrapper, StyledTabsPanelWrapper } from './Tabs.styled'
import { TabsProps, TabsType, TabsPropTypes } from './Tabs.type'
import Panel from './components/Panel'
import Navigation from '../Navigation'
import Item from '../Item'

interface Values {
  value: string | number
  title: string
}

const Tabs: React.FC<TabsProps> = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ value, onChange, children, ...rest }, ref): React.ReactElement => {
    const values = React.useMemo(
      (): Values[] =>
        React.Children.map(
          children,
          (child: React.ReactElement): Values => ({
            value: child.props.value,
            title: child.props.title
          })
        ),
      [children]
    )
    const theChildren = React.useMemo(
      (): React.ReactElement[] =>
        React.Children.map(
          children,
          (child: React.ReactElement): React.ReactElement =>
            React.cloneElement(child, { hidden: child.props.value !== value })
        ),
      [children, value]
    )

    return (
      <StyledTabsWrapper ref={ref} {...rest}>
        <Navigation horizontal value={value} onChange={onChange} boxShadow="2" {...rest}>
          {values.map(
            ({ value, title }): React.ReactElement => (
              <Item value={value} key={value}>
                {title}
              </Item>
            )
          )}
        </Navigation>
        <StyledTabsPanelWrapper>{theChildren}</StyledTabsPanelWrapper>
      </StyledTabsWrapper>
    )
  }
)

Object.defineProperty(Tabs, 'Panel', {
  get(): typeof Panel {
    return Panel
  }
})

Tabs.displayName = 'FTabs'

Tabs.propTypes = TabsPropTypes

export default Tabs as TabsType
