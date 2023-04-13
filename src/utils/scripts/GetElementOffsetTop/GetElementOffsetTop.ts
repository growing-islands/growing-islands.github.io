export function GetElementOffsetTop(element: HTMLElement): number {
  return window.pageYOffset + element.getBoundingClientRect()['top']
}
