import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <script src="https://cdn.tailwindcss.com"></script>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
