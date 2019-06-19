export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1856 1088v128h-64v320H384v-64h1344V832H512v-64h1280v320h64zM448 928q0 28-9.5 54t-26.5 47-40.5 35.5T320 1085v451h-64v-451q-28-6-51.5-20.5T164 1029t-26.5-47-9.5-54V768h64V640h64v128h64V640h64v128h64v160zm-256 0q0 40 28 68t68 28 68-28 28-68v-96H192v96zm192 202q58-28 93-82.5T512 928v-32h256v512H384v-278z'
      }
    }
  }
}
