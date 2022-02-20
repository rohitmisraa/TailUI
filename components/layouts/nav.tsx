import React, { useState } from 'react'
import Drawer from "../../components/layouts/Drawer";
import Link from 'next/link'
import SVG from '../../svg'

export default function Nav() {
  const [sidemenu, setsidemenu] = useState(false)
  function showMenu() {
    if (sidemenu) {
        setsidemenu(false)
    } else {
        setsidemenu(true)

    }
}
  return (
    <div className="py-3 px-10 lg:px-20 w-screen flex justify-between fixed max-h-20  z-20 bg-white/5 backdrop-blur-md">
          <div className='flex text-skin-dark'>
          <button className="py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 block lg:hidden" onClick={showMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="30" fill='currentColor'><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
            </button>
            <div className="h-10 relative top-2 mx-2 w-auto flex">
                <img src="/assets/icon.png" alt="Logo" className="object-contain h-8 w-h-8"/>
                <span className="text-xl ml-3 relative top-1 sm:block hidden">Tailui</span>
            </div>
            <div className='flex bg-cl-secondary rounded-full my-1'>
                <input 
                    type="text" name="username" id="usernamer" placeholder="components" 
                    className="bg-cl-secondary w-32 placeholder:text-cl-grey-dark appearance-none border-2 border-gray-300 rounded-l-full py-0 px-5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cl-violet focus:border-transparent "
                />
                <button className="px-6 py-0 bg-cl-blue text-white text-base rounded-full">Search</button>
            </div>

          </div>
            
            <div className="flex py-1 w-max text-skin-light px-2 text-lg font-medium">
            <Link href={'/'} passHref>
              <button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block">Home</button></Link>
            <Link href={'/'} passHref><button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block">Documentation</button></Link>
            <Link href={'/components/buttons'} passHref><button className="py-1 px-6  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 hidden lg:block">Components</button></Link>
            <Link href={'/'} passHref><button className="py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 sm:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="30" height="30" fill='currentColor'><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"/></svg>
            </button></Link>
            <Link href={'/github.com'} passHref><button className="py-1 px-2  hover:relative hover:text-cl-violet hover:font-medium hover:bottom-1 sm:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" width="30" height="30" fill='currentColor'>
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
            </button></Link>
            </div>

            <div className='pl-5 w-auto bg-skin-base h-screen overflow-auto absolute hidde left-0 top-16' style={{display: sidemenu ? 'block' : 'none' }}>
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
                <Drawer />

            </div>
        </div>
  )
}
