import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import FooterD from "../../components/content/components/footers";



export default function Footers() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>Footers | TailUI</title>
                <meta name="description" content="Footers are the bottom container which have links and icons, and is used to perform some activies easily." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
            <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={8}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto overflow-auto lg:ml-[300px] xl:ml-[300px]'>

                    <FooterD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                        {title:"Simple Footer", code:"simple-footer"},
                        {title:"Simple Copyright Footer", code:"simple-copyright-footer"},
                        {title:"Email Sub Footer", code:"email-sub-footer"},
                        {title:"Footer with icons", code:"footer-with-icons"},
                        {title:"Footer with credit", code:"footer-with-credit"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
