declare module '*.tiff'

declare module '*.css' {
  export const content: { [className: string]: string }
}

declare module '*.scss' {
  export const content: { [className: string]: string }
}
