import Link from 'next/link'

export default function Stamps() {
  return (
    <div className='hidden xl:block w-[300px] h-full pt-8 xl:pl-10 fixed justify-end'>
      <h1 className='text-skin-dark text-xl font-medium relative right-4'>Contents</h1>
          <ul className=' text-base font-Rubik text-skin-light'>
              <li className='my-1'><Link href={'/'} passHref>Buttons</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Button Groups</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Cards</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Footer</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Input</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Navbar</Link></li>
              <li className='my-1'><Link href={'/'} passHref>Hero</Link></li>
          </ul>
        </div>
  )
}
