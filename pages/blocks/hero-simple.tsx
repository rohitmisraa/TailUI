import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footer";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/blocks/block";



export default function HeroSimple() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-bas bg-cl-violet min-h-screen">
            <div className="py-3 px-5 sm:px-20 w-screen flex justify-between">
                <div className="h-10 w-32 flex">
                    <img src="/assets/tailui-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                    <span className="text-xl ml-3 relative top-1 text-white">
                        TailUI</span>
                </div>
                <div className="py-1 w-max px-2 text-lg font-medium hidden sm:flex">
                    <button className="py-1 px-6 text-skin-dark  hover:relative hover:bottom-2">
                        Home</button>
                    <button className="py-1 px-6 text-skin-light  hover:relative hover:bottom-2">
                        About</button>
                    <button className="py-1 px-6 text-skin-light hover:relative hover:bottom-2">
                        Contact</button>
                </div>
            </div>
            <div className="py-3 px-5 sm:px-20 w-screen flex justify-between pt-44 space-x-4">
                <div className="w-full lg:w-3/6">
                    <h1 className="lg:text-7xl w-full text-5xl xl:w-[650px] text-white"><span className="font-bold text-cl-cyan">Track</span> your Daily activity anytime</h1>
                    <p className="text-xl text-cl-secondary xl:w-[650px]">Track your active time spend running, walking or cycling. Also get the sight of progress from anywhere no matter, its phone, tablet or pc.</p>
                    <div className="flex space-x-4 mt-10">
                    <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full">Learn More</button>
                    <button className="py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full">Check our blog</button>
                    </div>
                </div>
                <img src="/assets/undraw_fitness_tracker_3033.svg" alt="Fitness image" className="sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16" />
            </div>
        </div>
    )
}
