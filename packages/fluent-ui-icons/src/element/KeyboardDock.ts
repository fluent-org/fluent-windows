export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 256h1920v1536H0V256zm1792 1408v-640H128v640h1664zM128 896h1664V384H128v512zm256 256v128H256v-128h128zm256 0v128H512v-128h128zm256 0v128H768v-128h128zm256 0v128h-128v-128h128zm256 0v128h-128v-128h128zm256 0v128h-128v-128h128zM384 1408v128H256v-128h128zm256 0v128H512v-128h128zm512 0v128H768v-128h384zm256 0v128h-128v-128h128zm256 0v128h-128v-128h128z'
      }
    }
  }
}
