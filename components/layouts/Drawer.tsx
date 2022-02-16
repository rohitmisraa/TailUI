import Link from 'next/link'
import SVG from '../../svg'


export default function drawer() {
  return (
    <div className='w-1/3 lg:w-[300px] hidden xl:w-[300px] xl:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10'>
          <div className='my-2'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
                {SVG.docs}
              </div>
              <span className=' font-Rubik text-xl text-skin-dark font-medium'>Documentation</span>
              <div className='relative top-2 ml-4 fill-text-skin-dark'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className='text-skin-dark font-medium my-3'><Link href={'/'}>Getting Started</Link></li>
                
                  <li className='my-3'><Link href={'/'}>Theme Guide</Link></li>
                <li className='my-3'><Link href={'/'}>About TailUI</Link></li>
                <li className='my-3'><Link href={'/'}>How to contribute?</Link></li>
              </ul>
            </div>
          </div>
          <div className='my-5'>
            <div className='flex cursor-pointer'>
              <div className='h-5 w-5  bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.block}
              </div>
              <span className=' font-Rubik text-xl text-skin-light'>Components</span>
              <div className='relative top-2 ml-4'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
              
                <li className='my-3'><Link href={'/components/buttons'}>Buttons</Link></li>
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
              <div className='h-5 w-5 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 mr-4 relative top-1 rounded-md p-[2px]'>
              {SVG.table}
              </div>
              <span className=' font-Rubik text-xl text-skin-light'>Web Blocks</span>
              <div className='relative top-2 ml-4'>{SVG.down_arrow}</div>
              </div>
            <div className='ml-20 font-Rubik'>
              <ul className='list-disc text-xl font-Rubik text-skin-light'>
                <li className='my-3'><Link href={'/blocks/website'}>Single Page</Link></li>
                <li className='my-3'><Link href={'/'}>Portfolios</Link></li>
                <li className='my-3'><Link href={'/'}>Error Pages</Link></li> 
                <li className='my-3'><Link href={'/'}>Success Pages</Link></li>
              </ul>
            </div>
          </div>
        </div>
  )
}
