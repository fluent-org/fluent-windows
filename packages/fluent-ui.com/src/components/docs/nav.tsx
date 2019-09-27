import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Drawer, Item, ItemGroup } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import {
  MenuLine as MenuLineIcon,
  SearchLine as SearchLineIcon,
  LayoutLine as LayoutLineIcon,
  InputMethodLine as InputMethodLineIcon,
  NavigationLine as NavigationLineIcon,
  PieChart2Line as PieChart2LineIcon,
  ProjectorLine as ProjectorLineIcon,
  FeedbackLine as FeedbackLineIcon,
  MagicLine as MagicLineIcon,
  Loader2Line as Loader2LineIcon,
  MoreLine as MoreLineIcon,
  GuideLine as GuideLineIcon
} from '@fluent-ui/icons' // TODO tree-shaking
import { useAction } from '@fluent-ui/hooks'
import { useIntl } from 'react-intl'
import Search from '../search'
import NavFooter from './nav-footer'

import { toLine } from '../../utils'
import { TemplateProps } from '../../templates/docs'

const iconMap = [
  {
    title: 'Layout',
    prefix: <LayoutLineIcon />
  },
  {
    title: 'Inputs',
    prefix: <InputMethodLineIcon />
  },
  {
    title: 'Navigation',
    prefix: <NavigationLineIcon />
  },
  {
    title: 'DataDisplay',
    prefix: <PieChart2LineIcon />
  },
  {
    title: 'Utils',
    prefix: <ProjectorLineIcon />
  },
  {
    title: 'Feedback',
    prefix: <FeedbackLineIcon />
  },
  {
    title: 'hooks',
    prefix: <MagicLineIcon />
  },
  {
    title: 'Progress',
    prefix: <Loader2LineIcon />
  },
  {
    title: 'Others',
    prefix: <MoreLineIcon />
  },
  {
    title: 'getting-started',
    prefix: <GuideLineIcon />
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
  return target ? target.prefix : <MenuLineIcon />
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
          <Item prefix={<SearchLineIcon />}>
            <Search />
          </Item>
        </Navigation.Header>
        <Navigation.Footer>
          <NavFooter />
        </Navigation.Footer>

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
        <Item onClick={handleExpanded} prefix={<MenuLineIcon />} />
        <Item prefix={<SearchLineIcon />}>
          <Search />
        </Item>
      </Navigation.Header>
      <Navigation.Footer>
        <NavFooter />
      </Navigation.Footer>

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
