import * as React from 'react'
import { usePopper, useClick, useClickOutside } from '@fluent-ui/hooks'
import { ChevronDownMed as DownIcon } from '@fluent-ui/icons'
import { StyledSelectWrapper, StyledSelect, StyledSelectIcon } from './Select.styled'
import { SelectProps } from './Select.type'
import Transition from '../Transition'
import List from '../List'

const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  (
    { value, onChange, disabled = false, children, ...rest }: SelectProps,
    ref
  ): React.ReactElement => {
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
        (child): void => {
          const active = child.props.value === value
          active && setCurrentText(child.props.children)
        }
      )
    }, [children, value])
    const theChildren = React.Children.map(
      children,
      (child): React.ReactElement => {
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

    return (
      <StyledSelectWrapper ref={referenceRef} {...bind}>
        <StyledSelect disabled={disabled}>{currentText}</StyledSelect>
        <StyledSelectIcon disabled={disabled}>
          <DownIcon />
        </StyledSelectIcon>
        <input type="hidden" value={value} ref={ref} {...rest} />
        <Transition type="grow" visible={visible} wrapper={false} mountOnEnter unmountOnExit>
          <List zIndex={1002} ref={popperRef}>
            {theChildren}
          </List>
        </Transition>
      </StyledSelectWrapper>
    )
  }
)

Select.displayName = 'FSelect'

export default Select
