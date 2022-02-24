import Link from 'next/link'

export default function Footerdoc() {
  return (
    <div className='lg:ml-[330px] py-3 px-3 pt-3 bg-gray-400/10'>
            <div className='grid sm:grid-cols-4 grid-cols-2 md:px-40 max-w-[1400px] m-auto'>
                <div className="h-10 w-32 flex my-4">
                    <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8"/>
                    <span className="text-xl ml-3 relative top-1 text-skin-dark">TailUI</span>
                </div>
                <div className="grid  rounded-lg py-1 w-max my-4 px-2">
                    <span className="py-1 px-2 md:px-10 text-skin-dark text-left font-medium">HELP AND SUPPORT</span>
                    <Link href={'/documentation/getting-started'} passHref><a><button className="py-2 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Documentation</button></a></Link>
                    <Link href={'/components/buttons'} passHref><a><button className="py-2 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Components</button></a></Link>
                    <Link href={'/'} passHref><a><button className="py-2 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Contact</button></a></Link>
                </div>
                <div className="grid  rounded-lg py-1 w-max my-4 px-2">
                    <span className="py-1 px-2 md:px-10 text-skin-dark text-left font-medium">FOLLOW US</span>
                    <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a target="_blank"><button className="py-1 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Discord</button></a></Link>
                    <Link href={'https://twitter.com/rohitmra '} passHref><a target="_blank"><button className="py-1 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Twitter</button></a></Link>
                    <Link href={'https://www.facebook.com/gettailui'} passHref><a target="_blank"><button className="py-1 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Facebook</button></a></Link>
                </div>
                <div className="grid  rounded-lg py-1 w-max my-4 px-2">
                    <span className="py-1 px-2 md:px-10 text-skin-dark text-left font-medium">CONTRIBUTE</span>
                    <Link href={'/documentation/how-to-contribute'} passHref><a><button className="py-1 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">How to contribute?</button></a></Link>
                    <Link href={'https://github.com/rohitmra/TailUI'} passHref><a target="_blank"><button className="py-1 px-2 md:px-10 text-skin-light text-left hover:text-blue-600">Github</button></a></Link>
                    <span className='opacity-0'>space</span>
                </div>
            </div>

            <div className='h-px w-11/12 m-auto bg-cl-grey-light'></div>
            <div className='flex justify-between py-3 w-full'>
            <span className="py-1 px-2 md:px-10 text-skin-light w-max m-auto">© TailUI 2022</span>
                <span className="py-1 px-2 md:px-10 text-skin-light w-max m-auto">Created by <Link href={'/'} passHref><button className="py-1 px-1 text-cl-red text-left hover:text-cl-violet">Rohit  Mishra</button></Link></span>
            </div>
        </div>
  )
}
