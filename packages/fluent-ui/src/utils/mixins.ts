export const findAllByType = (component: any, type: string): any[] => {
  let matches: any[] = []

  if (component.type === type) {
    matches.push(component)
  }

  if (component.children) {
    component.children.forEach(
      (child: any): void => {
        matches = matches.concat(findAllByType(child, type))
      }
    )
  }

  return matches
}
