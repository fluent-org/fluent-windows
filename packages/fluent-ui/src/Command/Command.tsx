import * as React from 'react'
import { More as MoreIcon } from '@fluent-ui/icons' // TODO treeShaking
import { useClickOutside, useReveal, usePopper } from '@fluent-ui/hooks' // TODO treeShaking
import { omit } from '../utils'
import Box from '../Box'
import { styles } from './Command.styled'
import Secondary from './components/Secondary'
import Content from './components/Content'
import Portal from '../Portal'
import Item from '../Item'
import Transition from '../Transition'
import {
  CommandProps,
  CommandContainer,
  CommandChild,
  CommandType,
  CommandPropTypes,
  CommandClassProps
} from './Command.type'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames'

export const name = 'Command'

const useStyles = createUseStyles<CommandClassProps>(styles, { name })

export const CommandContext = React.createContext(false)

const Command: React.FC<CommandProps> = React.forwardRef<HTMLDivElement, CommandProps>(
  (props, ref): React.ReactElement => {
    const {
      as = 'div',
      className: classNameProp,
      acrylic = false,
      reveal = false,
      children,
      ...rest
    } = props
    const classes = useStyles(props)
    const className = classNames(classes.root, classNameProp)

    const container: CommandContainer = {
      content: [],
      standard: [],
      secondary: []
    }
    React.Children.forEach(
      children,
      (child: CommandChild): void => {
        if (child.type.displayName! === 'FCommandContent') {
          container.content.push(child)
        } else if (child.type.displayName === 'FCommandSecondary') {
          container.secondary = child.props.children
        } else {
          container.standard.push(child)
        }
      }
    )
    // Reveal does not take effect when using acrylic
    const _reveal = acrylic ? false : reveal
    const [RevealWrapper] = useReveal()
    // Secondary Popup related
    const [secondaryVisible, setSecondaryVisible] = React.useState(false)
    function handleSecondaryVisible(): void {
      if (secondaryVisible) return
      setSecondaryVisible((visible: boolean): boolean => !visible)
    }
    // Click on the area outside the More menu to close the More menu.
    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
      placement: 'bottom'
    })
    useClickOutside(
      popperRef,
      (event: MouseEvent | TouchEvent): void => {
        // @ts-ignore
        if (!referenceRef.current || referenceRef.current.contains(event.target)) return
        setSecondaryVisible((visible: boolean): boolean => !visible)
      }
    )
    const otherProps = omit(rest, ['display', 'backgroundColor', 'color'])
    return (
      <Box
        ref={ref}
        as={as}
        acrylic={acrylic}
        className={className}
        backgroundColor="standard.light2"
        {...otherProps}
      >
        <CommandContext.Provider value={_reveal as boolean}>
          {!!container.content.length && <div className={classes.content}>{container.content}</div>}
          <div className={classes.primary}>
            {_reveal
              ? container.standard.map(
                  (child, i): React.ReactElement => <RevealWrapper key={i}>{child}</RevealWrapper>
                )
              : container.standard}
          </div>
          {!!container.secondary.length &&
            (_reveal ? (
              <RevealWrapper>
                <Item
                  ref={referenceRef}
                  style={{ height: '100%' }}
                  onClick={handleSecondaryVisible}
                  prefix={<MoreIcon />}
                />
              </RevealWrapper>
            ) : (
              <Item ref={referenceRef} onClick={handleSecondaryVisible} prefix={<MoreIcon />} />
            ))}

          <Portal>
            <Transition visible={secondaryVisible} wrapper={true} mountOnEnter unmountOnExit>
              <Box
                ref={popperRef}
                acrylic={acrylic}
                backgroundColor="standard.light2"
                className={classes.secondaryRoot}
              >
                {container.secondary}
              </Box>
            </Transition>
          </Portal>
        </CommandContext.Provider>
      </Box>
    )
  }
)

Object.defineProperty(Command, 'Secondary', {
  get(): typeof Secondary {
    return Secondary
  }
})
Object.defineProperty(Command, 'Content', {
  get(): typeof Content {
    return Content
  }
})

Command.displayName = `F${name}`

Command.propTypes = CommandPropTypes

export default Command as CommandType
