export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 768l-632 486 248 794-640-492-640 492 248-794L0 768h784L1024 0l240 768h784zm-832 774V896h-46l-146-467-146 467H376l405 311-154 493 397-306z'
      }
    }
  }
}
