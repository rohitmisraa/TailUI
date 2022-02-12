import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
// import styles from '../styles/Home.module.css'
import SVG from "../svg"
import Link from 'next/link'


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Head>
        <title>Tailui</title>
        <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/solid.min.css" integrity="sha512-6/gTF62BJ06BajySRzTm7i8N2ZZ6StspU9uVWDdoBiuuNu5rs1a8VwiJ7skCz2BcvhpipLKfFerXkuzs+npeKA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <Nav/>
      <div className='w-screen h-full bg-red-300 flex'>
        <div className='w-[400px] h-full bg-white border-r-[1px] border-gray-400 pl-20 pt-10'>
          <div className='my-2'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-purple mr-4 relative top-1 rounded-md p-[2px]'>
                {SVG.docs}
              </div>
              <span className=' font-Rubik text-xl font-medium'>Documentation</span>
              <div className='relative top-2 ml-4'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-grey-dark'>
                <li className='text-black font-medium my-3'><Link href={'/'}>Getting Started</Link></li>
                <li className='my-3'><Link href={'/'}>Theme Guide</Link></li>
                <li className='my-3'><Link href={'/'}>About TailUI</Link></li>
                <li className='my-3'><Link href={'/'}>How to contribute?</Link></li>
              </ul>
            </div>
          </div>


          <div className='my-5'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-purple mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.block}
              </div>
              <span className=' font-Rubik text-xl text-grey-dark'>Components</span>
              <div className='relative top-2 ml-4'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-grey-dark'>
                <li className='my-3'><Link href={'/'}>Buttons</Link></li>
                <li className='my-3'><Link href={'/'}>Button Groups</Link></li>
                <li className='my-3'><Link href={'/'}>Cards</Link></li>
                <li className='my-3'><Link href={'/'}>Footer</Link></li>
                <li className='my-3'><Link href={'/'}>Input</Link></li>
                <li className='my-3'><Link href={'/'}>Navbar</Link></li>
                <li className='my-3'><Link href={'/'}>Hero</Link></li>
              </ul>
            </div>
          </div>

          <div className='my-5'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-purple mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.table}
              </div>
              <span className=' font-Rubik text-xl text-grey-dark'>Web Blocks</span>
              <div className='relative top-2 ml-4'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-grey-dark'>
                <li className='my-3'><Link href={'/'}>Single Page</Link></li>
                <li className='my-3'><Link href={'/'}>Portfolios</Link></li>
                <li className='my-3'><Link href={'/'}>Error Pages</Link></li>
                <li className='my-3'><Link href={'/'}>Success Pages</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-[750px] h-full bg-white'>

        </div>
        <div className='w-96 h-full bg-white border-l-[1px] border-gray-500 pt-8 pl-16'>
          <ul className=' text-lg font-Rubik text-grey-dark'>
              <li className='my-1'><Link href={'/'}>Buttons</Link></li>
              <li className='my-1'><Link href={'/'}>Button Groups</Link></li>
              <li className='my-1'><Link href={'/'}>Cards</Link></li>
              <li className='my-1'><Link href={'/'}>Footer</Link></li>
              <li className='my-1'><Link href={'/'}>Input</Link></li>
              <li className='my-1'><Link href={'/'}>Navbar</Link></li>
              <li className='my-1'><Link href={'/'}>Hero</Link></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}
