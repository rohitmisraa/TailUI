import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footer";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/blocks/block";



export default function HeroOcean() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-bas bg-cl-blue min-h-screen bg-no-repeat bg-cover bg-[url('/assets/pexels-belle-co-847393.jpg')]">
            <div className="py-3 px-5 sm:px-20 w-screen flex justify-between bg-[#FFCCC2]">
                <div className="h-10 w-32 flex">
                    <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                    <span className="text-xl ml-3 relative top-1 text-cl-black-carbon">
                        TailUI</span>
                </div>
                <div className="py-1 w-max px-2 text-lg font-medium hidden sm:flex">
                    <button className="py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2">
                        Home</button>
                    <button className="py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2">
                        About</button>
                    <button className="py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2">
                        Contact</button>
                </div>
                <div className="bg-[#FFCCC2] h-screen w-0 sm:w-7 absolute float-left top-0 left-0"></div>
                <div className="bg-[#FFCCC2] h-screen w-0 sm:w-7 absolute float-right top-0 right-0"></div>
                
            </div>
            <div className="py-3 px-10 sm:px-20 w-screen flex justify-between pt-44 space-x-4">
                <div className="w-full lg:w-3/6">
                    <h1 className="lg:text-7xl w-full text-5xl xl:w-[650px] text-white"> We <span className="font-bold text-[#FD8067]">CLEAN</span> Water and make it healthier</h1>
                    <p className="text-xl text-cl-secondary xl:w-[650px]">We are on a journey to clean ocean water and thousands of beaches, you can also help in this journey by donating.</p>
                    <div className="flex space-x-4 mt-10">
                    <button className="py-1 px-6 bg-[#FD8067] text-white text-base rounded-full">Learn More</button>
                    <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full">Check our blog</button>
                    </div>
                </div>
                {/* <img src="/assets/undraw_fitness_tracker_3033.svg" alt="Fitness image" className="sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16" /> */}
            </div>
        </div>
    )
}
