import { isObject, deepMerge } from '..'

describe('isObject', (): void => {
  it('Correctly determine the type of object', (): void => {
    const obj: object = {
      name: 'chenyueban'
    }
    expect(isObject(obj)).toEqual(true)

    const arr: number[] = [1, 2, 3]
    expect(isObject(arr)).toEqual(false)
  })

  it('The array returns false', (): void => {
    const arr: number[] = [1, 2, 3]
    expect(isObject(arr)).toEqual(false)
  })

  it('The falsy returns false', (): void => {
    const falsy = [false, null, undefined, 0, NaN, '', '']
    falsy.forEach(
      (f): void => {
        expect(isObject(f)).toEqual(false)
      }
    )
  })

  it('Other content that returns false', (): void => {
    const content = ['string', 1, true, Symbol(1)]
    content.forEach(
      (c): void => {
        expect(isObject(c)).toEqual(false)
      }
    )
  })
})

describe('deepMerge', (): void => {
  it('should merge Objects and all nested Ones', (): void => {
    const obj1 = { a: { a1: 'A1' }, c: 'C', d: {} }
    const obj2 = { a: { a2: 'A2' }, b: { b1: 'B1' }, d: null }
    const obj3 = {
      a: { a1: 'A1', a2: 'A2' },
      b: { b1: 'B1' },
      c: 'C',
      d: null
    }
    expect(deepMerge({}, obj1, obj2)).toEqual(obj3)
  })
  it('should behave like Object.assign on the top level', (): void => {
    const obj1 = { a: { a1: 'A1' }, c: 'C' }
    const obj2 = { a: undefined, b: { b1: 'B1' } }
    expect(deepMerge({}, obj1, obj2)).toEqual(Object.assign({}, obj1, obj2))
  })
  it('should not merge array values, just override', (): void => {
    const obj1 = { a: ['A', 'B'] }
    const obj2 = { a: ['C'], b: ['D'] }
    expect(deepMerge({}, obj1, obj2)).toEqual({ a: ['C'], b: ['D'] })
  })
})
