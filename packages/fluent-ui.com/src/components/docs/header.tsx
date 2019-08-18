import * as React from 'react'
import { navigate } from 'gatsby'

import { Command, Item, Tooltip, Box } from '@fluent-ui/core'
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
        <Item onClick={handleNavigateToHome} prefix={<HomeIcon />} />
      </Tooltip>
      <Tooltip title="Github repository">
        <Item as="a" href="https://github.com/fluent-org/fluent-ui" prefix={<CodeIcon />} />
      </Tooltip>

      <Command.Content>
        <Box display={{ xs: 'block', sm: 'none' }}>
          <Item onClick={dispatch} prefix={<GlobalNavigationButtonIcon />} />
        </Box>
      </Command.Content>
    </Command>
  )
}

export default Header
