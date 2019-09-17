import schema from 'async-validator'

export const createValidator = (
  descriptor: any,
  values: any,
  callback: (errors: any[]) => void
): any => {
  // @ts-ignore
  schema.warning = (): void => {}
  const validator = new schema(descriptor)
  validator.validate(
    values,
    // @ts-ignore
    (errors: any[]): void => {
      callback(errors)
    }
  )
}
