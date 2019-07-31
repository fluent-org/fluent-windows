import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PortalProps } from './Portal.type'
import { useGlobal } from '@fluent-ui/hooks'

function getContainer(container: PortalProps['container']): Element | null {
  container = typeof container === 'function' ? container() : container
  // eslint-disable-next-line
  return ReactDOM.findDOMNode(container) as (Element | null)
}

const Portal = React.forwardRef<Element, PortalProps>(
  (
    { children, container, disablePortal = false, ...rest }: PortalProps,
    ref
  ): React.ReactPortal | React.ReactElement | null => {
    const [mountNode, setMountNode] = React.useState<PortalProps['container']>(
      (): PortalProps['container'] => container
    )

    React.useEffect((): void => {
      const global = useGlobal() as Window
      if (!disablePortal) {
        setMountNode(getContainer(container) || (global && global.document.body))
      }
    }, [container, disablePortal])

    React.useImperativeHandle(ref, (): Element => mountNode as Element, [mountNode])

    if (disablePortal) {
      // Verify that children has only one child node (a React element) and return it if it exists,
      // otherwise this method will throw an error.
      React.Children.only(children)
      return React.cloneElement(children)
    }

    return mountNode
      ? ReactDOM.createPortal(React.cloneElement(children, { ...rest }), mountNode as Element)
      : null
  }
)

Portal.displayName = 'FPortal'

export default Portal
