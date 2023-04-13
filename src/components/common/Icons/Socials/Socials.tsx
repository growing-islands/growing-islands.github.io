import * as styles from './Socials.module.scss'

type Props = {
  primaryColor?: string
}

export const Twitter: React.FCX<Props> = (props) => {
  const { primaryColor = styles['palette-white'], ...rest } = props

  return (
    <svg viewBox="0 0 512 415.84" aria-label="Twitter" {...{ ...rest }}>
      <path
        d="M459.37 103.64c.33 4.54.33 9.09.33 13.64 0 138.72-105.59 298.56-298.56 298.56A296.51 296.51 0 0 1 0 368.73a215.83 215.83 0 0 0 25.34 1.3 210.15 210.15 0 0 0 130.27-44.83 105.12 105.12 0 0 1-98.11-72.77 132.94 132.94 0 0 0 19.82 1.62 111.09 111.09 0 0 0 27.61-3.57 105 105 0 0 1-84.14-103v-1.29a105.67 105.67 0 0 0 47.43 13.31A105.07 105.07 0 0 1 35.74 19.17 298.28 298.28 0 0 0 252.1 128.98a118.78 118.78 0 0 1-2.6-24 105 105 0 0 1 181.6-71.8 206.58 206.58 0 0 0 66.6-25.34 104.61 104.61 0 0 1-46.13 57.83A210.61 210.61 0 0 0 512 49.38a225.62 225.62 0 0 1-52.63 54.26Z"
        fill={primaryColor}
      />
    </svg>
  )
}

export const Facebook: React.FCX<Props> = (props) => {
  const { primaryColor = styles['palette-white'], ...rest } = props

  return (
    <svg viewBox="0 0 448 448" aria-label="Facebook" {...{ ...rest }}>
      <path
        d="M400 0H48A48 48 0 0 0 0 48v352a48 48 0 0 0 48 48h137.25V295.69h-63V224h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V224h68.78l-11 71.69h-57.78V448H400a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48Z"
        fill={primaryColor}
      />
    </svg>
  )
}
