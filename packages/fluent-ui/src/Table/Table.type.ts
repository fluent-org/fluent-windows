import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StandardProps } from '..'

export interface DataType {
  key: string
  [name: string]: React.ReactText
}

export interface ColumnsType<T> {
  field: string
  title: string
  render?: (text: React.ReactText, record?: T, index?: number) => React.ReactElement
}

export interface TableProps<T>
  extends StandardProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {
  data?: T[]
  columns?: ColumnsType<T>[]
  children?: React.ReactElement | React.ReactElement[]
}

export type TextAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify'
export interface TableCellProps {
  textAlign?: TextAlign
  children: React.ReactChild
}

export const TablePropTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.element,
    // @ts-ignore
    PropTypes.arrayOf<PropTypes.Requireable<PropTypes.ReactElementLike>>(PropTypes.element)
  ])
}
