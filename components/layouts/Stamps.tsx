import Link from 'next/link'

export default function stamps() {
  return (
    <div className='hidden xl:block w-[300px] h-full pt-8 xl:pl-10 fixed justify-end'>
      <h1 className='text-skin-dark text-xl font-medium relative right-4'>Contents</h1>
          <ul className=' text-base font-Rubik text-skin-light'>
              <li className='my-1'><Link href={'/'}>Buttons</Link></li>
              <li className='my-1'><Link href={'/'}>Button Groups</Link></li>
              <li className='my-1'><Link href={'/'}>Cards</Link></li>
              <li className='my-1'><Link href={'/'}>Footer</Link></li>
              <li className='my-1'><Link href={'/'}>Input</Link></li>
              <li className='my-1'><Link href={'/'}>Navbar</Link></li>
              <li className='my-1'><Link href={'/'}>Hero</Link></li>
          </ul>
        </div>
  )
}
