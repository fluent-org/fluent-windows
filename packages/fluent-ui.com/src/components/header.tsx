import * as React from 'react'
import { ReactElement } from 'react'
import * as PropTypes from 'prop-types'
import { Command, CommandButton } from '@fluent-ui/core'

const Header = ({ siteTitle }): ReactElement => (
  <Command width="100%" backgroundColor="white" height={56} position="sticky" top={0} left={0}>
    <CommandButton icon="Code" as="a" href="https://github.com/chenyueban/fluent-ui" />

    <Command.Content>Fluent</Command.Content>
  </Command>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
