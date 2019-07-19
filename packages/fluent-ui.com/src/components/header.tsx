import * as React from 'react'
import { navigate } from 'gatsby'

import { Command, CommandButton, Tooltip } from '@fluent-ui/core'
import { Home as HomeIcon, Code as CodeIcon } from '@fluent-ui/icons'

const Header = (): React.ReactElement => {
  function handleNavigateToHome(): void {
    navigate(`/`)
  }

  return (
    <Command position="sticky" top="0" height={56} style={{ backgroundColor: '#fff' }} zIndex={99}>
      <Tooltip title="Home page">
        <CommandButton onClick={handleNavigateToHome}>
          <HomeIcon />
        </CommandButton>
      </Tooltip>
      <Tooltip title="Github repository">
        <CommandButton as="a" href="https://github.com/chenyueban/fluent-ui">
          <CodeIcon />
        </CommandButton>
      </Tooltip>

      <Command.Content>
        <h3>Fluent-UI</h3>
      </Command.Content>
    </Command>
  )
}

export default Header
