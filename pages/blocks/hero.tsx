import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/blocks/block";



export default function HeroFitness() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>Hero | TailUI</title>
                <meta name="description" content="Hero blocks are the top or the first component user see when come to index page. Simple Tracking app Hero, This hero is best for simple sites like app landing page, and other simple design websites." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={11}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <Content />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps list={[
                        {title:"Simple Tracking app Hero", code:"Simple-Tracking-app"},
                        {title:"Modern with background Hero", code:"Modern-with-background"},
                        {title:"Modern with icons Hero", code:"Modern-with-icons"},
                        {title:"Our TailUI Hero", code:"Our-TailUI-Hero"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
