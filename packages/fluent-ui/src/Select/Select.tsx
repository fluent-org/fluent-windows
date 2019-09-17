import * as React from 'react'
import classNames from 'classnames'
import { createUseStyles } from '@fluent-ui/styles'
import { styles } from './Select.styled'
import { Theme } from '../styles'

import { usePopper, useClick, useClickOutside } from '@fluent-ui/hooks'
import { ChevronDownMed as DownIcon } from '@fluent-ui/icons'
import { SelectClassProps, SelectProps, SelectPropTypes } from './Select.type'
import Transition from '../Transition'
import List from '../List'

export const name = 'Select'

const useStyles = createUseStyles<Theme, SelectClassProps>(styles, { name })

const Select: React.FC<SelectProps> = React.forwardRef<HTMLInputElement, SelectProps>(
  (props, ref): React.ReactElement => {
    const {
      as: Component = 'span',
      className: classNameProp,
      value,
      onChange,
      disabled = false,
      children,
      ...rest
    } = props

    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
      placement: 'bottom-start',
      positionFixed: false
    })

    const [visible, setVisible] = React.useState(false)
    const handleVisible = React.useCallback(
      (status): void => {
        disabled !== true && setVisible(status)
      },
      [disabled]
    )
    const [_, bind] = useClick(handleVisible)
    useClickOutside(
      referenceRef,
      (): void => {
        setVisible(false)
      }
    )

    const [currentText, setCurrentText] = React.useState('')
    React.useEffect((): void => {
      React.Children.forEach(
        children,
        (child: React.ReactElement): void => {
          const active = child.props.value === value
          active && setCurrentText(child.props.children)
        }
      )
    }, [children, value])
    const theChildren = React.Children.map(
      children,
      (child: React.ReactElement): React.ReactElement => {
        function onClick(): void {
          child.props.value && onChange && onChange(child.props.value)
          setCurrentText(child.props.children)
          setVisible(false)
        }
        const active = child.props.value === value
        return React.cloneElement(child, {
          onClick,
          active
        })
      }
    )

    const classes = useStyles(props)
    const className = classNames(
      classes.root,
      {
        [classes.disabled]: disabled
      },
      classNameProp
    )
    const selectClassName = classNames(classes.select, {
      [classes.selectDisabled]: disabled
    })
    const iconClassName = classNames(classes.icon, {
      [classes.disabledIcon]: disabled
    })

    return (
      <Component className={className} ref={referenceRef} {...bind}>
        <button className={selectClassName}>{currentText}</button>
        <span className={iconClassName}>
          <DownIcon />
        </span>
        <input type="hidden" value={value} disabled={disabled} ref={ref} {...rest} />
        <Transition type="grow" visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <List zIndex={1002} ref={popperRef}>
            {theChildren}
          </List>
        </Transition>
      </Component>
    )
  }
)

Select.displayName = `F${name}`

Select.propTypes = SelectPropTypes

Select.defaultProps = {
  disabled: false
}

export default Select
