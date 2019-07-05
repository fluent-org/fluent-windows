interface Target {
  [key: string]: any
}

function omit(target: Target, fields: string[]): Omit<Target, string> {
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

export default omit
