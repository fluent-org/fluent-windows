import * as React from 'react'
import { ReactElement } from 'react'
import * as PropTypes from 'prop-types'
import { Command, CommandButton } from '@fluent-ui/core'

interface HeaderProps {
  siteTitle: string
  left: number
}

const Header = ({ siteTitle, left }: HeaderProps): ReactElement => (
  <Command
    backgroundColor="white.default"
    width={`calc(100% - ${left}px)`}
    height={56}
    position="fixed"
    left={left}
    top={0}
    zIndex={100}
  >
    <CommandButton icon="Code" as="a" href="https://github.com/chenyueban/fluent-ui" />

    <Command.Content>{siteTitle}</Command.Content>
  </Command>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
