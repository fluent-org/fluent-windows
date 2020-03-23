import { hexToRgb, rgbToHex } from '..'

describe('convertingColor', (): void => {
  const targetHex = '#0033ff'
  const targetRGB: [number, number, number] = [0, 51, 255]

  it('Converting hex to RGB', (): void => {
    const rgb = hexToRgb(targetHex)
    expect(rgb).toEqual(targetRGB.join(', '))
  })

  it('Converting RGB to hex', (): void => {
    const hex = rgbToHex(...targetRGB)
    expect(hex).toEqual(targetHex)
  })
})
