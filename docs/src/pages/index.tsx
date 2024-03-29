import * as React from 'react'
import { navigate } from 'gatsby'

import { Box, Button } from '@fluent-windows/core'
import { createUseStyles } from '@fluent-windows/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

const useStyles = createUseStyles({
  logo: {
    '& > img': {
      width: 100
    }
  },
  logoPure: {
    float: 'left'
  },
  title: {
    overflow: 'hidden',
    wordBreak: 'break-word'
  },
  desc: {
    letterSpacing: '0.034em'
  }
})

const IndexPage = (): React.ReactElement => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Box
        width="100vw"
        height="100vh"
        backgroundColor="standard.light1"
        background="url(/images/icon-arrangement.png) 100% center / cover no-repeat fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%" marginTop="-10em">
          <Box>
            <Box className={classes.logo} display={['block', 'none']}>
              <img src="/images/fluent-windows.svg" alt="fluent-windows" />
            </Box>
            <Box className={classes.logoPure} width={[100, 233]} display={['none', 'block']}>
              <img src="/images/fluent-windows-pure.svg" alt="fluent-windows" />
            </Box>
            <Box
              className={classes.title}
              color="standard.dark3"
              fontSize={['2.8em', '6em']}
              fontFamily={`Georgia, Cambria, "Times New Roman", Times, serif`}
              height={'100%'}
            >
              <Box as="span" display={['inline-block', 'none']}>
                F
              </Box>
              LUENT-UI
            </Box>
          </Box>
          <Box
            className={classes.desc}
            color="standard.dark3"
            fontSize={['1em', '1.25em']}
            fontFamily={`Georgia, Cambria, "Times New Roman", Times, serif`}
          >
            React components that inspired by Microsoft Fluent Design System.
          </Box>
          <Box marginTop="1.2em">
            <Box display={['block', 'inline-block']}>
              <Button as="a" href="/getting-started/installation" variant="primary" size="large">
                GET START
              </Button>
            </Box>
            <Box margin={['0.6em 0 0 0', '0 0 0 1.2em']} display={['block', 'inline-block']}>
              <Button as="a" href="https://github.com/fluent-org/fluent-windows" size="large">
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
