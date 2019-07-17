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

const checked = variant({
  prop: 'checked',
  default: false,
  variants: {
    true: css`
      color: ${th.color('white.default')};
      background-color: ${th.color('primary.default')};
      border-color: ${th.color('primary.default')};
    `,
    false: css`
      color: ${th.color('black.default')};
      background-color: transparent;
      border-color: ${th.color('standard.default')};
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      border-color: ${th.color('standard.dark3')};
      background-color: transparent;
      color: ${th.color('standard.dark3')};
      pointer-events: none;
    `,
    false: css``
  }
})

export const StyledCheckboxWrapper = styled.div<{
  checked?: boolean
  disabled?: boolean
}>`
  width: 20px;
  height: 20px;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  transition: ${th.transition('checkbox')};
  &:hover {
    border-color: ${th.color('standard.dark3')};
  }
  &:active {
    background-color: ${th.color('standard.dark3')};
  }

  ${checked}
  ${disabled}
`

export const StyledCheckbox = styled.input`
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
