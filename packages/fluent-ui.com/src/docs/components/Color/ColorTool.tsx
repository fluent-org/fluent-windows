import * as React from 'react'
// @ts-ignore
import { ChromePicker } from 'react-color'
import { useDispatch } from '@fluent-ui/hooks'

import { Box, Button, Theme } from '@fluent-ui/core'
import { createUseStyles, useTheme } from '@fluent-ui/styles'

import { getCookie } from '../../../utils'

const useStyles = createUseStyles({
  buttons: {
    marginTop: 8
  },
  reset: {
    marginLeft: 8
  }
})

const Template = (): React.ReactElement => {
  const classes = useStyles()

  const theme = useTheme() as Theme
  // @ts-ignore
  const [color, setColor] = React.useState<string>(
    (): string => getCookie('primaryColor') || theme.colors!.primary!.default!
  )

  const handleChangeComplete = React.useCallback((primaryColor): void => {
    setColor(primaryColor.hex)
  }, [])

  const setPrimaryColorDispatch = React.useCallback((_color: string): void => {
    // eslint-disable-next-line
    useDispatch({ type: 'theme/setPrimaryColor', payload: _color })()
  }, [])
  const resetPrimaryColorDispatch = useDispatch({ type: 'theme/resetPrimaryColor' })

  const handleSetClick = React.useCallback((): void => {
    setPrimaryColorDispatch(color)
  }, [color, setPrimaryColorDispatch])
  const handleResetClick = React.useCallback((): void => {
    resetPrimaryColorDispatch()
    setColor('#0078d4')
  }, [resetPrimaryColorDispatch])

  return (
    <Box backgroundColor="standard.light3" padding={20}>
      <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
      <Box marginTop="8px">
        <Button variant="primary" onClick={handleSetClick}>
          Set Docs Colors
        </Button>
        <Button className={classes.reset} onClick={handleResetClick}>
          Reset Docs Colors
        </Button>
      </Box>
    </Box>
  )
}

export default Template
