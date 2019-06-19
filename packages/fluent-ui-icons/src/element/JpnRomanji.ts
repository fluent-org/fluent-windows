export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1792 1280h-750q71 85 154.5 155.5t178 121.5 199.5 79 218 28v128q-124 0-240-29.5t-221-83.5-198.5-129.5T960 1381q-80 93-173 168.5T589 1679t-221 83.5-240 29.5v-128q113 0 218-28t199.5-79 178-121.5T878 1280H128v-128h256V768h512V640h128v128h512v384h256v128zM512 1152h384V896H512v256zm896-256h-384v256h384V896zM640 512H256V384h384V128h128v256h384V128h128v256h384v128h-384v128h-128V512H768v128H640V512z'
      }
    }
  }
}
