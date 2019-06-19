export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 1408v640h-640v-640h640zm-128 128h-384v384h384v-384zm-507-256q-45-62-103-110t-124.5-80.5-140-49T896 1024q-134 0-251 49.5t-203.5 136-136 203.5-49.5 251H128q0-120 35-232t100-206.5T419.5 1059 625 945q-55-35-99.5-82.5t-76-103.5T401 640.5 384 512q0-106 40.5-199t110-162.5T697 40.5 896 0t199 40.5 162.5 110 110 162.5 40.5 199q0 66-17 128.5T1342.5 759t-76 103.5T1167 945q125 46 227 132.5t168 202.5h-149zM512 512q0 79 30.5 149T625 783t122 82.5T896 896t149-30.5 122-82.5 82.5-122 30.5-149-30.5-149-82.5-122-122-82.5T896 128t-149 30.5T625 241t-82.5 122T512 512z'
      }
    }
  }
}
