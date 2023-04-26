import { useEffect, useState } from 'react'
import { Image } from '~components/common/Image'
import { v4 as uuidv4 } from 'uuid'

import * as styles from './Logo.module.scss'

type Props = {
  primaryColor?: string
  secondaryColor?: string
  shadowColor?: string
  gradient?: boolean
}

const SymbolStroke: React.FCX<
  Pick<Props, 'primaryColor' | 'shadowColor' | 'gradient'>
> = (props) => {
  const {
    primaryColor = styles['palette-mintblue'],
    shadowColor = styles['palette-smokegray'],
    gradient = false,
  } = props

  const [randomId, setRandomId] = useState<string>()

  useEffect(() => {
    setRandomId(uuidv4())
  }, [])

  return (
    <>
      {gradient && (
        <>
          <defs>
            <linearGradient
              id={`gradient-1-${randomId}`}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0.5" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <linearGradient
              id={`gradient-2-${randomId}`}
              x1="0"
              x2="0"
              y1="0"
              y2="1"
            >
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.5" stopColor="white" stopOpacity="1" />
            </linearGradient>
            <mask id={`mask-1-${randomId}`}>
              <rect
                x="0"
                y="0"
                width="15.63"
                height="17.45"
                fill={`url(#gradient-1-${randomId})`}
              />
            </mask>
            <mask id={`mask-2-${randomId}`}>
              <rect
                x="0"
                y="0"
                width="15.63"
                height="17.45"
                fill={`url(#gradient-2-${randomId})`}
              />
            </mask>
          </defs>
          <g fill={styles['palette-pastelgreen']}>
            <path d="M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z" />
            <path d="M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z" />
            <path d="M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z" />
          </g>
          <g
            fill={styles['palette-emeraldgreen']}
            mask={`url(#mask-2-${randomId})`}
          >
            <path d="M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z" />
            <path d="M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z" />
            <path d="M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z" />
          </g>
        </>
      )}
      <g
        fill={primaryColor}
        mask={gradient ? `url(#mask-1-${randomId})` : undefined}
      >
        <path d="M15.63,2a2,2,0,1,1-2-2A2,2,0,0,1,15.63,2Z" />
        <path d="M11.54,7l.32.27a1.73,1.73,0,0,0,.48-1.21,1.78,1.78,0,0,0-1.78-1.78A1.8,1.8,0,0,0,9,5.22l.2.14Z" />
        <path d="M11.86,7.3a1.75,1.75,0,0,1-1.3.57A1.78,1.78,0,0,1,8.78,6.09,1.81,1.81,0,0,1,9,5.22L6.87,3.69A2.62,2.62,0,0,0,4.1,3.42a2.65,2.65,0,0,0-.93.8,3.2,3.2,0,0,0-.55,1.84s0,3.59,0,4.53L.88,13A1,1,0,0,0,0,14a1.11,1.11,0,0,0,.48.9L3,16.71a1.07,1.07,0,0,0,1.5-.19,1,1,0,0,0,.15-.78l1.79-2.5,4.21-1.42h0a3.17,3.17,0,0,0,1.57-1.12,2.55,2.55,0,0,0-.36-3.4Zm-1.43,3.87L6,12.66l-2.15,3a.38.38,0,0,1,.08.46.38.38,0,0,1-.53,0L.88,14.34a.38.38,0,0,1-.14-.51.37.37,0,0,1,.46-.07l2.12-2.95V9.94H5c.43,0,.63-.4.22-.79a1.42,1.42,0,0,1,.94-2.49A1.43,1.43,0,0,1,7.54,8.08a1.41,1.41,0,0,1-.48,1.07c-.42.39-.21.79.22.79h4.58A2.32,2.32,0,0,1,10.43,11.17Z" />
      </g>
      <ellipse fill={shadowColor} cx="7.1" cy="16.93" rx="4.43" ry="0.52" />
    </>
  )
}

export const MainLogo: React.FCX<Props> = (props) => {
  const {
    primaryColor = styles['palette-mintblue'],
    secondaryColor = styles['palette-gray'],
    shadowColor = styles['palette-smokegray'],
    gradient = false,
    ...rest
  } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 71.47 17.45"
      aria-label="Growing Islands"
      {...{ ...rest }}
    >
      <path
        fill={secondaryColor}
        d="M45.15,14.55a2.72,2.72,0,0,0,1-.18,4.63,4.63,0,0,0,.9-.52l.43.64a2.43,2.43,0,0,1-.48.34,3.49,3.49,0,0,1-.59.25c-.22.06-.44.12-.67.16a4,4,0,0,1-.69.06,4.67,4.67,0,0,1-1.39-.2,3.13,3.13,0,0,1-1.08-.59,2.59,2.59,0,0,1-.68-.94,3.23,3.23,0,0,1-.24-1.29A3.3,3.3,0,0,1,41.88,11a2.66,2.66,0,0,1,.64-1,2.88,2.88,0,0,1,1-.58,3.87,3.87,0,0,1,1.26-.2A3.76,3.76,0,0,1,46,9.45,2.85,2.85,0,0,1,47,10a2.76,2.76,0,0,1,.91,2.09v.75h-4.6a2,2,0,0,0,.63,1.3A1.89,1.89,0,0,0,45.15,14.55ZM44.77,10a1.4,1.4,0,0,0-.58.12,1.11,1.11,0,0,0-.47.37,2.1,2.1,0,0,0-.33.67,3.47,3.47,0,0,0-.13,1h3a3.05,3.05,0,0,0-.13-1,1.92,1.92,0,0,0-.34-.67,1.26,1.26,0,0,0-.48-.39A1.41,1.41,0,0,0,44.77,10Z"
      />
      <path
        fill={secondaryColor}
        d="M63.88,11.52h0A2.22,2.22,0,0,0,62,9.36a5.85,5.85,0,0,0-3.45.38l.28.72a4.22,4.22,0,0,1,2.37-.38,1.31,1.31,0,0,1,1.16,1.44H60.86A4.15,4.15,0,0,0,58.7,12,1.49,1.49,0,0,0,58,13.3a1.46,1.46,0,0,0,.7,1.34,4.05,4.05,0,0,0,2.16.44h3V11.52Zm-1.51,2.82H60.85c-.83,0-1.24-.35-1.24-1s.41-1,1.24-1h1.52Z"
      />
      <path
        fill={secondaryColor}
        d="M23.21,7.53a1.06,1.06,0,0,0-1,.5l-3,4.79v2.26h1.57V12.82L24.3,7.53Z"
      />
      <path
        fill={secondaryColor}
        d="M29.65,9.47h-.84v4.87h-1.4A1.68,1.68,0,0,1,26.29,14a1.42,1.42,0,0,1-.39-1.12V9.47H24.39v3.4a1.92,1.92,0,0,0,.74,1.66,3.79,3.79,0,0,0,2.28.55h2.92V10.13A.64.64,0,0,0,29.65,9.47Z"
      />
      <path
        fill={secondaryColor}
        d="M53.19,14.28V8.2a.64.64,0,0,0-.67-.67h-.9v7.55h5.79v-.8Z"
      />
      <path
        fill={secondaryColor}
        d="M71.24,11.11a2.61,2.61,0,0,0-.66-.88,3,3,0,0,0-1-.57,4.8,4.8,0,0,0-1.36-.19H66.83V8.2a.64.64,0,0,0-.67-.67h-.84v7.55h2.86a4.36,4.36,0,0,0,1.35-.19,3.1,3.1,0,0,0,1-.56,2.65,2.65,0,0,0,.66-.89,2.86,2.86,0,0,0,.23-1.16A2.94,2.94,0,0,0,71.24,11.11Zm-1.5,2.11a1.86,1.86,0,0,1-.35.64,1.2,1.2,0,0,1-.53.36,1.81,1.81,0,0,1-.67.12H66.83V10.22h1.36a1.81,1.81,0,0,1,.67.11,1.39,1.39,0,0,1,.53.36,1.86,1.86,0,0,1,.35.64,3.28,3.28,0,0,1,.12.95A3.21,3.21,0,0,1,69.74,13.22Z"
      />
      <path
        fill={secondaryColor}
        d="M39.73,10a3.79,3.79,0,0,0-2.28-.56H31.83v5.61h1.51V10.22h2v4.86h1.52V10.22h.54a1.63,1.63,0,0,1,1.12.34A1.42,1.42,0,0,1,39,11.68v2.74a.63.63,0,0,0,.67.66h.84v-3.4A1.92,1.92,0,0,0,39.73,10Z"
      />
      <path
        fill={primaryColor}
        d="M19.22,12.82A3.47,3.47,0,0,0,18.54,9c-.81-.9-1.72-1.09-2.75-2.14a4.78,4.78,0,0,0,1.06,3C18,11,19,11.93,19.22,12.82Z"
      />
      <SymbolStroke {...{ primaryColor, shadowColor, gradient }} />
    </svg>
  )
}

export const SymbolMark: React.FCX<Omit<Props, 'secondaryColor'>> = () => {
  return (
    <Image src="/shimax1_bl.png" alt="グローイングアイランズ" width="100px" />
  )
}
