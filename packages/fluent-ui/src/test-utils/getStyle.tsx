import * as React from 'react'
import { render, getClasses } from './index'
import '@testing-library/jest-dom/extend-expect'

import Box, { name } from '../Box/Box'
import { BoxClassProps } from '../Box/Box.type'
import { styles } from '../Box/Box.styled'

const testText = 'Hello World'

const classes = getClasses<BoxClassProps>(styles, name)

export function getStyle(props: any): any {
  const { sheets } = render(<Box {...props}>{testText}</Box>)
  const result = sheets.registry[0].rules.index.reduce((acc: any, cur: any) => {
    const rule = cur
    if (rule.at === 'media') {
      if (Object.keys(rule.rules.index[0].style).length) {
        return {
          ...acc,
          [rule.key]: rule.rules.index[0].style
        }
      }
    } else if (classes.system.includes(rule.id) && !!Object.keys(rule.style).length) {
      return {
        ...acc,
        ...rule.style
      }
    }
    return acc
  }, {})
  return result
}
