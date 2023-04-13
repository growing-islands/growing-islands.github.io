import * as styles from './Mail.module.scss'

type Props = {
  primaryColor?: string
}

export const Mail: React.FCX<Props> = (props) => {
  const { primaryColor = styles['palette-black'], ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 384"
      aria-label="メール"
      {...{ ...rest }}
    >
      <path
        d="M464,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V112A48,48,0,0,0,464,64Zm0,48v40.8c-22.42,18.26-58.17,46.66-134.59,106.49C312.57,272.54,279.21,304.37,256,304c-23.21.37-56.58-31.46-73.41-44.71C106.18,199.46,70.43,171.07,48,152.8V112ZM48,400V214.4c22.91,18.25,55.41,43.86,104.94,82.64,21.85,17.21,60.13,55.19,103.06,55,42.72.23,80.51-37.2,103.05-54.95,49.53-38.78,82-64.4,105-82.65V400Z"
        transform="translate(0 -64)"
        fill={primaryColor}
      />
    </svg>
  )
}
