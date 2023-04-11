type Props = {
  placeholder?: string
  src: StaticImageData
  alt?: string
  width?: number | string
  height?: number | string
}

export const Image: React.FCX<Props> = (props: Props) => {
  return <img {...props} src={props.src as any} />
}
