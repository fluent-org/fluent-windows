import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Navigation } from '@fluent-ui/core'

const Header = ({ siteTitle }): ReactElement => (
  <Navigation
    width="100%"
    maxHeight={64}
    height={64}
    position="fixed"
    top={0}
    horizontal
    acrylic
    zIndex={10}
  >
    <Navigation.Item>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`
        }}
      >
        {siteTitle}
      </Link>
    </Navigation.Item>
  </Navigation>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
