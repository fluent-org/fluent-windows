export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M512 2048H383V385h1280v1663h-127v-256H512v256zm1024-1024V512H512v512h1024zm0 641v-512H512v512h1024z'
      }
    }
  }
}
