export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 256v128h-256v256h-128V384h-256V256h256V0h128v256h256zm-384 640h128v384h-128V896zM256 1280H128V896h128v384zM768 256h384v128H768V256zm0 1536h384v128H768v-128zm640 0q53 0 99.5-20t81.5-55 55-81.5 20-99.5h128q0 80-30 150t-82 122-122 82-150 30v-128zM256 1536q0 53 20 99.5t55 81.5 81.5 55 99.5 20v128q-80 0-150-30t-122-82-82-122-30-150h128zM128 640q0-80 30-150t82-122 122-82 150-30v128q-53 0-99.5 20T331 459t-55 81.5-20 99.5H128z'
      }
    }
  }
}
