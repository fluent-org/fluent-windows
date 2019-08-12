import { styled, css, variant, color, backgroundColor } from '../styles/styled'
import { TypographyProps } from './Typography.type'

const base = css`
  margin: 0;
  ${color}
  ${backgroundColor}
`

const variants = variant({
  key: 'typographies.variants',
  prop: 'variant'
})

const gutterTop = variant({
  prop: 'gutterTop',
  default: false,
  variants: {
    true: css`
      margin-top: 0.65em;
    `,
    false: css``
  }
})
const gutterBottom = variant({
  prop: 'gutterBottom',
  default: false,
  variants: {
    true: css`
      margin-bottom: 0.35em;
    `,
    false: css``
  }
})

const noWrap = variant({
  prop: 'noWrap',
  default: false,
  variants: {
    true: css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `,
    false: css``
  }
})

export const StyledTypography = styled.div<TypographyProps>`
  ${base}
  ${variants}
  ${gutterTop}
  ${gutterBottom}
  ${noWrap}
`
