export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M768 128h1280v1792H0V640h768V128zM128 1792h1536V768H128v1024zm1792 0V256H896v384h896v1152h128zM256 1664V896h1280v768H256zm128-640v512h1024v-512H384z'
      }
    }
  }
}
