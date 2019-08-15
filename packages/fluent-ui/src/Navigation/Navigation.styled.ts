import { styled, th, variant, css } from '../styles/styled'
import Box from '../Box'
import { NavigationProps } from './Navigation.type'

export const StyledContainer = styled(Box).attrs(
  (props): any => ({
    backgroundColor: th.color('standard.light2').call(undefined, props)
  })
)<NavigationProps>`
  display: flex;
  justify-content: space-between;
  transition: ${th.transition('navigation')};
  overflow: hidden;
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
      true: css`
        max-width: ${({ horizontal }: NavigationProps): string => (horizontal ? '' : '260px')};
      `,
      false: css`
        max-width: ${({ horizontal }: NavigationProps): string => (horizontal ? '' : '40px')};
      `
    }
  })}
`

export const StyledHeader = styled(Box)<NavigationProps>`
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

export const StyledFooter = styled(Box)<NavigationProps>`
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

export const StyledContent = styled(Box)<NavigationProps>`
  flex: 1;
  display: flex;
  ${variant({
    prop: 'horizontal',
    default: false,
    variants: {
      true: css`
        flex-direction: row;
        overflow: hidden;
      `,
      false: css`
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: auto;
      `
    }
  })};
`
