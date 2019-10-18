import * as React from 'react'
import { Button } from '@fluent-ui/core'
import { createUseStyles } from '@fluent-ui/styles'
import { TemplateProps } from '../../templates/docs'
import { useIntl } from 'react-intl'

const SOURCE_CODE_ROOT_URL = 'https://github.com/fluent-org/fluent-ui/blob/master/docs/src'

const useStyles = createUseStyles({
  editButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    zIndex: 2
  }
})

interface EditPageProps {
  data: TemplateProps['data']
}

const EditPage: React.FC<EditPageProps> = ({ data }: EditPageProps): React.ReactElement => {
  const classes = useStyles()
  const { formatMessage } = useIntl()
  const markdownLocation = data.doc.fileAbsolutePath
  const href = SOURCE_CODE_ROOT_URL + markdownLocation.slice(markdownLocation.lastIndexOf('/docs/'))
  return (
    <Button className={classes.editButton} as="a" href={href} target="_blank" size="small" ghost>
      {formatMessage({ id: 'editPage' })}
    </Button>
  )
}

export default EditPage
