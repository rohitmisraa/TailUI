import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import Content from "../../components/content/documentation/about-tailui";



export default function Abouttailui() {
    return (
        <div className="w-full xl:max-w-[1550px] m-auto overflow-x-hidden bg-skin-base ">
            <Head>
                <title>About TailUI</title>
                <meta name="description" content="TailUI is an Open source Tailwind CSS Components library. So all the components are made using Tailwind CSS. We created this TailUI to give some Quality help back to the developer community and anyone can use our components, blocks or Pages. Simply by copying the code." />
                <link rel="icon" href="/assets/favicon.ico" />
                
            </Head>
            <Nav />
            <div className='h-full flex pt-16'>
                <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer data={3}/>
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <Content />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps  list={[
                    {title:"Introduction", code:"Introduction"},
                    {title:"Why we made TailUI", code:"Why-we-made-TailUI"},
                    {title:"Credits", code:"Credits"},
                    {title:"Techs used in making", code:"Techs-used-in-making"},
                    {title:"Do you want to contribute?", code:"contribute"},
                    ]}/>

                </div>

            </div>
            <Footer />
        </div>
    )
}
