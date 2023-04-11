type Props = {
  placeholder: string
  src: StaticImageData
  alt: string
  width: number
  height: number
}

export const Image: React.FCX<Props> = (props: Props) => {
  return <img {...props} src={props.src as any} />
}
