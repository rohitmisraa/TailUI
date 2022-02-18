import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import InputD from "../../components/content/components/inputs";



export default function InputFields() {
    return (
        <div className="w-full overflow-x-hidden bg-skin-base ">
            <Head>
                {/* <title>{posts.frontmatter.title}</title> */}
                <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="stylesheet" href="/styles/global.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/solid.min.css" integrity="sha512-6/gTF62BJ06BajySRzTm7i8N2ZZ6StspU9uVWDdoBiuuNu5rs1a8VwiJ7skCz2BcvhpipLKfFerXkuzs+npeKA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <Nav />
            <div className='xl:w-[1480px] h-full flex pt-16 m-auto'>
            <div className="w-1/3 lg:w-[300px] hidden xl:w-[300px] lg:block h-full border-r-[1px] border-gray-400 pl-5 pr-3 pt-10 overflow-scroll fixed z-10">
                    <Drawer />
                </div>
                <div className='w-full xl:w-7/12 h-auto lg:ml-[300px] xl:ml-[300px]'>

                    <InputD />

                </div>
                <div className="h-full w-[350px] hidden xl:block">
                    <Stamps />

                </div>

            </div>
            <Footer />
        </div>
    )
}
