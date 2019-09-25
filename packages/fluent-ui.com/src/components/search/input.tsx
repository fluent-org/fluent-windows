import * as React from 'react'
import { Input } from '@fluent-ui/core'
import { connectSearchBox } from 'react-instantsearch-dom'
import { useDebouncedCallback } from 'use-debounce'

interface SearchBoxProps {
  refine?: (...args: any[]) => any
  onFocus: () => void
}

export default connectSearchBox(
  ({ refine, onFocus }: SearchBoxProps): React.ReactElement => {
    const [debouncedCallback] = useDebouncedCallback((value): void => {
      refine && refine(value)
    }, 1000)
    return (
      <Input
        placeholder="Search"
        aria-label="Search"
        onChange={debouncedCallback}
        onFocus={onFocus}
      />
    )
  }
)
