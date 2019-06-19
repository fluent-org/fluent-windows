export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 512h2048v1024H0V512zm1920 896V640H128v768h1792zm-128-640v512h-512V768h512zm-128 384V896h-256v256h256zm-512-256v256H768V896h384zm-512 0v256H256V896h384z'
      }
    }
  }
}
