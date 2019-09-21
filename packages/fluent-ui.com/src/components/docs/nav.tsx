import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Drawer, Item, ItemGroup } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import {
  GlobalNavigationButton as GlobalNavigationButtonIcon,
  Connected as ConnectedIcon,
  Input as InputIcon,
  GiftboxOpen as GiftboxOpenIcon,
  ClosePaneMirrored as ClosePaneMirroredIcon,
  Badge as BadgeIcon,
  Settings as SettingsIcon,
  LineDisplay as LineDisplayIcon,
  Feedback as FeedbackIcon,
  ProgressRingDots as ProgressRingDotsIcon
} from '@fluent-ui/icons'
import { useAction } from '@fluent-ui/hooks'
import { useIntl } from 'react-intl'
import { toLine } from '../../utils'
import { TemplateProps } from '../../templates/docs'

const iconMap = [
  {
    title: 'Layout',
    prefix: <GiftboxOpenIcon />
  },
  {
    title: 'Inputs',
    prefix: <InputIcon />
  },
  {
    title: 'Navigation',
    prefix: <ClosePaneMirroredIcon />
  },
  {
    title: 'DataDisplay',
    prefix: <LineDisplayIcon />
  },
  {
    title: 'Utils',
    prefix: <SettingsIcon />
  },
  {
    title: 'Feedback',
    prefix: <FeedbackIcon />
  },
  {
    title: 'hooks',
    prefix: <BadgeIcon />
  },
  {
    title: 'Progress',
    prefix: <ProgressRingDotsIcon />
  }
]

interface Title {
  title: string
  slug: string
}
interface Acc {
  [key: string]: Title[]
}
interface Result {
  type: string
  titles: Title[]
}
const getFrontMatter = (target: TemplateProps['data'], langKey: string): Result[] => {
  const classify: {
    [type: string]: Title[]
  } = target.docs.edges
    .filter((v): boolean => v.node.frontmatter.langKey === langKey)
    .reduce((acc, elem): Acc => {
      const { type, title } = elem.node.frontmatter
      const { slug } = elem.node.fields
      if ((acc as Acc)[type]) {
        return {
          ...acc,
          [type]: [...(acc as Acc)[type], { title, slug }]
        }
      }
      return {
        ...acc,
        [type]: [{ title, slug }]
      }
    }, {})

  return Object.keys(classify).map(
    (type): Result => ({
      type,
      titles: classify[type]
    })
  )
}
function getPrefixBytitle(title: string): JSX.Element {
  const target = iconMap.find((v): boolean => v.title === title)
  return target ? target.prefix : <ConnectedIcon />
}

const useStyles = createUseStyles({
  pc: {
    '@media (max-width: 600px)': {
      width: 0,
      opacity: 0,
      display: 'none',
      visibility: 'hidden'
    },
    '@media (min-width: 600px)': {
      width: 260
    }
  }
})

const Nav = ({ data, pageContext }: TemplateProps): React.ReactElement => {
  const activeId = data.doc.frontmatter.title

  const [expanded, setExpanded] = React.useState(true)
  const [drawerVisible, setDrawerVisible] = React.useState(false)
  const handleExpanded = React.useCallback((): void => {
    setExpanded((e): boolean => !e)
  }, [])
  const handleDrawerVisible = React.useCallback((): void => {
    setDrawerVisible((e): boolean => !e)
  }, [])

  useAction(
    'navigation/expand',
    (payload): void => {
      setDrawerVisible(payload)
    },
    []
  )

  const handleNavigation = React.useCallback((slug: string): void => {
    navigate(slug)
  }, [])

  const result = getFrontMatter(data, pageContext.langKey)

  const rootRef = React.useRef<HTMLDivElement>(null)

  const { formatMessage } = useIntl()

  const mobileChild = (
    <Drawer visible={drawerVisible} onChange={handleDrawerVisible}>
      <Navigation ref={rootRef} value={activeId} expanded={true} acrylic height="100%" width={260}>
        <Navigation.Header>
          <Item onClick={handleExpanded} prefix={<GlobalNavigationButtonIcon />} />
        </Navigation.Header>
        {result.map(
          ({ type, titles }): React.ReactFragment => {
            return (
              <ItemGroup
                key={type}
                title={formatMessage({ id: `nav.${toLine(type)}` })}
                prefix={getPrefixBytitle(type)}
              >
                {titles.map(
                  ({ title, slug }): React.ReactElement => (
                    <Item
                      value={title}
                      key={title}
                      className={activeId === title ? 'active-item' : ''}
                      onClick={handleNavigation.bind(undefined, slug)}
                    >
                      {title}
                    </Item>
                  )
                )}
              </ItemGroup>
            )
          }
        )}
      </Navigation>
    </Drawer>
  )
  const pcClasses = useStyles()
  const pcChild = (
    <Navigation
      className={pcClasses.pc}
      ref={rootRef}
      value={activeId}
      expanded={expanded}
      acrylic
      height="100%"
    >
      <Navigation.Header>
        <Item onClick={handleExpanded} prefix={<GlobalNavigationButtonIcon />} />
      </Navigation.Header>
      {result.map(
        ({ type, titles }): React.ReactFragment => {
          return (
            <ItemGroup
              key={type}
              title={formatMessage({ id: `nav.${toLine(type)}` })}
              prefix={getPrefixBytitle(type)}
            >
              {titles.map(
                ({ title, slug }): React.ReactElement => (
                  <Item
                    value={title}
                    key={title}
                    className={activeId === title ? 'active-item' : ''}
                    onClick={handleNavigation.bind(undefined, slug)}
                  >
                    {title}
                  </Item>
                )
              )}
            </ItemGroup>
          )
        }
      )}
    </Navigation>
  )

  React.useEffect((): void => {
    const activeElement = document.querySelector('.active-item')
    if (activeElement) {
      activeElement.scrollIntoView()
      if (rootRef.current) rootRef.current.scrollTop = 0
    }
  }, [drawerVisible])

  return (
    <>
      {mobileChild}
      {pcChild}
    </>
  )
}

export default Nav
