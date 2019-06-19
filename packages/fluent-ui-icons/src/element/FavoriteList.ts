export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 768v128h-878q-36-118-72.5-233.5T1024 429q-37 118-73.5 233.5T878 896H376q102 78 202 156t203 155q-40 124-78 246.5T627 1700l397-306v162l-640 492 248-794L0 768h784L1024 0l240 768h784zm-896 384h896v128h-896v-128zm0 384h896v128h-896v-128z'
      }
    }
  }
}
