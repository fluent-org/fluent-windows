import { styled, th, variant, css } from '../styles/styled'
import { TextAlign } from './Table.type'

export const StyledTableWrapper = styled.table`
  position: relative;
  overflow: hidden;
  display: table;
  border-spacing: 0;
  border-collapse: collapse;
  box-shadow: ${th.shadow('1')};
`

export const StyledTableHeadWrapper = styled.thead`
  display: table-header-group;
`
export const StyledTableBodyWrapper = styled.tbody`
  display: table-row-group;
`
export const StyledTableFooterWrapper = styled.tfoot`
  display: table-row-group;
`
export const StyledTableRowWrapper = styled.tr<{ isBodyRow: boolean }>`
  display: table-row;
  color: inherit;
  outline: none;
  &:hover {
    background-color: ${({ isBodyRow }): string => isBodyRow && th.color('standard.light2')};
  }
`

const textAlign = variant({
  prop: 'textAlign',
  default: 'inherit',
  variants: {
    inherit: css`
      text-align: inherit;
    `,
    left: css`
      text-align: left;
    `,
    center: css`
      text-align: center;
    `,
    right: css`
      text-align: right;
    `,
    justify: css`
      text-align: justify;
    `
  }
})
export const StyledTableHeadCellWrapper = styled.th<{ textAlign: TextAlign }>`
  display: table-cell;
  padding: 14px 40px 14px 16px;
  vertical-align: middle;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: 0.015em;
  border-bottom: 1px solid ${th.color('standard.default')};
  ${textAlign}
`
export const StyledTableCellWrapper = styled.td<{ textAlign: TextAlign }>`
  display: table-cell;
  padding: 14px 40px 14px 16px;
  vertical-align: middle;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.015em;
  border-bottom: 1px solid ${th.color('standard.default')};
  ${textAlign}
`
