export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M1024 768h640v128h-640v640H896V896H256V768h640V128h128v640zM256 1792v-128h1408v128H256z'
      }
    }
  }
}
