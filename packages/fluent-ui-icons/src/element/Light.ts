export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M960 512q93 0 174.5 35.5t142 96 96 142T1408 960t-35.5 174.5-96 142-142 96T960 1408t-174.5-35.5-142-96-96-142T512 960t35.5-174.5 96-142 142-96T960 512zm0 768q66 0 124-25.5t101.5-69 69-101.5 25.5-124-25.5-124-69-101.5-101.5-69T960 640q-35 0-64 7v626q29 7 64 7zm64-896H896V0h128v384zM896 1536h128v384H896v-384zm1024-640v128h-384V896h384zM384 1024H0V896h384v128zm123-426L236 326l90-90 272 271zm906 724l271 272-90 90-272-271zm0-724l-91-91 272-271 90 90zm-906 724l91 91-272 271-90-90z'
      }
    }
  }
}
