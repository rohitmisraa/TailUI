import Head from "next/head";
import Drawer from "../../components/layouts/Drawer";
import Footer from "../../components/layouts/Footerdoc";
import Stamps from "../../components/layouts/Stamps";
import Nav from "../../components/layouts/nav";
import ButtonsD from "../../components/content/buttons";



export default function Buttons() {
    return (
        <div className="w-100vw overflow-x-hidden bg-skin-base theme-ark">
            <Head>
                <title>Tailui - Buttons</title>
                <meta name="description" content="Tailui a free and open source components library for Tailwind css." />
                <link rel="icon" href="/favicon.ico" />
                <script src="https://cdn.tailwindcss.com"></script>
                <link rel="stylesheet" href="/styles/global.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/solid.min.css" integrity="sha512-6/gTF62BJ06BajySRzTm7i8N2ZZ6StspU9uVWDdoBiuuNu5rs1a8VwiJ7skCz2BcvhpipLKfFerXkuzs+npeKA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"></link>
            </Head>
            <Nav />
            <div className='w-screen lg:w-[1480px] h-full flex pt-16 m-auto'>
                <Drawer />
                <div className='w-full xl:min-w-max h-auto lg:ml-[300px] xl:ml-[300px]'>
                    {/* ---Content--- */}

                    <ButtonsD />
                    
                    {/* ---Content--- */}
                </div>
                <div className="h-full w-[350px]">
                    <Stamps />
                </div>
            </div>
            <Footer />
        </div>
    )
}
