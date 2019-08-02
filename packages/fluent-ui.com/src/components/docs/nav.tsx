import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Transition, Box, Drawer } from '@fluent-ui/core'
import {
  GlobalNavigationButton as GlobalNavigationButtonIcon,
  Connected as ConnectedIcon,
  CheckboxComposite as CheckboxCompositeIcon,
  RadioBtnOn as RadioBtnOnIcon,
  Color as ColorIcon,
  Input as InputIcon,
  GiftboxOpen as GiftboxOpenIcon,
  ToggleBorder as ToggleBorderIcon,
  ClosePaneMirrored as ClosePaneMirroredIcon,
  GripperBarHorizontal as GripperBarHorizontalIcon,
  Badge as BadgeIcon,
  NUIFPStartSlideHand as NUIFPStartSlideHandIcon,
  NUIFPRollLeftHand as NUIFPRollLeftHandIcon,
  BackgroundToggle as BackgroundToggleIcon,
  ToolTip as TooltipIcon,
  CashDrawer as CashDrawerIcon,
  FontSize as FontSizeIcon,
  ActionCenter as ActionCenterIcon
} from '@fluent-ui/icons'
import { useAction, useMedia } from '@fluent-ui/hooks'
import { TemplateProps } from './template'

const iconMap = [
  {
    title: 'Box',
    icon: <GiftboxOpenIcon />
  },
  {
    title: 'Checkbox',
    icon: <CheckboxCompositeIcon />
  },
  {
    title: 'Radio',
    icon: <RadioBtnOnIcon />
  },
  {
    title: 'Toggle',
    icon: <ToggleBorderIcon />
  },
  {
    title: 'Color',
    icon: <ColorIcon />
  },
  {
    title: 'Input',
    icon: <InputIcon />
  },
  {
    title: 'Navigation',
    icon: <ClosePaneMirroredIcon />
  },
  {
    title: 'Command',
    icon: <GripperBarHorizontalIcon />
  },
  {
    title: 'Icon',
    icon: <BadgeIcon />
  },
  {
    title: 'Button',
    icon: <NUIFPStartSlideHandIcon />
  },
  {
    title: 'IconButton',
    icon: <NUIFPRollLeftHandIcon />
  },
  {
    title: 'Transition',
    icon: <BackgroundToggleIcon />
  },
  {
    title: 'Tooltip',
    icon: <TooltipIcon />
  },
  {
    title: 'Drawer',
    icon: <CashDrawerIcon />
  },
  {
    title: 'Typography',
    icon: <FontSizeIcon />
  },
  {
    title: 'Dialog',
    icon: <ActionCenterIcon />
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

function getIconBytitle(title: string): JSX.Element {
  const target = iconMap.find((v): boolean => v.title === title)
  return target ? target.icon : <ConnectedIcon />
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
          <Navigation.Item onClick={handleExpanded}>
            <GlobalNavigationButtonIcon />
          </Navigation.Item>
        </Navigation.Header>
        {result.map(
          ({ type, titles }): React.ReactFragment => (
            <React.Fragment key={type}>
              <Transition visible={drawerVisible} mountOnEnter unmountOnExit>
                <Box padding="12px" height={40} position="relative" display="flex">
                  {type}
                </Box>
              </Transition>
              {titles.map(
                (title): React.ReactElement => {
                  return (
                    <Navigation.Item
                      id={title}
                      key={title}
                      className={activeId === title ? 'active-item' : ''}
                      onClick={handleNavigation.bind(undefined, title, type)}
                      style={{ paddingLeft: drawerVisible ? 24 : 12 }}
                    >
                      {getIconBytitle(title)}
                      <span>{title}</span>
                    </Navigation.Item>
                  )
                }
              )}
            </React.Fragment>
          )
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
        <Navigation.Item onClick={handleExpanded}>
          <GlobalNavigationButtonIcon />
        </Navigation.Item>
      </Navigation.Header>
      {result.map(
        ({ type, titles }): React.ReactFragment => {
          return (
            <React.Fragment key={type}>
              <Transition visible={expanded} mountOnEnter unmountOnExit>
                <Box padding="12px" height={40} position="relative" display="flex">
                  {type}
                </Box>
              </Transition>
              {titles.map(
                (title): React.ReactElement => (
                  <Navigation.Item
                    id={title}
                    key={title}
                    className={activeId === title ? 'active-item' : ''}
                    onClick={handleNavigation.bind(undefined, title, type)}
                    style={{ paddingLeft: expanded ? 24 : 12 }}
                  >
                    {getIconBytitle(title)}
                    <span>{title}</span>
                  </Navigation.Item>
                )
              )}
            </React.Fragment>
          )
        }
      )}
    </Navigation>
  )

  const isMobile = useMedia('xs')

  React.useEffect((): void => {
    const activeElement = document.querySelector('.active-item')
    if (activeElement) {
      activeElement.scrollIntoView()
      if (rootRef.current) rootRef.current.scrollTop = 0
    }
  }, [drawerVisible, isMobile])

  return isMobile ? mobileChild : pcChild
}

export default Nav
