export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M768 1024h384v128H768v-128zm0-256h384v128H768V768zm0-512h384v128H768V256zm1024 1664h-384v128H512v-128H128v-128h384v-128h256v-128h128v-128H512V128q0-27 10-50t27.5-40.5T590 10t50-10h640q27 0 50 10t40.5 27.5T1398 78t10 50v1280h-384v128h128v128h256v128h384v128zm-512-640V128H640v1152h640zm0 512h-256v-128H896v128H640v128h640v-128z'
      }
    }
  }
}
