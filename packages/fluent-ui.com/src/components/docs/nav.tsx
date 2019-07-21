import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation, Transition, Box } from '@fluent-ui/core'
import {
  GlobalNavigationButton as GlobalNavigationButtonIcon,
  Connected as ConnectedIcon,
  ChevronUpMed as ChevronUpMedIcon,
  ChevronDownMed as ChevronDownMedIcon,
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
  ToolTip as TooltipIcon
} from '@fluent-ui/icons'
import { useMedia } from '@fluent-ui/hooks'
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
  const isMobile = useMedia('xs')
  const [expanded, setExpanded] = React.useState(!isMobile)
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
          const defaultVisible = !!titles.find((t): boolean => t === activeId)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [visible, set] = React.useState(defaultVisible)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const handleVisible = React.useCallback((): void => {
            set((v): boolean => !v)
          }, [])
          return (
            <React.Fragment key={type}>
              <Navigation.Item onClick={handleVisible}>
                {visible ? <ChevronUpMedIcon /> : <ChevronDownMedIcon />}
                <Box as="span" color={visible ? 'standard.dark3' : 'black.default'}>
                  {type}
                </Box>
              </Navigation.Item>
              <Transition visible={visible} type="collapse">
                {titles.map(
                  (title): React.ReactElement => (
                    <Navigation.Item
                      id={title}
                      key={title}
                      onClick={handleNavigation.bind(undefined, title)}
                    >
                      {getIconBytitle(title)}
                      <span>{title}</span>
                    </Navigation.Item>
                  )
                )}
              </Transition>
            </React.Fragment>
          )
        }
      )}
    </Navigation>
  )
}

export default Nav
