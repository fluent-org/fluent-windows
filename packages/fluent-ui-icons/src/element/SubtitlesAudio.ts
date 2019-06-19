export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 128h2048v256h-128V256H128v1152h256v293l293-293h475v128H731l-475 475v-475H0V128zm1573 768l384-384h91v1408h-90l-385-384h-293V896h293zm347 805V731l-293 293h-219v384h219zM256 1280v-128h896v128H256zm896-384v128H256V896h896z'
      }
    }
  }
}
