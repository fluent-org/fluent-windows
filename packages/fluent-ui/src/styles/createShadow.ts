import * as CSS from 'csstype'

const keyUmbraOpacity = 0.22
const keyPenumbraOpacity = 0.16
const ambientShadowOpacity = 0.1

function createShadow(...px: number[]): CSS.BoxShadowProperty {
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${keyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${keyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${ambientShadowOpacity})`
  ].join(',')
}

export type Shadows = CSS.BoxShadowProperty[]

const shadows: Shadows = [
  'none',
  createShadow(0, 3, 5, -1, 0, 3, 8, 0, 0, 1, 14, 0),
  createShadow(0, 4, 5, -2, 0, 5, 9, 1, 0, 2, 16, 1),
  createShadow(0, 5, 5, -3, 0, 7, 11, 1, 0, 3, 17, 2),
  createShadow(0, 6, 6, -3, 0, 9, 14, 1, 0, 4, 18, 3),
  createShadow(0, 7, 8, -4, 0, 11, 17, 2, 0, 5, 22, 4),
  createShadow(0, 8, 9, -5, 0, 14, 22, 2, 0, 6, 28, 5),
  createShadow(0, 9, 11, -5, 0, 17, 28, 2, 0, 7, 34, 6),
  createShadow(0, 10, 13, -6, 0, 19, 31, 3, 0, 8, 38, 7),
  createShadow(0, 11, 14, -7, 0, 22, 36, 3, 0, 9, 44, 8)
]

export default shadows
