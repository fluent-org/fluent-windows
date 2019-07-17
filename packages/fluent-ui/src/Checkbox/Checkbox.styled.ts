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
      &:hover,
      &:focus {
        border-color: ${th.color('primary.default')};
      }
      &:active {
        background-color: ${th.color('primary.dark3')};
        border-color: ${th.color('primary.dark3')};
      }
    `,
    false: css`
      color: ${th.color('black.default')};
      background-color: ${th.color('white.default')};
      border-color: ${th.color('standard.default')};
      &:hover,
      &:focus {
        border-color: ${th.color('standard.dark1')};
      }
      &:active {
        color: ${th.color('white.default')};
        background-color: ${th.color('primary.default')};
        border-color: ${th.color('primary.default')};
      }
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      color: ${th.color('standard.dark2')};
      background-color: ${th.color('standard.light1')};
      border-color: ${th.color('standard.default')};
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
  border-radius: 2px;
  transition: ${th.transition('checkbox')};

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
