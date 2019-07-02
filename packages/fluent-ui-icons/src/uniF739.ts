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
        'M896 512h128v549l365 366-90 90-403-402V512zM512 640v128H0V256h128v273q67-122 163.5-220T504 142.5 752 37t272-37q70 0 139 9t137 29q-36 55-56 118-54-14-109-21t-111-7q-129 0-251 36.5t-227 103-190 161T216 640h296zm1380 164q63-20 118-56 20 68 29 137t9 139q0 141-36.5 271.5T1908 1540t-160.5 207.5T1540 1908t-244.5 103.5T1024 2048q-172 0-330.5-55t-289-154.5T179 1601 38 1297l123-34q40 145 124 265.5T483 1736t252.5 135.5T1024 1920q123 0 237.5-32t214-90.5T1657 1657t140.5-181.5 90.5-214 32-237.5q0-56-7-111t-21-109zm-164-164q-66 0-124.5-25t-102-68.5-68.5-102-25-124.5 25-124.5 68.5-102 102-68.5T1728 0t124.5 25 102 68.5 68.5 102 25 124.5-25 124.5-68.5 102-102 68.5-124.5 25z'
    }
  ]
]

export default createIcon(jsx, 'uniF739')
