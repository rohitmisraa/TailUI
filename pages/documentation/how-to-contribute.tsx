import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/documentation/contribute";



export default function Contribute() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                {/* <title>{posts.frontmatter.title}</title> */}
                <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={4}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <Content />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                    {title:"Introduction", code:"Introduction"},
                    {title:"For graphics designers", code:"graphics-designers"},
                    {title:"Figma Components ", code:"Components"},
                    {title:"Web design", code:"Web-design"},
                    {title:"For web developers", code:"web-developers"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
