export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M768 1920h128v128H0V0h1024v384H768v920l1085-542 185 371-1270 635v152zM128 256h768V128H128v128zm1408 808v176l330-165-71-141zm-384 192v176l256-128v-176zm-384 192v176l256-128v-176zm-128-168V512H256v768h384z'
      }
    }
  }
}
