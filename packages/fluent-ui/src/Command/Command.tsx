import * as React from 'react'
import { MoreLine as MoreLineIcon } from '@fluent-ui/icons' // TODO treeShaking
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

    const container = React.useMemo<CommandContainer>(
      (): CommandContainer =>
        React.Children.toArray(children).reduce<CommandContainer>(
          (acc, cur): CommandContainer => {
            if (cur.type.displayName! === 'FCommandContent') {
              return {
                ...acc,
                content: [...acc.content, cur]
              }
            } else if (cur.type.displayName === 'FCommandSecondary') {
              return {
                ...acc,
                secondary: cur.props.children
              }
            }
            return {
              ...acc,
              standard: [...acc.standard, cur]
            }
          },
          {
            content: [],
            standard: [],
            secondary: null
          }
        ),
      [children]
    )

    // Reveal does not take effect when using acrylic
    const _reveal = React.useMemo((): boolean => (acrylic ? false : reveal), [acrylic, reveal])
    const [RevealWrapper] = useReveal()
    // Secondary Popup related
    const [secondaryVisible, setSecondaryVisible] = React.useState(false)
    const handleSecondaryVisible = React.useCallback((): void => {
      if (secondaryVisible) return
      setSecondaryVisible((visible: boolean): boolean => !visible)
    }, [secondaryVisible])
    // Click on the area outside the More menu to close the More menu.
    const [referenceRef, popperRef] = usePopper<HTMLDivElement, HTMLDivElement>({
      placement: 'bottom-end'
    })
    useClickOutside(popperRef, (event: MouseEvent | TouchEvent): void => {
      // @ts-ignore
      if (!referenceRef.current || referenceRef.current.contains(event.target)) return
      setSecondaryVisible((visible: boolean): boolean => !visible)
    })
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
          {container.secondary !== null &&
            (_reveal ? (
              <RevealWrapper>
                <Item
                  ref={referenceRef}
                  style={{ height: '100%' }}
                  onClick={handleSecondaryVisible}
                  prefix={<MoreLineIcon />}
                />
              </RevealWrapper>
            ) : (
              <Item ref={referenceRef} onClick={handleSecondaryVisible} prefix={<MoreLineIcon />} />
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
