export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M0 805l421-421h475v1280H0V805zm384-202L219 768h165V603zm384 933V512H512v384H128v640h640zm859-1152l421 421v859h-896V384h475zm37 219v165h165zm-384 933h640V896h-384V512h-256v1024z'
      }
    }
  }
}
