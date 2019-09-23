import * as React from 'react'

export interface JSX {
  type: keyof React.ReactSVG
  props?: React.ClassAttributes<SVGElement> & React.SVGAttributes<SVGElement> | null
  children: JSX[]
}

function createElement(
  jsx: JSX,
  otherProps: React.HTMLAttributes<SVGElement> = {}
): React.ReactSVGElement {
  const { type, props, children: childrenAttr } = jsx
  const children = childrenAttr.map((child): React.ReactSVGElement[] =>
    child.children.length
      ? child.children.map(
          (grandchild, index): React.ReactSVGElement => {
            const grandchildProps = {
              ...grandchild.props,
              key: grandchild.type + index
            }
            grandchild = { ...grandchild, props: grandchildProps }
            return createElement(grandchild)
          }
        )
      : []
  )
  return React.createElement(type, { ...props, ...otherProps }, ...children)
}

function toHump(name: string, capitalized: boolean = true): string {
  return capitalized
    ? name
        .replace(/-(\w)/g, (all, letter): string => letter.toUpperCase())
        .replace(/( |^)[a-z]/g, (all): string => all.toUpperCase())
    : name.replace(/-(\w)/g, (all, letter): string => letter.toUpperCase())
}

function createIcon(jsx: JSX, componentName: string): React.FC {
  const Icon: React.FC = ({ ...rest }: React.HTMLAttributes<SVGElement>): React.ReactElement => {
    const style = {
      width: '1.3em',
      height: '1.3em',
      display: 'inline-block',
      fontSize: 'inherit',
      color: 'inherit',
      fill: 'currentColor'
    }
    return createElement(jsx, { ...rest, style })
  }
  Icon.displayName = `RemixIcon${toHump(componentName)}`
  return Icon
}

export default createIcon
