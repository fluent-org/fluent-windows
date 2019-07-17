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

const circleSize = 12

export const StyledToggleCircle = styled.span<{
  checked?: boolean
  disabled?: boolean
}>`
  width: ${circleSize}px;
  height: ${circleSize}px;
  margin-top: -${circleSize / 2}px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
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
        background-color: ${({ checked }: { checked?: boolean; disabled?: boolean }): string =>
          checked ? th.color('white.default') : th.color('standard.dark1')};
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
      background-color: ${th.color('primary.default')};
      border-color: ${th.color('primary.default')};
      &:active {
        background-color: ${th.color('primary.dark1')};
        border-color: ${th.color('primary.dark1')};
      }
    `,
    false: css`
      background-color: transparent;
      border-color: ${th.color('black.default')};
      &:active {
        background-color: ${th.color('standard.default')};
        border-color: ${th.color('standard.default')};
      }
    `
  }
})

const disabled = variant({
  prop: 'disabled',
  default: false,
  variants: {
    true: css`
      background-color: ${({ checked }: { checked?: boolean; disabled?: boolean }): string =>
        checked ? th.color('standard.default') : ''};
      border-color: ${th.color('standard.default')};
      pointer-events: none;
    `,
    false: css``
  }
})

export const StyledToggleWrapper = styled.div<{
  checked?: boolean
  disabled?: boolean
}>`
  width: 40px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  border: 2px solid;
  transition: ${th.transition('toggle')};

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
