import { styled, variant, css, th } from '../../../styles/styled'

export const StyledFieldWrapper = styled.tr``

export const StyledFieldLabel = styled.label<{ required?: boolean }>`
  position: relative;
  ${variant({
    prop: 'required',
    default: false,
    variants: {
      true: css`
        &::after {
          content: '*';
          position: absolute;
          right: -9px;
          top: 0;
          font-size: 14px;
          color: ${th.color('error.default')};
        }
      `,
      false: css``
    }
  })}
`

export const StyledFieldItem = styled.td``
