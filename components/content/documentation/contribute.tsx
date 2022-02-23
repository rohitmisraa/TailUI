import SVG from "../../../svg"
import Link from 'next/link'

export default function Contribute() {
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>How to contribute to Tailui Project?</h1>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Introduction">Introduction</h2>

            <p className="my-4 text-skin-light" id="graphics-designers">TailUI is an open-source, Tailwind components library. This means anyone can contribute to this project. To know more, checkout <Link href={'/documentation/about-tailui'} passHref><a className="text-cl-red">about TailUI</a></Link>. For this project we are managing website part with web components and designing part in Figma. So you can contribute in any of these.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="graphics-designers">For graphics designers</h2>

            <p className="my-4 text-skin-light">If you are a graphics designer and want to contribute to the project, you can do by two ways.</p>

            <h2 className="text-xl font-normal text-skin-dark my-5" id="Components">1st - Figma Components&nbsp;</h2>

            <p className="my-4 text-skin-light">You can help use manage, change or add components to our Figma file.</p>

            <p className="my-4 text-skin-light">To do that, go to our <Link href={'https://www.figma.com/file/AecRDddZ9yERdseaj6YGyY/tailui-materials'} passHref><a className="text-cl-red" target={'_blank'}>components </a></Link> 
             or <Link href={'https://www.figma.com/file/bdG3SRWAt4tSHNGpZ54sNH/tailui-website'} passHref><a className="text-cl-red" target={'_blank'}>web design</a></Link> and copy the design make changes and ping someone from TailUI moderator in <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord channel</a></Link>, and we will later add the change to the main files.</p>

            <p className="my-4 text-skin-light">You can also contact us at discord, and we may give you direct access to TailUI team at Figma.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Web-design">2nd - Web design</h2>

            <p className="my-4 text-skin-light">You can help us to add or changing graphics to our main website or web components.</p>

            <p className="my-4 text-skin-light">To do this:-&nbsp;</p>

            <p className="my-4 text-skin-light">Go to our GitHub repository</p>

            <ol className="list-decimal text-skin-light ml-10">
                <li>Fork the repository</li>
                <li>Do your changes</li>
                <li>Create a pull request</li>
            </ol>

            <p className="my-4 text-skin-light">We will review your changes and add respectively.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="web-developers">For web developers</h2>

            <p className="my-4 text-skin-light">You can help us create more useful and cool components, manage GitHub, discord channel and more.</p>

            <p className="my-4 text-skin-light">To contribute in this, you must have knowledge of Next.js, JavaScript, and Tailwind CSS. For more, checkout About TailUI technologies.</p>

            <p className="my-4 text-skin-light">To contribute, go to our GitHub repository</p>

            <ol className="list-decimal text-skin-light ml-10">
                <li>Fork it</li>
                <li>Make your changes</li>
                <li>Create a pull request</li>
            </ol>

            <p className="my-4 text-skin-light">Then we will review your changes and add it respectively.</p>

            <p className="my-4 text-skin-light">You can also be a collaborator and help the community becoming a part of TailUI. For that, join our Discord channel.</p>
            <p className="my-4 text-skin-light">Please checkout our <Link href={'/documentation/theme-guide'} passHref><a className="text-cl-red">Theme Guide</a></Link> for TailUI, If you face any issue please join our <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord channel</a></Link>, there you can ask all your doubts. For any correction to the page or project, go to our <Link href={'https://github.com/rohitmra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>Github Repository</a></Link>.</p>


            
        </div>
    )
}
