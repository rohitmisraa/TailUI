import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <script src="https://cdn.tailwindcss.com"></script>
      {/* <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script> */}
      <script type='text/javascript' src="../assets/highlight.min.js"></script>
      <script>hljs.highlightAll();</script>
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/base16/circus.min.css" /> */}
      <link rel="stylesheet" href="../styles/circus.css" />
    </Head>
    <div className='theme-dark font-Rubik'>
    <Component {...pageProps} />

    </div>
  </>
  )
}

export default MyApp
