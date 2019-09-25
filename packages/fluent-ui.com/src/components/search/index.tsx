import * as React from 'react'
import { Box, Typography, Transition, Theme } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { useClickOutside } from '@fluent-ui/hooks'
import { InstantSearch, Index } from 'react-instantsearch-dom'
// @ts-ignore
import algoliasearch from 'algoliasearch/lite'

import { styles } from './styles'
import Results from './Results'
import Input from './Input'

type SearchClassName = 'hits' | 'powerBy'
const useStyles = createUseStyles<Theme, SearchClassName>(styles)

const indices = [
  { name: `fluent-ui_components`, title: `Components` },
  { name: `fluent-ui_hooks`, title: `Hooks` },
  { name: `fluent-ui_getting-started`, title: `Getting Started` }
]

export default function Search(): React.ReactElement {
  const classes = useStyles()

  const [query, setQuery] = React.useState(``)
  const [focus, setFocus] = React.useState(false)

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const ref = React.useRef(null)
  useClickOutside(ref, (): void => {
    setFocus(false)
  })

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }): void => {
        setQuery(query)
      }}
      root={{ Root: Box, props: { ref } }}
    >
      <Input
        onFocus={(): void => {
          setFocus(true)
        }}
      />
      <Transition visible={query.length > 0 && focus} wrapper={false}>
        <Box className={classes.hits}>
          {indices.map(
            ({ name, title }): React.ReactElement => (
              <Index indexName={name} key={name}>
                <Results>
                  <Typography
                    variant="subtitle1"
                    as="header"
                    gutterBottom
                    borderBottom="1px solid #eee"
                    paddingBottom="0.4em"
                  >
                    {title}
                  </Typography>
                </Results>
              </Index>
            )
          )}
          <a className={classes.powerBy} href="https://www.algolia.com/docsearch">
            <img src="/images/algolia.svg" alt="algolia" />
          </a>
        </Box>
      </Transition>
    </InstantSearch>
  )
}
