import { styled, css, variant, th } from '../styles/styled'

export const StyledSelectWrapper = styled.span`
  display: inline-block;
  position: relative;
  min-width: 160px;
  height: 32px;
  font: inherit;
`

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      color: ${th.color('standard.dark2')};
      background-color: ${th.color('standard.light1')};
      cursor: not-allowed;
      pointer-events: none;
    `,
    false: css``
  }
})

export const StyledSelect = styled.button<{ disabled?: boolean }>`
  outline: none;
  font: inherit;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 2px;
  border: 2px solid;
  padding-left: 12px;
  padding-right: 32px;
  display: flex;
  align-items: center;
  border-color: ${th.color('standard.default')};
  transition: ${th.transition('input')};
  &:hover {
    border-color: ${th.color('standard.dark1')};
  }
  &:active,
  &:focus {
    border-color: ${th.color('primary.default')};
  }

  ${disabled}
`

const disabledSelectIcon = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      color: ${th.color('standard.dark2')};
      cursor: not-allowed;
    `,
    false: css`
      color: ${th.color('standard.dark3')};
      cursor: pointer;
    `
  }
})

export const StyledSelectIcon = styled.span<{ disabled?: boolean }>`
  width: 32px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${disabledSelectIcon}
`
