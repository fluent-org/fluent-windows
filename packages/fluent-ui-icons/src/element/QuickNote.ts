export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 128v1792H640l-512-512V128h1792zM640 1739v-331H309zM1792 256H256v1024h512v512h1024V256z'
      }
    }
  }
}
