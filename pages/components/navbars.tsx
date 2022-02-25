import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import NavbarD from "../../components/content/components/navbars";



export default function Navbars() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-base ">
            <Head>
                {/* <title>{posts.frontmatter.title}</title> */}
                <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='xl:w-[1480px] h-full flex pt-16 m-auto'>
            <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={10}/>
                </div>
                <div className='w-full xl:w-7/12 overflow-auto h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <NavbarD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                        {title:"Simple navbar", code:"simple-navbar"},
                        {title:"Simple icon navbar", code:"simple-icon-navbar"},
                        {title:"Search and menus", code:"search-and-menus"},
                        {title:"Simple search navbar", code:"simple-search-navbar"},
                        {title:"Search with icon", code:"search-with-icon"},
                        {title:"Rounded navbar", code:"rounded-navbar"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
