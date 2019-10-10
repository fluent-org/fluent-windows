import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Tabs.styled'
import { Theme } from '../styles'
import { TabsProps, TabsType, TabsPropTypes, TabsClassProps } from './Tabs.type'
import Panel from './components/Panel'
import Navigation from '../Navigation'
import Item from '../Item'
import Box from '../Box'

interface Values {
  value: string | number
  title: string
}

export const name = 'Tabs'

const useStyles = createUseStyles<Theme, TabsClassProps>(styles, { name })

const Tabs: React.FC<TabsProps> = React.forwardRef<HTMLDivElement, TabsProps>(
  (props, ref): React.ReactElement => {
    const { as = 'div', className: classNameProp, value, onChange, children, ...rest } = props

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

    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)

    return (
      <Box className={className} as={as} ref={ref} {...rest}>
        <Navigation horizontal value={value} onChange={onChange} boxShadow="2" {...rest}>
          {values.map(
            ({ value, title }): React.ReactElement => (
              <Item value={value} key={value}>
                {title}
              </Item>
            )
          )}
        </Navigation>
        <Box className={classes.panel}>{theChildren}</Box>
      </Box>
    )
  }
)

Object.defineProperty(Tabs, 'Panel', {
  get(): typeof Panel {
    return Panel
  }
})

Tabs.displayName = `F${name}`

Tabs.propTypes = TabsPropTypes

export default Tabs as TabsType
