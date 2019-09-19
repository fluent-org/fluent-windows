import * as React from 'react'
// @ts-ignore
import { ChromePicker } from 'react-color'
import { useDispatch } from '@fluent-ui/hooks'

import { Box, Button } from '@fluent-ui/core'
import { createUseStyles, useTheme } from '@fluent-ui/styles'

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

  const theme = useTheme()
  // @ts-ignore
  const [color, setColor] = React.useState(theme!.colors!.primary!.default)

  const dispatch = React.useCallback((_color: string): void => {
    // eslint-disable-next-line
    useDispatch({ type: 'theme/setPrimaryColor', payload: _color })()
  }, [])

  const handleChangeComplete = React.useCallback((primaryColor): void => {
    setColor(primaryColor.hex)
  }, [])

  const handleSetClick = React.useCallback((): void => {
    dispatch(color)
  }, [color, dispatch])
  const handleResetClick = React.useCallback((): void => {
    dispatch('#0078d4')
    setColor('#0078d4')
  }, [dispatch])

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
