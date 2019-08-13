declare module '@xstyled/system'
declare module '@xstyled/prop-types'
declare module 'react-acrylic'

interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
}

type StandardProps<T, AcceptsRef = true> = Omit<T, 'classes'> & {
  className?: string
  style?: React.CSSProperties
} & {
  ref?: AcceptsRef extends true
    ? T extends { ref?: infer RefType }
      ? RefType
      : React.Ref<HTMLDivElement>
    : never
}
