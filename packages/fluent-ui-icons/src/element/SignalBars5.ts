export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M384 2048H128v-256h256v256zm384 0H512v-512h256v512zm384 0H896v-768h256v768zm384 0h-256V1024h256v1024zm384 0h-256V768h256v1280z'
      }
    }
  }
}
