interface Obj {
  [key: string]: any
}

function omit(obj: object, fields: string[]): object {
  const shallowCopy: Obj = {
    ...obj
  }
  for (let i = 0; i < fields.length; i++) {
    const key: string = fields[i]
    delete shallowCopy[key]
  }
  return shallowCopy
}

export default omit
