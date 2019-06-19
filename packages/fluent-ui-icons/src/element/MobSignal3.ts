export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d: 'M128 1792v-384h256v384H128zm384 0v-640h256v640H512zm384-896h256v896H896V896z'
      }
    }
  }
}
