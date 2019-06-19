export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 128v1664H0V128h1920zm-128 128H128v1408h1664V256zM256 1280V640h1408v640H256zm768-128h512V768h-512v384zm-128 0V768H384v384h512zM512 896h256v128H512V896zm640 0h256v128h-256V896z'
      }
    }
  }
}
