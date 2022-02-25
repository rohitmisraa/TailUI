import React, { useState, useEffect } from 'react'
import Drawer from "../../components/layouts/Drawer";
import Link from 'next/link'
import SVG from '../../svg'
import Head from 'next/head'
import Router from "next/router";

export default function Nav() {
  const [sidemenu, setsidemenu] = useState(false)
  const [darktheme, setdarktheme] = useState('true')


  function showMenu() {
    if (sidemenu) {
        setsidemenu(false)
    } else {
        setsidemenu(true)

    }}
    
  function theme() {
    if (darktheme === 'true') {
      setdarktheme('false')
      localStorage.setItem('theme', 'false')
      Router.reload();
    } else {
      setdarktheme('true')
      localStorage.setItem('theme', 'true')
      Router.reload();
    }}

    // 
    useEffect(() => {
      const themedata = localStorage.getItem('theme');
      setdarktheme(themedata)
    }, []);
  return (
    <><Head>
      <meta name="description" content="TailUI a free and open source components library for Tailwind css." />
      <link rel="icon" href="/assets/favicon.ico" />

    </Head><div className="py-3 px-10 lg:px-20 w-screen flex justify-between fixed max-h-20  z-20 bg-white/5 backdrop-blur-md">
        <div className='flex text-skin-dark'>
          <button className="py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 block lg:hidden" onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30" fill='currentColor'><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
            
          </button>
          <Link href={'/'} passHref><a>
          <div className="h-10 relative top-2 mx-2 w-auto flex">
            <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8 shadow-sm" />
            <span className="text-xl ml-3 relative top-1 sm:block hidden">TailUI</span>
          </div>
          </a></Link>
          {/* <div className='flex bg-cl-secondary rounded-full my-1'>
            <input
              type="text" name="username" id="usernamer" placeholder="components"
              className="bg-cl-secondary w-32 placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-0 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent " />
            <button className="px-6 py-0 bg-cl-blue text-white text-base rounded-full">Search</button>
          </div> */}

        </div>

        <div className="flex py-1 w-max text-skin-light px-2 text-lg font-medium">
          <Link href={'https://blog.tailui.xyz'} passHref><a target="_blank">
            <button className="py-1 px-6  relative top-1 hover:text-cl-violet hover:font-medium hover:top-0 hidden lg:block">Blog</button></a></Link>
          <Link href={'/documentation/getting-started'} passHref><a>
            <button className="py-1 px-6 top-1 relative hover:text-cl-violet hover:font-medium hover:top-0 hidden lg:block">Documentation</button>
            </a></Link>
          <Link href={'/components/buttons'} passHref><a>
            <button className="py-1 px-6 top-1 relative hover:text-cl-violet hover:font-medium hover:top-0 hidden lg:block">Components</button>
            </a></Link>
          <button onClick={theme} className="py-1 px-2 w-16  relative hover:text-cl-violet top-1 hover:font-medium hover:top-0">
            {
              (darktheme === "true")?
              SVG.light_btn:
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30" fill='currentColor'><path d="M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z"/></svg>
            }
          </button>
          <Link href={'https://www.figma.com/file/AecRDddZ9yERdseaj6YGyY/tailui-materials'} passHref><a target="_blank">
            <button className="py-1 px-2 pr-5 relative top-1 hover:text-cl-violet hover:font-medium hover:top-0 sm:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="30" height="30" fill='currentColor'>
              <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"/></svg>
            </button></a></Link>
          <Link href={'https://github.com/rohitmra/tailui'} passHref><a target="_blank">
            <button className="py-1 px-2 relative top-1 hover:text-cl-violet hover:font-medium hover:top-0 sm:block hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill='currentColor'>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
          </button></a></Link>
        </div>

        <div className='pl-5 w-auto bg-skin-base h-screen overflow-auto absolute hidde left-0 top-16' style={{ display: sidemenu ? 'block' : 'none' }}>
          <div className='my-2'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 text-skin-dark bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
                {SVG.list_icon}
              </div>
              <span className=' font-Rubik text-skin-light text-xl font-medium'>Menus</span>
              {/* <div className='relative top-2 ml-4 text-skin-dark'>{SVG.down_arrow}</div> */}
            </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className='my-3'><Link href={'/'} passHref>Home</Link></li>
                <li className='my-3'><Link href={'/'} passHref>Documentations</Link></li>
                <li className='my-3'><Link href={'/components/buttons'} passHref>Components</Link></li>
              </ul>
            </div>
          </div>
          <Drawer data={null}/>

        </div>
      </div></>
  )
}
