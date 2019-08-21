declare module '@xstyled/system'
declare module '@xstyled/prop-types'
declare module 'react-acrylic'
declare module 'async-validator'

interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
}

type StandardProps<
  T = React.HTMLAttributes<HTMLDivElement>,
  Ref = HTMLDivElement,
  O extends string = ''
> = {
  className?: string
  style?: React.CSSProperties
} & Omit<T, O> & {
    ref?: React.Ref<Ref>
  }
