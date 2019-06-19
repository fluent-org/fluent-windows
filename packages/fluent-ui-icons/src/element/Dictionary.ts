export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1664 0v2048H256q-53 0-99.5-20T75 1973t-55-81.5T0 1792V256q0-49 21.5-95.5t57-82 81.5-57T256 0h1408zm-128 1664H256q-27 0-50 10t-40.5 27.5T138 1742t-10 50 10 50 27.5 40.5T206 1910t50 10h1280v-256zm-1408-94q60-34 128-34h1280V128H256q-23 0-46 11.5T169 169t-29.5 41-11.5 46v1314zM384 384h896v384H384V384zm128 256h640V512H512v128z'
      }
    }
  }
}
