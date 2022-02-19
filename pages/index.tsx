import Head from 'next/head'
import Nav from '../components/layouts/nav'
import Link from 'next/link'
import Footer from '../components/layouts/Footer'


export default function Home() {
  
  
  return (
    <div className="w-full overflow-x-hidden bg-skin-base">
      <Head>
        {/* <title>{posts.frontmatter.title}</title> */}
        <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Nav/>
      <div className='w-full lg:w-[1480px] h-full flex  m-auto'>
        <div className='h-screen w-full flex justify-center'>
        <Link href={'/components/buttons'} passHref><button className="py-1 px-6 bg-cl-blue text-white text-base m-auto w-36">Components</button>
        </Link>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}
    