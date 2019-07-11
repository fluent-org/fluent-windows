import { styled, css, th, variant } from '../styles/styled'

export const StyledLabel = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
`

export const StyledLabelText = styled.span`
  font-size: 0.8em;
  margin-left: ${({ children }): string => (children ? '4px' : '0')};
`

export const StyledToggleCircle = styled.span<{
  checked?: boolean
  disabled?: boolean
}>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -5px;
  transition: ${th.transition('toggle')};
  ${variant({
    prop: 'checked',
    default: false,
    variants: {
      true: css`
        transform: translate3d(-100%, 0, 0);
        left: 100%;
        margin-left: -3px;
        background-color: ${th.color('white.default')};
      `,
      false: css`
        left: 3px;
        background-color: ${th.color('black.default')};
      `
    }
  })}
  ${variant({
    prop: 'disabled',
    default: false,
    variants: {
      true: css`
        background-color: ${th.color('primary.dark2')};
      `,
      false: css``
    }
  })}
`

const checked = variant({
  prop: 'checked',
  default: false,
  variants: {
    true: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('accent.default')};
      border-color: ${th.color('accent.default')};
    `,
    false: css`
      background-color: transparent;
      border-color: ${th.color('black.default')};
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      border-color: ${th.color('primary.dark1')};
      background-color: ${th.color('primary.dark1')};
      pointer-events: none;
    `,
    false: css``
  }
})

export const StyledToggleWrapper = styled.div<{
  checked?: boolean
  disabled?: boolean
}>`
  width: 44px;
  height: 20px;
  border-radius: 22px;
  position: relative;
  border: 2px solid;
  transition: ${th.transition('toggle')};
  &:active {
    background-color: ${th.color('primary.dark3')};
    border-color: ${th.color('primary.dark3')};
  }

  ${checked}
  ${disabled}
`

export const StyledToggle = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
`
