import * as React from 'react'
import { navigate } from 'gatsby'

import { Box, Button } from '@fluent-ui/core'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = (): React.ReactElement => {
  function handleLink(): void {
    navigate('/components/box', { replace: true })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <Box
        width="100vw"
        height="100vh"
        backgroundColor="standard.default"
        background="url(msft-verge-fluent.jpg) 50% center / cover no-repeat fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%" marginTop="-10em">
          <Box fontSize={{ xs: '3em', md: '8em' }} fontWeight={600}>
            FLUENT-UI
          </Box>
          <Box fontSize={{ xs: '1em', md: '1.25em' }} fontWeight={500}>
            React components that implement Microsoft Fluent Design System.
          </Box>
          <Box marginTop="1.2em">
            <Box display={{ xs: 'block', md: 'inline-block' }}>
              <Button variant="primary" size="large" onClick={handleLink}>
                GET START
              </Button>
            </Box>
            <Box
              margin={{ xs: '0.6em 0 0 0', md: '0 0 0 1.2em' }}
              display={{ xs: 'block', md: 'inline-block' }}
            >
              <Button as="a" href="https://github.com/fluent-org/fluent-ui" size="large">
                GITHUB
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
