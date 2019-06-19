export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M640 384H384V128h256v256zm512 0H896V128h256v256zm512 0h-256V128h256v256zM640 896H384V640h256v256zm512 0H896V640h256v256zm512 0h-256V640h256v256zM640 1408H384v-256h256v256zm512 0H896v-256h256v256zm0 512H896v-256h256v256zm512-512h-256v-256h256v256z'
      }
    }
  }
}
