import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  <Head>
    <script src="https://cdn.tailwindcss.com"></script>
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
