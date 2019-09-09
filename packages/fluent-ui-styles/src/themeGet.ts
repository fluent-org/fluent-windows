export const themeGet = (path: string, defaultValue?: number | string): ((theme: any) => any) => (
  theme: any
): any => {
  const result = String.prototype.split
    .call(path, /[,[\].]+?/)
    .filter(Boolean)
    .reduce((res, key): any => (res !== null && res !== undefined ? res[key] : res), theme)
  return result === undefined || result === theme ? defaultValue : result
}
