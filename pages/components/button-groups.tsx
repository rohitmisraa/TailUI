import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import ButtonsD from "../../components/content/components/button-groups";



export default function ButtonGroups() {
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
                    <Drawer />
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>
                    {/* <Headr /> */}
                    <ButtonsD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                        {title:"Button Groups", code:"button-groups"},
                        {title:"Secondary Button Group", code:"secondary-button-group"},
                        {title:"No-border button group", code:"no-border-button-group"},
                        {title:"Rounded Button Group", code:"rounded-button-group"},
                        {title:"Un-rounded Btn Group", code:"un-rounded-btn-group"},
                        {title:"Default Button Group", code:"default-button-group"},
                        {title:"Gradient button Groups", code:"gradient-button-groups"},
                        {title:"Gradient Groups unrounded", code:"gradient-group-unrounded"},
                        {title:"Text Only group", code:"text-only-group"},
                        {title:"Verticle button Groups", code:"verticle-button-groups"},

                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
