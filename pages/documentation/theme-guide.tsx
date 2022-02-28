import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/documentation/theme_guide";



export default function ThemeGuide() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>Theme Guide | TailUI</title>
                <meta name="description" content="The first thing, a user see and observe is the color, It is the Identity of a website. Choosing the right color or color theme can make or break the UI. And we have made this easy for you, now you can use our ready-made theme and our custom colors in your project." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={2}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <Content />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps list={[
                    {title:"Why theme is important", code:"Why-theme-is-important"},
                    {title:"TailUI Theme", code:"TailUI-Theme"},
                    {title:"How to set up TailUI theme.", code:"set-up"},
                    {title:"For More", code:"For-More"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
