export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 384h768v896h-128v-128h-640v768H896v-768H256v128H128V384h768V0h128v384zm-768 640h640V512H256v512zm768-512v512h640V512h-640z'
      }
    }
  }
}
