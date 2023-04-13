import { default as classnames } from 'classnames'

import { ColumnHeading } from '~components/common/Heading/ColumnHeading'
import type { Props as ColumnHeadingProps } from '~components/common/Heading/ColumnHeading'

// scss
import * as styles from './ColumnHeadingForSection.module.scss'

export const ColumnHeadingForSection: React.FCX<ColumnHeadingProps> = (
  props
) => {
  const { className, style, ...rest } = props

  return (
    <div
      className={classnames(styles['component'], className)}
      data-testid="component"
      {...{ style }}
    >
      <ColumnHeading
        className={styles['component__content']}
        {...{ ...rest }}
      />
    </div>
  )
}
