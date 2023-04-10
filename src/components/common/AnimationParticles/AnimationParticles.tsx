import { default as classnames } from 'classnames'
import { default as Particles } from 'react-tsparticles'

// hooks
import { useDevice } from '~hooks/useDevice'

// styles
import * as styles from './AnimationParticles.module.scss'

import { particlesOptions } from './particlesOptions'

export const AnimationParticles: React.FCX = (props) => {
  const { className, style } = props

  const device = useDevice()

  return (
    <div className={classnames(styles['component'], className)} {...{ style }}>
      <div className={styles['component__particles']}>
        {device === 'pc' ? (
          <Particles
            className={styles['component__particle']}
            canvasClassName={styles['component__canvas']}
            width="100%"
            height="100%"
            options={particlesOptions.pc}
          />
        ) : (
          <Particles
            className={styles['component__particle']}
            canvasClassName={styles['component__canvas']}
            width="100%"
            height="100%"
            options={particlesOptions.sp}
          />
        )}
      </div>
    </div>
  )
}
