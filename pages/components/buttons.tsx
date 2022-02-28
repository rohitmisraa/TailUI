import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import ButtonsD from "../../components/content/components/buttons";



export default function Buttons() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>Buttons | TailUI</title>
                <meta name="description" content="Buttons allows users to perform on click activities. We have tens of options for buttons." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={5}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <ButtonsD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps list={[{
                        title:"Default Buttons",code:"default-buttons"},
                        {title:"Rounded Buttons",code:"rounded-buttons"},
                        {title:"Un-rounded Buttons", code:"un-rounded-buttons"},
                        {title:"Secondary Buttons", code:"secondary-buttons"},
                        {title:"Text Only buttons", code:"text-only-buttons"},
                        {title:"Gradient Buttons Default", code:"bradient-buttons-default"},
                        {title:"Gradient Button Rounded", code:"gradient-button-rounded"},
                        {title:"Gradient Button unrounded", code:"gradient-button-unrounded"},
                        {title:"Buttons with icon", code:"buttons-with-icon"},
                        ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
