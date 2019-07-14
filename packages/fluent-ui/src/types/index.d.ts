declare module '@xstyled/system'
declare module '@xstyled/prop-types'
declare module 'react-acrylic'

interface StyledProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
}
