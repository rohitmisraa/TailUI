import Link from 'next/link'

export default function Stamps({list}) {
  
  
  return (
    <div className='hidden xl:block w-[300px] h-max pt-8 xl:pl-10 fixed justify-end'>
      <h1 className='text-skin-dark text-xl font-medium relative right-4'>Contents</h1>
          <ul className=' text-base font-Rubik text-skin-light'>
              {list.map(stamp =>
                 <li className='my-1' key={stamp.id}>
                   <Link href={"#"+stamp.code} passHref>
                     {stamp.title}
                   </Link>
                 </li>)}
          </ul>
        </div>
  )
}
