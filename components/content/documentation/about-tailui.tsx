import SVG from "../../../svg"
import Link from 'next/link'

export default function About() {
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>About Tailui</h1>
            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Introduction">Introduction</h2>

            <p className="my-4 text-skin-light">TailUI is an Open source Tailwind CSS Components library. So all the components are made using Tailwind CSS. We created this TailUI to give some Quality help back to the developer community and anyone can use our components, blocks or Pages. Simply by copying the code.</p>

            <h3 className="text-xl font-normal text-skin-dark my-5" id="Why-we-made-TailUI">Why we made TailUI</h3>

            <p className="my-4 text-skin-light">Honestly, there were two reasons, behind making this project.</p>

            <p className="my-4 text-skin-light">First is, one day I (Rohit Mishra) was searching for some good components and pages for my new Project. And I found many. But the problem was either they were good but paid, or not that good to use in Modern Projects. Some were also good and free, but in less number of components. So I decided to make a place where anyone from the globe can use or contribute to cool components.</p>

            <p className="my-4 text-skin-light">The second reason is, I was going to make this project later and little different but, on 1st Feb 2022 I saw <Link href={'https://townhall.hashnode.com/netlify-hackathon'} passHref><a className="text-cl-red" target={'_blank'}>Hashnode hackathon</a></Link> for web developers, then I decided to turn this idea into a real project and participate in that hackathon competition.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Credits">Credits</h2>

            <p className="my-4 text-skin-light">Founder - Rohit Mishra</p>

            <p className="my-4 text-skin-light">Images &amp; Icons used from</p>

            <p className="my-4 text-skin-light"><Link href={'https://undraw.co/illustrations'} passHref><a className="text-cl-red" target={'_blank'}>- undraw.com</a></Link></p>
            <p className="my-4 text-skin-light"><Link href={'https://fontawesome.com/v5/search'} passHref><a className="text-cl-red" target={'_blank'}>- Fontawesome.com</a></Link></p>
            <p className="my-4 text-skin-light"><Link href={'https://pixabay.com/'} passHref><a className="text-cl-red" target={'_blank'}>- pixabay.com</a></Link></p>


            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Techs-used-in-making">Techs used in making</h2>

            <h3 className="text-xl font-normal text-skin-dark my-5">Next.js</h3>

            <p className="my-4 text-skin-light">For server side rendering</p>

            <h3 className="text-xl font-normal text-skin-dark my-5">Tailwind CSS</h3>

            <p className="my-4 text-skin-light">As a CSS Framework</p>

            <h3 className="text-xl font-normal text-skin-dark my-5">Figma</h3>

            <p className="my-4 text-skin-light">For designing components and website</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="contribute">Do you want to contribute?</h2>

            <p className="my-4 text-skin-light">To contribute to this project, if you are a graphics designer please prefer our <Link href={'https://www.figma.com/file/AecRDddZ9yERdseaj6YGyY/tailui-materials'} passHref><a className="text-cl-red" target={'_blank'}>Figma file</a></Link> and If you are a developer please go to our <Link href={'https://github.com/rohitmra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>GitHub Repository</a></Link>. To work as a collaborator or have any Idea, doubts, Join our <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord Channel</a></Link>.</p>

            <p className="my-4 text-skin-light">Want to know more, checkout <Link href={'/documentation/how-to-contribute'} passHref><a className="text-cl-red">How to Contribute?</a></Link> Page.</p>

            
        </div>
    )
}
