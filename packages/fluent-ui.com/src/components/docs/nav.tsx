import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Transition, Box } from '@fluent-ui/core'
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
  CashDrawer as CashDrawerIcon
} from '@fluent-ui/icons'
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
  function handleExpanded(): void {
    setExpanded((e): boolean => !e)
  }
  function handleNavigation(title: string): void {
    navigate(`/components/${title.toLowerCase()}`)
  }
  const result = getFrontMatter(data)

  return (
    <Navigation value={activeId} expanded={expanded} acrylic width={260} height="100%">
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
                    onClick={handleNavigation.bind(undefined, title)}
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
}

export default Nav