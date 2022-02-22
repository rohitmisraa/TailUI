import SVG from "../../../svg"
import Link from 'next/link'

export default function Themeguide() {
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>Theme Guide</h1>

            <h2 className="text-2xl font-medium text-skin-dark my-5">Why them is important</h2>

            <p className="my-4 text-skin-light">The first thing, a user see and observe is the color, It is the Identity of a website. Choosing the right color or color theme can make or break the UI.</p>

            <p className="my-4 text-skin-light">And we have made this easy for you, now you can use our ready-made theme and our custom colors in your project.</p>

            <p className="my-4 text-skin-light">No matter, the component is from TailUI or created by you.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">TailUI Theme</h2>

            <p className="my-4 text-skin-light">We already have 2 theme modes, light and Dark. We also have custom cool colors for your project. And the best part is everything is just copy/paste. You can also customize, add or remove colors or theme mode with one click.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">How to set up TailUI theme.</h2>

            <h3 className="text-xl font-normal text-skin-dark my-5">For only colors</h3>

            <p className="my-4 text-skin-light">If you already have installed Tailwind, then just copy this code to your tailwind.config.js file.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5"><strong>[config.js code]</strong></h2>

            <p className="my-4 text-skin-light">Now you have custom colors in your tailwind.config.js file.</p>

            <p className="my-4 text-skin-light">To use any color:-&nbsp;</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">Use our custom color as background<br />
            <strong>[button code]</strong></h2>

            <p className="my-4 text-skin-light">Use our custom color as text color:-</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5"><strong>[button code]</strong></h2>

            <h2 className="text-2xl font-medium text-skin-dark my-5">Setup TailUI Theme</h2>

            <p className="my-4 text-skin-light">Please do not be confused, above we added custom colors to our project, so we can use TailUI color easily.</p>

            <p className="my-4 text-skin-light">Now let us set up Light and Dark theme.</p>

            <p className="my-4 text-skin-light">Add this code to your main.css file</p>

            <h3 className="text-xl font-normal text-skin-dark my-5"><strong>[main.css code]</strong></h3>

            <p className="my-4 text-skin-light">Now we have a theme, but to use it we will have to define it in tailwind.config.js file.</p>

            <p className="my-4 text-skin-light">Now simply copy this code and paste it in your tailwind.config.js file inside extend: []</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">For More</h2>

            <p className="my-4 text-skin-light">Please checkout our <Link href={'/documentation/theme-guide'} passHref><a className="text-cl-red">Theme Guide</a></Link> for TailUI, If you face any issue please join our <Link href={'/'} passHref><a className="text-cl-red" target={'_blank'}>Discord channel</a></Link>, there you can ask all your doubts. For any correction to the page or project, go to our <Link href={'https://github.com/rohitmra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>Github Repository</a></Link>.</p>



            
        </div>
    )
}
