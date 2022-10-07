import '../../styles/globals.css'
import type { AppProps } from 'next/app'

import '../components/SideNav.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp


// Updated code to use Layout
