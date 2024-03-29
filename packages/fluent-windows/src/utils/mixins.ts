export const isObject = (item: any): boolean =>
  !!item && typeof item === 'object' && !Array.isArray(item)

export const deepMerge = <T extends object = object>(target: T, ...sources: T[]): T => {
  if (!sources.length) {
    return target
  }
  const source = sources.shift()
  if (source === undefined) {
    return target
  }

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key: string): void => {
      if (isObject((source as any)[key])) {
        if (!(target as any)[key]) Object.assign(target, { [key]: {} })
        deepMerge((target as any)[key], (source as any)[key])
      } else {
        Object.assign(target, { [key]: (source as any)[key] })
      }
    })
  }

  return deepMerge(target, ...sources)
}

interface Target {
  [key: string]: any
}

export function omit(target: Target, fields: string[]): Omit<Target, string> {
  return Object.keys(target)
    .filter((key): boolean => !fields.includes(key))
    .reduce(
      (acc, cur): any => ({
        ...acc,
        [cur]: target[cur]
      }),
      {}
    )
}

export function toUpperCase(string: string): string {
  return string.toUpperCase()
}
