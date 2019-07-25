import { styled, css, variant } from '../styles/styled'
import Box from '../Box'
import { TypographyProps } from './Typography.type'

const base = css`
  margin: 0;
`

const variants = variant({
  key: 'typographies.variants',
  prop: 'variant'
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

export const StyledTypography = styled(Box)<TypographyProps>`
  ${base}
  ${variants}
  ${gutterBottom}
  ${noWrap}
`
