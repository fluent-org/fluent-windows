import { styled, th, variant, css } from '../styles/styled'
import Box from '../Box'

export const StyledContainer = styled(Box).attrs(
  (props): any => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)`
  display: flex;
  justify-content: space-between;
  transition: ${th.transition('navigation')};
  ${variant({
    prop: 'horizontal',
    default: false,
    variants: {
      true: css`
        max-height: 40px;
        flex-direction: row;
      `,
      false: css`
        flex-direction: column;
      `
    }
  })}
  ${variant({
    prop: 'expanded',
    default: true,
    variants: {
      true: css``,
      false: css`
        width: 40px;
      `
    }
  })}
`

export const StyledHeader = styled.div<{ horizontal?: boolean }>`
  display: flex;
  ${variant({
    prop: 'horizontal',
    default: false,
    variants: {
      true: css`
        flex-direction: row;
      `,
      false: css`
        flex-direction: column;
      `
    }
  })}
`

export const StyledFooter = styled.div<{ horizontal?: boolean }>`
  display: flex;
  ${variant({
    prop: 'horizontal',
    default: false,
    variants: {
      true: css`
        flex-direction: row;
      `,
      false: css`
        flex-direction: column;
      `
    }
  })}
`

export const StyledContent = styled.div<{ horizontal?: boolean }>`
  flex: 1;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  ${variant({
    prop: 'horizontal',
    default: false,
    variants: {
      true: css`
        flex-direction: row;
      `,
      false: css`
        flex-direction: column;
      `
    }
  })}
`
