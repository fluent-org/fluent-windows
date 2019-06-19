export default {
  type: 'svg',
  props: {
    width: '1792',
    height: '1792',
    viewBox: '0 0 1792 1792',
    xmlns: 'http://www.w3.org/2000/svg',
    children: {
      type: 'path',
      props: {
        transform: 'scale(1.75 1.75) translate(0 0)',
        d:
          'M0 128h1024v768h-1024v-768zm960 704v-640h-896v640h896zm-64-576v512h-768v-512h768zm-64 448v-384h-640v384h640zm-192-320v256h-256v-256h256zm-64 192v-128h-128v128h128z'
      }
    }
  }
}
