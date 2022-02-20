import Link from 'next/link'
import SVG from '../../svg'


export default function Drawer() {
  return (
    <div className='text-skin-dark'>
          <div className='my-2'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
                {SVG.docs}
              </div>
              <span className=' font-Rubik text-xl text-skin-dark font-medium'>Documentation</span>
              {/* <div className='relative top-2 ml-4 fill-text-skin-dark'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className='text-skin-dark font-medium my-3'><Link href={'/'}>Getting Started</Link></li>
                
                  <li className='my-3'><Link href={'/'} passHref>Theme Guide</Link></li>
                <li className='my-3'><Link href={'/'} passHref>About TailUI</Link></li>
                <li className='my-3'><Link href={'/'} passHref>How to contribute?</Link></li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5  bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.block}
              </div>
              <span className=' font-Rubik text-xl text-skin-light'>Components</span>
              {/* <div className='relative top-2 ml-4'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
              
                <li className='my-3'><Link href={'/components/buttons'} passHref>Buttons</Link></li>
                <li className='my-3'><Link href={'/components/button-groups'} passHref>Button Groups</Link></li>
                <li className='my-3'><Link href={'/components/cards'} passHref>Cards</Link></li>
                <li className='my-3'><Link href={'/components/footers'} passHref>Footer</Link></li>
                <li className='my-3'><Link href={'/components/input-fields'} passHref>Input</Link></li>
                <li className='my-3'><Link href={'/components/navbars'} passHref>Navbar</Link></li>
                <li className='my-3'><Link href={'/blocks/hero'} passHref>Hero</Link></li>
              </ul>
            </div>
          </div>

          <div className='my-5 pb-10'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.table}
              </div>
              <span className=' font-Rubik text-xl text-skin-light'>Web Blocks</span>
              {/* <div className='relative top-2 ml-4'>{SVG.down_arrow}</div> */}
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className='my-3'><Link href={'/blocks/website'} passHref>Single Page</Link></li>
                <li className='my-3'><Link href={'/'} passHref>Portfolios</Link></li>
                <li className='my-3'><Link href={'/'} passHref>Error Pages</Link></li> 
                <li className='my-3'><Link href={'/'} passHref>Success Pages</Link></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
