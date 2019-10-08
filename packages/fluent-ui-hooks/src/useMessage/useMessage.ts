/**
 * Toast using functional calls
 *
 * Demo
 * import { useMessage } from '@fluent-ui/hooks'
 *
  const [handleOpen, handleClose] = useMessage(
    (visible, content, close) => (
      <Toast
        visible={visible}
        actions={
          <IconButton onClick={close}>
            <Icon.Cancel />
          </IconButton>
        }
      >
        {content}
      </Toast>
    ),
    0
  )
  function handleClick() {
    handleOpen('hello world!')
  }
  return (
    <>
      <Button onClick={handleClick}>open</Button>
      <Button onClick={handleClose}>close</Button>
    </>
  )
 */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import useGlobal from '../useGlobal'

type Open = (content: React.ReactChild) => void
type Close = () => void

type FunctionContainer = (
  visible: boolean,
  content: React.ReactChild,
  close: Close
) => React.ReactElement
type Duration = number
type Return = [Open, Close]

function useMessage(functionContainer: FunctionContainer, duration: Duration = 3000): Return {
  const [visible, setVisible] = React.useState(false)
  const [content, setContent] = React.useState<React.ReactChild>('')
  const handleClose = React.useCallback((): void => {
    setVisible(false)
  }, [])
  const global = useGlobal() as Window
  const ref = React.useRef(global && global.document && global.document.createElement('div'))
  React.useEffect((): void => {
    if (visible === true) {
      global.document.body.appendChild(ref.current)
      ReactDOM.render(functionContainer(visible, content, handleClose), ref.current)
      duration &&
        setTimeout((): void => {
          handleClose()
        }, duration)
    }
  }, [duration, visible, content]) // eslint-disable-line
  React.useEffect((): void => {
    if (visible === false) {
      const unmountResult = ReactDOM.unmountComponentAtNode(ref.current)
      if (unmountResult && ref.current.parentNode) {
        ref.current.parentNode.removeChild(ref.current)
      }
    }
  }, [duration, visible])
  const handleOpen = React.useCallback((_content: React.ReactChild): void => {
    setContent(_content)
    setVisible(true)
  }, [])
  return [handleOpen, handleClose]
}

export default useMessage
