import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import InputD from "../../components/content/components/Cards";



export default function Cards() {
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
                    <Drawer data={7}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <InputD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                        {title:"Card with Image", code:"card-with-image"},
                        {title:"Empty Card", code:"empty-card"},
                        {title:"Text with button", code:"text-with-button"},
                        {title:"Social Media Card", code:"social-media-card"},
                        {title:"Payment Card", code:"payment-card"},
                        {title:"Project Card", code:"project-card"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
