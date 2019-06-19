interface Obj {
  [key: string]: any
}

function omit(obj: Obj, fields: string[]): Omit<Obj, string> {
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
