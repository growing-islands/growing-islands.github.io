import * as styles from './Angle.module.scss'

type Props = {
  primaryColor?: string
}

export const Angle: React.FCX<Props> = (props) => {
  const { primaryColor = styles['palette-black'], ...rest } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 31"
      aria-label="角"
      {...{ ...rest }}
    >
      <path
        d="M.405.98h4.427l15.342 14.815L4.832 30.611H.527l15.347-14.816L.405.98Z"
        fill={primaryColor}
      />
    </svg>
  )
}
