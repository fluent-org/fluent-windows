import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Drawer, Item, ItemGroup } from '@fluent-ui/core'
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
import { useAction, useMedia } from '@fluent-ui/hooks'
import { TemplateProps } from './template'

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

interface Acc {
  [key: string]: string[]
}
interface Elem {
  type: string
  title: string
}
interface Result {
  type: string
  titles: string[]
}
const getFrontMatter = (target: TemplateProps['data']): Result[] => {
  const classify: {
    [type: string]: string[]
  } = target.docs.edges
    .map((v): Elem => v.node.frontmatter)
    .reduce((acc, elem): Acc => {
      const { type, title } = elem
      if ((acc as Acc)[type]) {
        return {
          ...acc,
          [type]: [...(acc as Acc)[type], title]
        }
      }
      return {
        ...acc,
        [type]: [title]
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

const Nav = ({ data }: TemplateProps): React.ReactElement => {
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

  const handleNavigation = React.useCallback((title: string, type: string): void => {
    type === 'hooks' ? navigate(`/hooks/${title}`) : navigate(`/components/${title.toLowerCase()}`)
  }, [])

  const result = getFrontMatter(data)

  const rootRef = React.useRef<HTMLDivElement>(null)

  const mobileChild = (
    <Drawer visible={drawerVisible} onChange={handleDrawerVisible}>
      <Navigation ref={rootRef} value={activeId} expanded={true} acrylic height="100%" width={260}>
        <Navigation.Header>
          <Item onClick={handleExpanded}>
            <GlobalNavigationButtonIcon />
          </Item>
        </Navigation.Header>
        {result.map(
          ({ type, titles }): React.ReactFragment => {
            return (
              <ItemGroup key={type} title={type} prefix={getPrefixBytitle(type)}>
                {titles.map(
                  (title): React.ReactElement => (
                    <Item
                      id={title}
                      key={title}
                      className={activeId === title ? 'active-item' : ''}
                      onClick={handleNavigation.bind(undefined, title, type)}
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
  const pcChild = (
    // @ts-ignore
    <Navigation
      ref={rootRef}
      value={activeId}
      expanded={expanded}
      acrylic
      height="100%"
      css={`
        @media (max-width: 600px) {
          width: 0;
          opacity: 0;
          display: none;
          visibility: hidden;
        }
        @media (min-width: 600px) {
          width: 260px;
        }
      `}
    >
      <Navigation.Header>
        <Item onClick={handleExpanded}>
          <GlobalNavigationButtonIcon />
        </Item>
      </Navigation.Header>
      {result.map(
        ({ type, titles }): React.ReactFragment => {
          return (
            <ItemGroup key={type} title={type} prefix={getPrefixBytitle(type)}>
              {titles.map(
                (title): React.ReactElement => (
                  <Item
                    id={title}
                    key={title}
                    className={activeId === title ? 'active-item' : ''}
                    onClick={handleNavigation.bind(undefined, title, type)}
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
