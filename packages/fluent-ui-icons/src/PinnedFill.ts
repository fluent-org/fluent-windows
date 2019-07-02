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
        'M1900 748q-41 40-93.5 61.5T1697 831q-44 0-84-12l-433 433q17 41 26.5 84.5t9.5 88.5q0 86-33 165t-93 140L318 958q61-60 140-93t165-33q45 0 88.5 9.5T796 868l433-433q-12-40-12-84 0-57 21.5-109.5T1300 148z'
    }
  ]
]

export default createIcon(jsx, 'PinnedFill')
