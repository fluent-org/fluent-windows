export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 128h2048v1152h-128V256H128v1152h256v293l293-293h475v128H731l-475 475v-475H0V128zm1661 1117l-162 163h549v128h-549l162 163-90 90-317-317 317-317z'
      }
    }
  }
}
