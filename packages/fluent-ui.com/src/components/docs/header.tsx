import * as React from 'react'
import { navigate } from 'gatsby'
import { useIntl, IntlContext } from 'react-intl'

import { Command, Item, Tooltip, Box, List, Transition, Portal } from '@fluent-ui/core'
import {
  EarthLine as EarthLineIcon,
  PaletteLine as PaletteLineIcon,
  MenuLine as MenuLineIcon
} from '@fluent-ui/icons' // TODO tree-shaking
import { useDispatch, usePopper, useClickOutside, useGlobal } from '@fluent-ui/hooks'
import { createUseStyles } from '@fluent-ui/styles'

import { langKeys, LangKey } from '../../translations'
import { pathnameToLanguage } from '../../utils'

const useStyles = createUseStyles({
  iconButton: {
    width: '1em'
  }
})

const Header = (): React.ReactElement => {
  const dispatch = useDispatch({ type: 'navigation/expand', payload: (v: boolean): boolean => !v })

  const classes = useStyles()

  const home = <img className={classes.iconButton} src="/images/fluent-ui.svg" alt="fluent-ui" />
  const github = <img className={classes.iconButton} src="/images/github.svg" alt="fluent-ui" />

  const { formatMessage } = useIntl()

  const [changeLanguageVisible, setChangeLanguageVisible] = React.useState(false)
  const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
    placement: 'bottom-start',
    positionFixed: true
  })
  const handleChangeLanguageVisible = React.useCallback((): void => {
    setChangeLanguageVisible((v): boolean => !v)
  }, [])
  useClickOutside(referenceRef, (): void => {
    setChangeLanguageVisible(false)
  })

  const canonicalRef = React.useRef<string>(null)
  React.useEffect((): void => {
    // eslint-disable-next-line
    const global = useGlobal() as Window
    const { canonical } = pathnameToLanguage(global.location.pathname)
    // @ts-ignore
    canonicalRef.current = canonical
  }, [])

  const intl = React.useContext(IntlContext)

  const handleNavigateToHome = React.useCallback((): void => {
    intl.locale === 'en' ? navigate(`/`) : navigate(`/${intl.locale}`)
  }, [intl.locale])
  const handleNavigateToColorTool = React.useCallback((): void => {
    intl.locale === 'en'
      ? navigate(`/components/color/#color-tool`)
      : navigate(`/${intl.locale}/components/color/#color-tool`)
  }, [intl.locale])

  return (
    <>
      <Command position="sticky" top="0" height={56} backgroundColor="white.default" zIndex={99}>
        <Tooltip title={formatMessage({ id: 'command.change-language' })}>
          <div onClick={handleChangeLanguageVisible} style={{ display: 'flex' }}>
            <Item ref={referenceRef} prefix={<EarthLineIcon />} />
          </div>
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'command.edit-website-colors' })}>
          <Item onClick={handleNavigateToColorTool} prefix={<PaletteLineIcon />} />
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'command.home-page' })}>
          <Item onClick={handleNavigateToHome} prefix={home} />
        </Tooltip>
        <Tooltip title={formatMessage({ id: 'command.github-repository' })}>
          <Item as="a" href="https://github.com/fluent-org/fluent-ui" prefix={github} />
        </Tooltip>

        <Command.Content>
          <Box display={['block', 'none']}>
            <Item onClick={dispatch} prefix={<MenuLineIcon />} />
          </Box>
        </Command.Content>
      </Command>

      <Portal>
        <Transition visible={changeLanguageVisible} wrapper={false} mountOnEnter unmountOnExit>
          <Box ref={popperRef} zIndex={1000} width={160}>
            <List>
              {(Object.keys(langKeys) as LangKey[]).map(
                (langKey): React.ReactElement => {
                  const href = (langKey === 'en'
                    ? canonicalRef.current
                    : `/${langKey}${canonicalRef.current}`) as string
                  return (
                    <Item
                      key={langKey}
                      value={langKey}
                      onClick={(): void => {
                        navigate(href)
                      }}
                      active={intl.locale === langKey}
                    >
                      {langKeys[langKey]}
                    </Item>
                  )
                }
              )}
            </List>
          </Box>
        </Transition>
      </Portal>
    </>
  )
}

export default Header
