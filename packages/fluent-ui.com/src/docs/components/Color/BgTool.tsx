import * as React from 'react'
import { Box, Button } from '@fluent-ui/core'
import { useDispatch } from '@fluent-ui/hooks'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
// @ts-ignore
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
// @ts-ignore
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
// @ts-ignore
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'
// @ts-ignore
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

// Register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType
)

const Template = (): React.ReactElement => {
  const handleResetClick = React.useCallback((): void => {
    // eslint-disable-next-line
    useDispatch({
      type: 'theme/resetBg'
    })()
  }, [])

  return (
    <Box padding={20}>
      <FilePond
        acceptedFileTypes={['image/*']}
        maxFileSize="1MB"
        labelMaxFileSizeExceeded="File is too large"
        allowMultiple={false}
        allowRevert={false}
        server={{
          process: (
            fieldName: string,
            file: Blob & { readonly lastModified: number; readonly name: string },
            metadata: { [key: string]: any },
            load: (p: string | { [key: string]: any }) => void,
            error: (errorText: string) => void,
            progress,
            abort: () => void
          ): {
            abort: () => void
          } => {
            if (file) {
              const reader = new FileReader()
              reader.onload = (e): void => {
                if (e.target) {
                  switch (e.target.readyState) {
                    case 0:
                      break
                    case 1:
                      break
                    case 2:
                      // Save the background image to localstorage
                      // eslint-disable-next-line
                      useDispatch({
                        type: 'theme/setBg',
                        payload: e.target.result
                      })()
                      return load('complete')
                    default:
                      return error('oh no')
                  }
                }
              }
              reader.onprogress = (e): void => {
                progress(e.lengthComputable, e.loaded, e.total)
              }
              reader.readAsDataURL(file)
            }
            return {
              abort(): void {
                abort()
              }
            }
          }
        }}
      />

      <Button onClick={handleResetClick}>Reset Docs Background</Button>
    </Box>
  )
}

export default Template
