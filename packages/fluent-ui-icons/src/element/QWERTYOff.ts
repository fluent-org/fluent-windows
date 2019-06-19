export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1408 256h512v128h-512v128h-128V384H640v128H512V384H0V256h512V0h128v256h640V0h128v256zm256 384v512h256v128h-869q64 111 156 190t200.5 132 228.5 83 242 44q-41 53-80 112-132-27-257-70t-233.5-109-197-159.5T964 1280h-6l-17 39q-33 74-87 137.5t-121 117-144.5 97.5-157.5 80.5-160 65.5-152 52l-79-102q68-18 145.5-42.5t156.5-56 157-70.5 146-87.5T768 1405t89-125H0v-128h256V640h640V448h128v192h640zM384 768v384h512V768H384zm1152 384V768h-512v384h512z'
      }
    }
  }
}
