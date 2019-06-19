declare module '@xstyled/styled-components' {
  import baseStyled, {
    ThemedStyledFunction,
    AnyStyledComponent,
    StyledComponent
  } from 'styled-components'
  import { ReactElement } from 'react'
  export * from 'styled-components'
  type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

  type StyledComponentInnerAttrs<
    C extends AnyStyledComponent
  > = C extends StyledComponent<any, any, any, infer A> ? A : never
  type StyledComponentInnerOtherProps<C extends AnyStyledComponent> = C extends
    | StyledComponent<any, any, infer O, any>
    | StyledComponent<any, any, infer O>
    ? O
    : never
  type StyledComponentInnerComponent<
    C extends React.ComponentType<any>
  > = C extends
    | StyledComponent<infer I, any, any, any>
    | StyledComponent<infer I, any, any>
    ? I
    : C
  type ThemedStyledComponentFactories<T extends object> = {
    [TTag in keyof JSX.IntrinsicElements]: ThemedStyledFunction<TTag, T>
  }
  interface ThemedBaseStyledInterface<T extends object>
    extends ThemedStyledComponentFactories<T> {
    <C extends AnyStyledComponent>(component: C): ThemedStyledFunction<
      StyledComponentInnerComponent<C>,
      T,
      StyledComponentInnerOtherProps<C>,
      StyledComponentInnerAttrs<C>
    >
    <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
      component: C
    ): ThemedStyledFunction<C, T>
    box(component: 'div'): ThemedStyledFunction<'div', T>
  }
  export type ThemedStyledInterface<
    T extends object
  > = ThemedBaseStyledInterface<AnyIfEmpty<T>>
  export type StyledInterface = ThemedStyledInterface<{}>
  const styled: StyledInterface
  export const Box: ThemedStyledFunction<'div', any>
  export default styled
}

declare module '@xstyled/system'
declare module 'react-acrylic'
