export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 0h1920v1152h-896v128h256v128H640v-128h256v-128H0V0zm1792 1024V128H128v896h1664zM228 1536h1464l228 334v50H0v-50zm-20 256h1504l-88-128H296z'
      }
    }
  }
}
