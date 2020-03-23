import * as React from 'react'
import { createUseStyles } from '@fluent-windows/styles'

const useStyles = createUseStyles({
  table: {
    width: '100%',
    display: 'block',
    overflow: 'hidden',
    overflowX: 'auto',
    marginBottom: 16,
    borderSpacing: 0,
    borderCollapse: 'collapse',
    fontSize: 14,
    fontFamily: 'inherit',
    color: 'rgb(57, 58, 52)',
    '-webkit-overflow-scrolling': 'touch',
    '& thead': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 500,
      '& tr': {
        height: 64,
        '& th': {
          padding: '0 16px 0 8px',
          textAlign: 'left',
          fontWeight: 500,
          whiteSpace: 'pre',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          '&:nth-child(2)': {
            width: '24%'
          }
        }
      }
    },
    '& tbody': {
      color: 'rgba(0, 0, 0, 0.87)',
      lineHeight: 1.5,
      '& tr': {
        height: 48,
        '& td': {
          padding: '8px 16px 8px 8px',
          textAlign: 'left',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          '&:nth-child(1)': {
            color: 'rgb(0, 0, 159)',
            fontWeight: 500
          },
          '&:nth-child(2)': {
            color: 'rgb(227, 17, 108)',
            wordBreak: 'break-all'
          },
          '&:nth-child(3)': {
            color: '#999'
          }
        }
      }
    }
  }
})

function Table({
  children
}: JSX.IntrinsicAttributes &
  React.ClassAttributes<HTMLTableElement> &
  React.TableHTMLAttributes<HTMLTableElement>): React.ReactElement {
  const classes = useStyles()
  return <table className={classes.table}>{children}</table>
}

export default Table
