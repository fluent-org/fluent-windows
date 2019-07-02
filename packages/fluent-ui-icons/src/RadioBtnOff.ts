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
        'M1024 0q141 0 272 36.5t245 103 207.5 160 160 207.5 103 245 36.5 272-36.5 272-103 245-160 207.5-207.5 160-245 103-272 36.5-272-36.5-245-103-207.5-160-160-207.5-103-244.5T0 1024q0-141 36.5-272t103-245 160-207.5 207.5-160 244.5-103T1024 0zm0 1920q123 0 237.5-32t214-90.5T1657 1657t140.5-181.5T1888 1262t32-238q0-123-32-237.5t-90.5-214T1657 391t-181.5-140.5-214-90.5-237.5-32-237.5 32-214 90.5T391 391 250.5 572.5t-90.5 214-32 237.5 32 237.5 90.5 214T391 1657t181.5 140.5T786 1888t238 32z'
    }
  ]
]

export default createIcon(jsx, 'RadioBtnOff')
