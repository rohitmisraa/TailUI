import Link from 'next/link'
import Nav from "../../components/layouts/nav";


export default function HeroSimple() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-base min-h-screen">
            <Nav />
            <div className="py-3 px-5 sm:px-20 w-screen flex justify-between pt-44 space-x-4">
                <div className="w-full lg:w-3/6">
                    <h1 className="lg:text-7xl w-full text-5xl xl:w-[650px] text-skin-dark"><span className="font-bold text-gr_violet-2">Tailui </span>- Tailwind Component library and templates</h1>
                    <p className="text-xl text-skin-light xl:w-[650px] mt-5">A Tailwind library with 50+ components, Make your app using our library without much effort.</p>
                    <div className="flex space-x-4 mt-10">
                    <Link href={'/components/buttons'} passHref><button className="py-3 px-10 bg-gradient-to-r from-gr_violet-1 to-gr_violet-2 text-white text-lg rounded-lg">Components</button></Link>
                    <Link href={'/'} passHref><button className="py-3 px-10 bg-cl-secondary text-cl-blue-dark text-lg rounded-lg">Documentation</button></Link>
                    </div>
                </div>
                <img src="/assets/undraw_product_teardown_re_m1pc.svg" alt="Fitness image" className="sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16" />
            </div>
        </div>
    )
}
