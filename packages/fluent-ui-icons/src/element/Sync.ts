export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 1920q154 0 295.5-47.5t258-134 203-208T1912 1261l122 38q-50 167-149 304.5T1652.5 1840t-294 153.5T1024 2048q-137 0-267-34t-245.5-98.5-213.5-157T128 1549v243H0v-512h512v128H196q59 117 146.5 211.5t195.5 161 231.5 103T1024 1920zM2048 256v512h-512V640h316q-59-117-146.5-211.5t-195.5-161-231.5-103T1024 128q-154 0-295.5 47.5t-258 134-203 208T136 787L14 749q50-166 149-304t232.5-237 294-153.5T1024 0q137 0 267 34t245.5 98.5 213.5 157T1920 499V256h128z'
      }
    }
  }
}
