import * as React from 'react'
import { navigate } from 'gatsby'

import { Box, Button } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'

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

const IndexPage = (props): React.ReactElement => {
  const handleLink = React.useCallback((): void => {
    const { langKey } = props.pageContext
    const prefix = langKey === 'en' ? '/' : `/${langKey}/`
    navigate(`${prefix}getting-started/installation`, { replace: true })
  }, [props.pageContext.langKey]) // eslint-disable-line

  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Home" />
      <Box
        width="100vw"
        height="100vh"
        backgroundColor="standard.light1"
        background="url(/icon-arrangement.png) 100% center / cover no-repeat fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="80%" marginTop="-10em">
          <Box>
            <Box className={classes.logo} display={['block', 'none']}>
              <img src="/images/fluent-ui.svg" alt="fluent-ui" />
            </Box>
            <Box className={classes.logoPure} width={[100, 233]} display={['none', 'block']}>
              <img src="/images/fluent-ui-pure.svg" alt="fluent-ui" />
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
            受 Microsoft Fluent Design System 启发的 React 组件库.
          </Box>
          <Box marginTop="1.2em">
            <Box display={['block', 'inline-block']}>
              <Button variant="primary" size="large" onClick={handleLink}>
                开始
              </Button>
            </Box>
            <Box margin={['0.6em 0 0 0', '0 0 0 1.2em']} display={['block', 'inline-block']}>
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
