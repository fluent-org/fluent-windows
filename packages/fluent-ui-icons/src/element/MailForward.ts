export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 384h2048v1024l-128-128V583l-896 449-896-449v953h1024v128H0V384zm1024 504l753-376H271zm611 485l90-90 317 317-317 317-90-90 163-163h-518v-128h518z'
      }
    }
  }
}
