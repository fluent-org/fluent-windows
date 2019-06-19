export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M3 1024q11-132 61.5-254T201 547l90 91q-69 82-109 181t-51 205H3zm288-567q101-86 223-136.5T768 259v128q-106 11-205 51T382 547zm-90 1172q-86-101-136.5-223T3 1152h128q11 106 51 205t109 181zm567 288q-132-11-254-61.5T291 1719l91-90q82 69 181 109t205 51v128zm893-765q-11 132-61.5 254T1463 1629l-90-91q69-82 109-181t51-205h128zm-288 567q-101 86-223 136.5T896 1917v-128q106-11 205-51t181-109zM1024 128v768h192l-256 256-256-256h192V128h128zm768 1088v-192h-523l128-128h395V704l256 256z'
      }
    }
  }
}
