export default {
  type: 'svg',
  props: {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 2048 2048',
    children: {
      type: 'path',
      props: {
        d:
          'M1024 2048q-142 0-272.5-36.5t-244.5-103-207.5-160-160-207.5-103-245T0 1024t36.5-272 103-245 160-207.5 207.5-160 245-103T1024 0t272 36.5 245 103 207.5 160 160 207.5 103 245 36.5 272q0 142-36.5 272.5t-103 244.5-160 207.5-207.5 160-245 103-272 36.5zm0-1920q-124 0-238 32t-213.5 90.5T391 391 250.5 572.5t-90.5 214-32 237.5q0 124 32 238t90.5 213.5T391 1657t181.5 140.5 214 90.5 237.5 32 237.5-32 214-90.5T1657 1657t140.5-181.5 90.5-214 32-237.5-32-237.5-90.5-214T1657 391t-181.5-140.5-214-90.5-237.5-32zm0 896V384H896v768h512v-128h-384z'
      }
    }
  }
}
