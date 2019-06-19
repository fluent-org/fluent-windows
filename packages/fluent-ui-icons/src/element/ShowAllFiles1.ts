export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M128 128h896v896H128V128zm768 768V256H256v640h640z'
      }
    }
  }
}
