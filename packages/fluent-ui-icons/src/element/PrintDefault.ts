export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1920 768q27 0 50 10t40.5 27.5T2038 846t10 50v211q-29-34-60.5-63.5T1920 988v-92H128v768h384v-384h406q-14 31-24 63t-16 65H640v512h346q26 36 56 67.5t64 60.5H512v-256H0V896q0-27 10-50t27.5-40.5T78 778t50-10h384V0h1024v768h384zm-512-640H640v640h768V128zM256 1088q0-26 19-45t45-19 45 19 19 45-19 45-45 19-45-19-19-45zm1280-64q106 0 199.5 40t163 109.5 109.5 163 40 199.5-40 199.5-109.5 163-163 109.5-199.5 40-199.5-40-163-109.5-109.5-163-40-199.5 40-199.5 109.5-163 163-109.5 199.5-40zm0 896q79 0 149-30t122.5-82.5 82.5-122 30-149.5q0-79-30-149t-82.5-122.5T1685 1182t-149-30q-80 0-149.5 30t-122 82.5T1182 1387t-30 149q0 80 30 149.5t82.5 122 122 82.5 149.5 30zm211-557l90 90-365 365-205-205 90-90 115 115z'
      }
    }
  }
}
