import { styled, th, variant, css } from '../styles/styled'
import Box from '../Box'
import { CardProps } from './Card.type'

const pure = variant({
  prop: 'pure',
  default: 'false',
  variants: {
    true: css`
      box-shadow: none;
    `,
    false: css`
      box-shadow: ${th.shadow('2')};
      border-radius: 4px;
    `
  }
})

const dynamic = variant({
  prop: 'dynamic',
  default: 'false',
  variants: {
    true: css`
      &:hover {
        transform: scale(1.1);
      }
    `,
    false: css``
  }
})

export const StyledCardWrapper = styled(Box)<CardProps>`
  overflow: hidden;
  background-color: ${th.color('white.default')};
  transition: ${th.transition('card')};
  ${pure}
  ${dynamic}
`
