import { usePropperOptions } from '@fluent-ui/hooks'

export interface TooltipProps extends usePropperOptions {
  children: React.ReactElement
  title: React.ReactElement | string
  visible?: boolean
  onChange?: (visible: boolean) => void
  trigger?: 'hover' | 'click' | 'touch' | 'focus'
}
