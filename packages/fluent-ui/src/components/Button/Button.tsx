import React, {
  SFC,
  ReactElement,
  useState,
  forwardRef,
  ReactNode
} from 'react'
import StyledButton from './Button.styled'

interface ButtonProps {
  variant?: 'primary' | 'accent'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'

  children: ReactNode
}

const Button: SFC<ButtonProps> = forwardRef<{}, ButtonProps>(
  (
    { variant = 'primary', disabled, size, children, ...rest }: ButtonProps,
    ref
  ): ReactElement => {
    // const ref: RefObject<HTMLButtonElement> = createRef()
    // useLayoutEffect((): (() => void) => {
    //   function getOffset(element): { top: number; left: number } {
    //     const rect = element.getBoundingClientRect()
    //     return {
    //       top: rect.top,
    //       left: rect.left
    //     }
    //   }
    //   function clearEffect(): void {
    //     setBackgroundImage('')
    //   }
    //   function handleMouseMove(e): void {
    //     const x = e.pageX - getOffset(e.target).left - window.scrollX
    //     const y = e.pageY - getOffset(e.target).top - window.scrollY
    //     const gradientSize = 60
    //     const lightColor = '#fff'
    //     const cssLightEffect = `radial-gradient(circle ${gradientSize}px at ${x}px ${y}px, ${lightColor}, rgba(255,255,255,0))`
    //     setBackgroundImage(cssLightEffect)
    //   }
    //   ref.current!.addEventListener('mousemove', handleMouseMove)
    //   ref.current!.addEventListener('mouseleave', clearEffect)
    //   return (): void => {
    //     if (ref.current) {
    //       ref.current.removeEventListener('mousemove', handleMouseMove)
    //       ref.current.removeEventListener('mouseleave', clearEffect)
    //     }
    //   }
    // }, [ref])
    // const { style } = rest
    return (
      <StyledButton
        ref={ref}
        variant={variant}
        disabled={disabled}
        size={size}
        {...rest}
      >
        {children}
      </StyledButton>
    )
  }
)

Button.displayName = 'FButton'

export default Button
