export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 128v1664H0V128h2048zm-512 1024V768H512v384h1024zM512 1280v384h1024v-384H512zm1024-640V256H512v384h1024zm-1408 0h256V256H128v384zm0 512h256V768H128v384zm0 512h256v-384H128v384zm1792-384h-256v384h256v-384zm0-512h-256v384h256V768zm0-128V256h-256v384h256z'
      }
    }
  }
}
