export interface PortalProps {
  children: React.ReactElement
  container?: Element | (() => Element) | null
  disablePortal?: boolean
}
