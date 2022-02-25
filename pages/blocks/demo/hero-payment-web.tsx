



export default function HeroPay() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-bas bg-[#EBEBEB]">
            <div className="py-3 px-5 sm:px-20 w-screen flex justify-between pt-5 fixed z-40">
                <div className="h-10 w-32 flex">
                    <img src="/assets/TailUI-icon.svg" alt="Logo" className="object-contain h-8 w-h-8" />
                    <span className="text-xl ml-3 relative top-1 text-cl-black-carbon">
                        TailUI Pay</span>
                </div>
                <div className="py-1 w-max px-2 text-lg font-medium hidden sm:flex">
                    <button className="py-1 px-6 text-cl-black-carbon  hover:relative hover:bottom-2">
                        Home</button>
                    <button className="py-1 px-6 text-cl-grey-dark  hover:relative hover:bottom-2">
                        About</button>
                    <button className="py-1 px-6 text-cl-grey-dark hover:relative hover:bottom-2">
                        Contact</button>
                </div>
                
            </div>
            <div className="py-3 w-screen h-screen overflow-hidden pt-44 md:pt-10 mt-24">
                <div className="w-full">
                    <h1 className="text-5xl w-full md:w-[650px] text-cl-black-carbon font-light m-auto text-center z-20 relative">We help to send money by one click</h1>
                    <div className=" w-40 m-auto my-7">
                        <button className="py-1 px-6 bg-cl-blue text-white text-base rounded-full relative z-20">Learn More</button>

                    </div>
                </div>
                <div className="">
                    <img src="/assets/blocksw.svg" alt="Fitness image" className="w-[1680px] h-[900px] absolute top-0  overflow-hidden hidden md:block" />
                <img src="/assets/undraw_winter_activities_vv-0-v.svg" alt="Tree image" className="top-20 lg:top-0 relative left-32 z-10 w-60 xl:w-[450px] hidden md:block"/>
                <img src="/assets/undraw_wallet_aym5.svg" alt="Tree image" className="relative bottom-24 xl:bottom-[300px] float-right right-32 z-10 w-60 xl:w-[450px] hidden md:block"/>

                </div>
            </div>
        </div>
    )
}
