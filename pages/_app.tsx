import React, { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../styles/circus.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [darktheme, setdarktheme] = useState('false')
  useEffect(() => {
    const themedata = localStorage.getItem('theme');
    setdarktheme(themedata)
  }, []);
  return (
    <>
    <Head>
    {/* <script src="https://cdn.tailwindcss.com"></script> */}
    <link rel="icon" href="/assets/favicon.ico" />
    </Head>
    <div className={` ${(darktheme == 'true')?'theme-dark':''} font-Rubik scroll-smooth`}>
      
    <Component {...pageProps} />

    </div>
  </>
  )
}

export default MyApp
