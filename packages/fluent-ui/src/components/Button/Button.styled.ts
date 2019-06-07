import styled from 'styled-components'
import { color, background, themeGet } from 'styled-system'
import { theme } from '../../index'

interface StyledButtonProps {
  color: 'white' | 'black'
  bg: 'accent' | 'primary'
}

const StyledButton = styled.button<StyledButtonProps>`
  ${color}
  ${background}
`

StyledButton.defaultProps = {
  color: 'black'
  // bg: themeGet('variant.primary')({})
}

export default StyledButton
