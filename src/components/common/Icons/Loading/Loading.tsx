/**
 * ローディングアイコン
 */

import { default as classnames } from 'classnames'

// styles
import * as styles from './Loading.module.scss'

type Props = {
  /** fillに使用する色のカラーコード（#xxxxxx） */
  color?: string
}

export const Loading: React.FCX<Props> = ({
  className,
  color = styles['palette-black'],
  style,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={classnames(className)}
      style={style}
    >
      <g transform="rotate(0 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.9166666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.8333333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.75s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.6666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5833333333333334s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.5s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.4166666666666667s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.3333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.25s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.16666666666666666s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="-0.08333333333333333s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="47.5" y="0" rx="9.5" ry="2" width="5" height="20" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
    </svg>
  )
}
