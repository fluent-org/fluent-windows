import { styled, css, th, variant } from '../styles/styled'

const checked = variant({
  prop: 'checked',
  default: false,
  variants: {
    true: css`
      border-color: ${th.color('primary.default')};
      &:hover {
        border-color: ${th.color('primary.default')};
      }
    `,
    false: css`
      border-color: ${th.color('standard.default')};
      &:hover {
        border-color: ${th.color('standard.dark1')};
      }
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      background-color: ${th.color('standard.light1')};
      border-color: ${th.color('standard.default')};
      cursor: not-allowed;
      pointer-events: none;
    `,
    false: css``
  }
})

export const StyledRadioWrapper = styled.div<{
  checked?: boolean
  disabled?: boolean
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid;
  transition: ${th.transition('radio')};
  background-color: ${th.color('white.default')};

  ${checked}
  ${disabled}
`

export const StyledRadio = styled.input`
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

export const StyledCircle = styled.div<{
  disabled?: boolean
  checked?: boolean
}>`
  border-radius: 50%;
  transition: ${th.transition('radio')};
  background-color: ${({ disabled }): string =>
    disabled ? th.color('standard.dark3') : th.color('black.default')};
  ${variant({
    prop: 'checked',
    default: false,
    variants: {
      true: css`
        width: 12px;
        height: 12px;
        opacity: 1;
      `,
      false: css`
        width: 0;
        height: 0;
        opacity: 0;
      `
    }
  })}
`
