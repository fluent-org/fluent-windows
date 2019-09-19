import * as React from 'react'
import { navigate } from 'gatsby'

import { Command, Item, Tooltip, Box } from '@fluent-ui/core'
import { GlobalNavigationButton as GlobalNavigationButtonIcon } from '@fluent-ui/icons'
import { useDispatch } from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'

const useStyles = createUseStyles({
  iconButton: {
    width: '1.2em'
  }
})

const Header = (): React.ReactElement => {
  function handleNavigateToHome(): void {
    navigate(`/`)
  }

  const dispatch = useDispatch({ type: 'navigation/expand', payload: (v: boolean): boolean => !v })

  const classes = useStyles()

  const home = <img className={classes.iconButton} src="/images/fluent-ui.svg" alt="fluent-ui" />
  const github = <img className={classes.iconButton} src="/images/github.svg" alt="fluent-ui" />

  return (
    <Command position="sticky" top="0" height={56} style={{ backgroundColor: '#fff' }} zIndex={99}>
      <Tooltip title="Home page">
        <Item onClick={handleNavigateToHome} prefix={home} />
      </Tooltip>
      <Tooltip title="Github repository">
        <Item as="a" href="https://github.com/fluent-org/fluent-ui" prefix={github} />
      </Tooltip>

      <Command.Content>
        <Box display={['block', 'none']}>
          <Item onClick={dispatch} prefix={<GlobalNavigationButtonIcon />} />
        </Box>
      </Command.Content>
    </Command>
  )
}

export default Header
