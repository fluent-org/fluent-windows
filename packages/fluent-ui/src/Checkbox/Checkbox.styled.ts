import { styled, css, th, variant } from '../styles/styled'

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
      color: ${th.color('black.default')};
      background-color: transparent;
      border-color: ${th.color('primary.default')};
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      border-color: ${th.color('primary.dark3')};
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
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  transition: ${th.transition('checkbox')};
  &:hover {
    border-color: ${th.color('primary.dark3')};
  }
  &:active {
    background-color: ${th.color('primary.dark3')};
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
