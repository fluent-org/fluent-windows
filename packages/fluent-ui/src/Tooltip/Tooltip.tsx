import * as React from 'react'

export interface TooltipProps
  extends React.ComponentPropsWithoutRef<'div'>,
    React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (props: TooltipProps, ref): React.ReactElement => {
    return <div ref={ref} {...props} />
  }
)

Tooltip.displayName = 'FTooltip'

export default Tooltip
