export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M640 0h1408v1024h-677l-411 410v-410H640V0zm1280 896V128H768v768h320v230l229-230h603zm-227 605l-163 163h518v128h-518l163 163-90 90-317-317 317-317zm-669 291v128h256v128H640v-128h256v-128H0V640h512v128H128v896h1024v128h-128zm768-640h128v384h-128v-384z'
      }
    }
  }
}
