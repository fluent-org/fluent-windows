import createIcon, { JSX } from './utils/createIcon'

const jsx: JSX = [
  'svg',
  {
    viewBox: '0 0 2048 2048'
  },
  [
    'path',
    {
      d:
        'M1408 1792q27 0 50 10t40.5 27.5 27.5 40.5 10 50-10 50-27.5 40.5-40.5 27.5-50 10-50-10-40.5-27.5-27.5-40.5-10-50 10-50 27.5-40.5 40.5-27.5 50-10zm-512 256q0-133 50-249.5t137-203.5 203.5-137 249.5-50v128q-106 0-199 40.5t-162.5 110-110 162.5-40.5 199H896zm-384 0q0-141 36.5-272t103-245 160-207.5 207.5-160 244.5-103T1536 1024v128q-124 0-238 32t-213.5 90.5T903 1415t-140.5 181.5-90.5 214-32 237.5H512zM2048 896h-256v1152h-128V896h-256V128h640v768zm-512-640v128h384V256h-384zm384 512V512h-128v128h-128V512h-128v256h384zm-640 26q-149 31-282.5 93.5t-247.5 151T544.5 1239 389 1480t-98.5 272.5T256 2048H128q0-169 39-329t111.5-303.5 175.5-267 231-221 278-165 317-98.5v130z'
    }
  ]
]

export default createIcon(jsx, 'WifiEthernet')
