export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 1920H0L960 0zM207 1792h1506L960 286zm817-1024v640H896V768h128zm-128 768h128v128H896v-128z'
      }
    }
  }
}
