import * as React from 'react'
import { connectStateResults, Highlight, Snippet } from 'react-instantsearch-dom'
import { IntlContext } from 'react-intl'
import { Link } from 'gatsby'
import { Typography, Box } from '@fluent-ui/core'

const Results = connectStateResults(({ searchResults, children }): any => {
  const intl = React.useContext(IntlContext)
  const localeResult =
    searchResults && searchResults.hits
      ? searchResults.hits.filter(
          // @ts-ignore
          (hit): boolean => hit.frontmatter.langKey === intl.locale
        )
      : []

  return (
    searchResults &&
    searchResults.nbHits > 0 && (
      <>
        {children}
        {localeResult.map(
          (hit: any): React.ReactElement => (
            <Box key={hit.objectID} display="flex">
              <Typography variant="subtitle1" width="26%" color="standard.dark2">
                <Highlight attribute="frontmatter.title" hit={hit} tagName="mark" />
              </Typography>
              <Typography variant="subtitle2" flex={1}>
                <Link to={hit.fields.slug}>
                  <Snippet attribute="excerpt" hit={hit} tagName="mark" />
                </Link>
              </Typography>
            </Box>
          )
        )}
      </>
    )
  )
})

export default Results
