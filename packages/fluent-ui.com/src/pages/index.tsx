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
        flexDirection="column"
        justifyContent="center"
        paddingLeft={300}
      >
        <Box fontSize={128} fontWeight={600} marginTop={-260}>
          FLUENT-UI
        </Box>
        <Box fontSize={18} fontWeight={500} marginTop={30}>
          React components that implement Microsoft Fluent Design System.
        </Box>
        <Box marginTop={20} display="flex">
          <Button variant="primary" size="large" onClick={handleLink}>
            GET START
          </Button>
          <Button
            as="a"
            href="https://github.com/fluent-org/fluent-ui"
            style={{ marginLeft: 20 }}
            size="large"
          >
            GITHUB
          </Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
