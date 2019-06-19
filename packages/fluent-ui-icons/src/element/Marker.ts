export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M2048 640h-152l-448 896h-40v128q0 80-30 149.5t-82.5 122T1173 2018t-149 30q-80 0-149.5-30t-122-82.5-82.5-122-30-149.5v-128h-40L152 640H0V0h128v512h1792V0h128v640zm-768 896H768v128q0 53 20 99.5t55 81.5 81.5 55 99.5 20 99.5-20 81.5-55 55-81.5 20-99.5v-128zm472-896H296l384 768h688z'
      }
    }
  }
}
