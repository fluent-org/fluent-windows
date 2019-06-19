export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 0v1920H128V0h1664zm-128 128H256v1664h1408V128zM384 896V384h1152v512H384zm640-128h384V512h-384v256zm-128 0V512H512v256h384zm-512 768v-512h1152v512H384zm640-128h384v-256h-384v256zm-128 0v-256H512v256h384z'
      }
    }
  }
}
