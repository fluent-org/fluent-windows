export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 128v1664H0V128h2048zm-128 128h-256v256h256V256zm-384 1024V640H512v640h1024zM512 1408v256h1024v-256H512zM384 640H128v640h256V640zm1152-128V256H512v256h1024zm128 768h256V640h-256v640zM128 256v256h256V256H128zm0 1408h256v-256H128v256zm1792 0v-256h-256v256h256z'
      }
    }
  }
}
