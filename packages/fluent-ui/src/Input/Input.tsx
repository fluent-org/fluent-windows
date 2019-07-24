import * as React from 'react'
import { ChromeClose as ChromeCloseIcon } from '@fluent-ui/icons'
import Transition from '../Transition'
import { StyledWrapper, StyledInput, StyledIcon } from './Input.styled'
import { InputProps } from './Input.type'

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { value, onChange, placeholder, disabled, cleared, password, ...rest }: InputProps,
    ref
  ): React.ReactElement => {
    const clearedRef = React.useRef<HTMLSpanElement>(null)
    const [clearedHeight, setClearedHeight] = React.useState(0)
    React.useEffect((): void => {
      clearedRef && clearedRef.current && setClearedHeight(clearedRef.current.clientHeight)
    }, [])
    function handleChange(e: React.ChangeEvent<HTMLInputElement> | null): void {
      onChange && onChange(e ? e.target.value : '')
    }
    function handleClear(e: React.MouseEvent<HTMLElement>): void {
      e.preventDefault()
      e.stopPropagation()
      handleChange(null)
    }
    return (
      <StyledWrapper>
        <StyledInput
          ref={ref}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          cleared={cleared}
          type={password ? 'password' : 'text'}
          clearedHeight={clearedHeight}
          {...rest}
        />
        <Transition visible={!!value}>
          {cleared && (
            <StyledIcon onClick={handleClear} ref={clearedRef} clearedHeight={clearedHeight}>
              <ChromeCloseIcon />
            </StyledIcon>
          )}
        </Transition>
      </StyledWrapper>
    )
  }
)

Input.displayName = 'FInput'

export default Input
