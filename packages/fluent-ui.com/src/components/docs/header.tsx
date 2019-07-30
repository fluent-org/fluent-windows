import * as React from 'react'
import { navigate } from 'gatsby'

import { Command, CommandButton, Tooltip, Box } from '@fluent-ui/core'
import {
  Home as HomeIcon,
  Code as CodeIcon,
  GlobalNavigationButton as GlobalNavigationButtonIcon
} from '@fluent-ui/icons'
import { useDispatch } from '@fluent-ui/hooks'

const Header = (): React.ReactElement => {
  function handleNavigateToHome(): void {
    navigate(`/`)
  }

  const dispatch = useDispatch({ type: 'navigation/expand', payload: (v: boolean): boolean => !v })

  return (
    <Command position="sticky" top="0" height={56} style={{ backgroundColor: '#fff' }} zIndex={99}>
      <Tooltip title="Home page">
        <CommandButton onClick={handleNavigateToHome}>
          <HomeIcon />
        </CommandButton>
      </Tooltip>
      <Tooltip title="Github repository">
        <CommandButton as="a" href="https://github.com/fluent-org/fluent-ui">
          <CodeIcon />
        </CommandButton>
      </Tooltip>

      <Command.Content>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <CommandButton onClick={dispatch}>
            <GlobalNavigationButtonIcon />
          </CommandButton>
        </Box>
      </Command.Content>
    </Command>
  )
}

export default Header
