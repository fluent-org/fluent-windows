declare module '@xstyled/styled-components' {
  import styled, { ThemedStyledFunction } from 'styled-components'
  import { ReactElement } from 'react'
  export * from 'styled-components'

  export const Box: ThemedStyledFunction<'div', any>
  export default styled
}

declare module '@xstyled/system'
declare module 'react-acrylic'
