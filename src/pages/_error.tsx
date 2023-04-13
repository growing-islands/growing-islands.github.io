import type { ErrorProps } from 'next/error'
import type { NextPageContext } from 'next'

// components
import { Header } from '~components/common/Header'
import { Footer } from '~components/common/Footer'
import { SEO } from '~components/common/SEO'

import { Container } from '~components/error/Container'

const Error = (props: ErrorProps): JSX.Element => {
  const { statusCode } = props

  return (
    <div className="l-page">
      <SEO title={`${statusCode} Error`} />
      <Header />
      <div className="l-main">
        <Container {...{ statusCode }} />
      </div>
      <Footer />
    </div>
  )
}

Error.getInitialProps = (props: NextPageContext) => {
  const { res, err } = props

  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    statusCode,
  }
}

export default Error
