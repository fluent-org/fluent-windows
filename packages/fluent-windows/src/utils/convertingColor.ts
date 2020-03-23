// Learn from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb

export const rgbToHex = (r: number, g: number, b: number): string =>
  '#' +
  [r, g, b]
    .map((x): string => {
      const hex = x.toString(16)
      return hex.length === 1 ? '0' + hex : hex
    })
    .join('')

export const hexToRgb = (hex: string): string =>
  (hex as any)
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_: string, r: string, g: string, b: string): string => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x: string): number => parseInt(x, 16))
    .join(', ')
