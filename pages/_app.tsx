import '../styles/globals.css'
import '../styles/circus.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    </Head>
    <div className='theme-dark font-Rubik'>
      
    <Component {...pageProps} />

    </div>
  </>
  )
}

export default MyApp
