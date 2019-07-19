import * as React from 'react'
import { navigate } from 'gatsby'
import { Navigation } from '@fluent-ui/core'
import {
  GlobalNavigationButton as GlobalNavigationButtonIcon,
  Connected as ConnectedIcon,
  Code as CodeIcon,
  Home as HomeIcon,
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

function getIconBytitle(title: string): JSX.Element {
  const target = iconMap.find((v): boolean => v.title === title)
  return target ? target.icon : <ConnectedIcon />
}

const Nav = ({ data }: TemplateProps): React.ReactElement => {
  const activeId = data.docs.edges.findIndex(
    (v): boolean => v.node.frontmatter.title === data.doc.frontmatter.title
  )
  const [expanded, setExpanded] = React.useState(true)
  function handleExpanded(): void {
    setExpanded((e): boolean => !e)
  }
  function handleNavigation(title: string): void {
    navigate(`/components/${title.toLowerCase()}`)
  }
  function handleNavigationToHome(): void {
    navigate(`/`)
  }
  return (
    <Navigation
      value={`component${activeId}`}
      expanded={expanded}
      acrylic
      width={260}
      height="100%"
    >
      <Navigation.Header>
        <Navigation.Item onClick={handleExpanded}>
          <GlobalNavigationButtonIcon />
        </Navigation.Item>
      </Navigation.Header>
      {data.docs.edges.map(
        (child, index): React.ReactElement => (
          <Navigation.Item
            id={`component${index}`}
            key={child.node.frontmatter.title}
            onClick={handleNavigation.bind(undefined, child.node.frontmatter.title)}
          >
            {getIconBytitle(child.node.frontmatter.title)}
            <span>{child.node.frontmatter.title}</span>
          </Navigation.Item>
        )
      )}
    </Navigation>
  )
}

export default Nav
