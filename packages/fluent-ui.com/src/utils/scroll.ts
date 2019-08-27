export function scrollToAnchor(anchor: string, target: Element | null) {
  if (target) {
    if (anchor) {
      const anchorElement: HTMLDivElement | null = document.querySelector(anchor)
      if (anchorElement) {
        target.scrollTo(0, anchorElement.offsetTop - 56)
      }
    } else {
      target.scrollTop = 0
    }
  }
}
