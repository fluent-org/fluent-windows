declare module '@xstyled/system'
declare module '@xstyled/prop-types'
declare module 'react-acrylic'

interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
}

type StandardProps<T, O extends string = '', AcceptsRef = true> = Omit<T, O> & {
  ref?: AcceptsRef extends true
    ? T extends { ref?: infer RefType }
      ? RefType
      : React.Ref<HTMLDivElement>
    : never
}
