import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Provider as ReduxProvider } from 'react-redux'
import { default as AOS } from 'aos'
import 'destyle.css'
import 'aos/dist/aos.css'

// stores
import { store } from '~stores/index'

// components
import { Layout } from '~components/common/Layout'

// styles
import '~styles/reset.scss'
import '~styles/tailwind.scss'
import '~styles/layout.scss'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  /**
   * componentDidMount
   */
  useEffect(() => {
    // NOTE:ランディング時に一瞬CSSが適用されていない状態で表示されてしまうのでクラスの付け替えで回避
    const targetElement = document.documentElement
    targetElement.className = targetElement.className.replace(
      'pre-mount',
      'mount'
    )

    // AOS init
    AOS.init({
      once: true,
      duration: 400,
      easing: 'ease-in',
    })
  }, [])

  return (
    <ReduxProvider {...{ store }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  )
}

export default MyApp
