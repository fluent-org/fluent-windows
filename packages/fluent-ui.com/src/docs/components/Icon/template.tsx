import * as React from 'react'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Box } from '@fluent-ui/core'
import * as Icons from '@fluent-ui/icons'

const Button = styled.div`
  width: 20%;
  height: 100px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in-out 250ms;
  & > svg {
    transition: all ease-in-out 250ms;
  }
  & > span {
    font-size: 12px;
    line-height: 30px;
  }
  &:hover {
    background-color: rgba(0, 120, 215, 1);
    color: white;
    > svg {
      color: white;
      transform: scale(1.25);
    }
  }
`

const Template = (): ReactElement => {
  const IconArray = Object.keys(Icons).map(key => Icons[key])
  return (
    <Box>
      {IconArray.map(
        (Icon): ReactElement => {
          const name = String.prototype.substring.call(Icon.displayName, 5)
          return (
            <CopyToClipboard key={name} text={`<${name} />`}>
              <Button>
                <Icon />
                <span>{name}</span>
              </Button>
            </CopyToClipboard>
          )
        }
      )}
    </Box>
  )
}

export default Template
