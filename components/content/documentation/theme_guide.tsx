import SVG from "../../../svg"
import Link from 'next/link'

export default function Themeguide() {
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>Theme Guide</h1>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Why-theme-is-important">Why them is important</h2>

            <p className="my-4 text-skin-light">The first thing, a user see and observe is the color, It is the Identity of a website. Choosing the right color or color theme can make or break the UI.</p>

            <p className="my-4 text-skin-light">And we have made this easy for you, now you can use our ready-made theme and our custom colors in your project.</p>

            <p className="my-4 text-skin-light">No matter, the component is from TailUI or created by you.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="TailUI-Theme">TailUI Theme</h2>

            <p className="my-4 text-skin-light">We already have 2 theme modes, light and Dark. We also have custom cool colors for your project. And the best part is everything is just copy/paste. You can also customize, add or remove colors or theme mode with one click.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">How to set up TailUI theme.</h2>

            <h3 className="text-xl font-normal text-skin-dark my-5">For only colors</h3>

            <p className="my-4 text-skin-light">If you already have installed Tailwind, then just copy this code to your tailwind.config.js file.</p>


            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10">// tailwind.config.js</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                    
                        module.exports = &#123;<br/>
                            content: ['*'],<br/>
                            theme: &#123;<br/>
                            extend: &#123;<br/>
                                textColor: &#123;<br/>
                                    skin: &#123;<br/>
                                    light: 'var(--color-text-light)',<br/>
                                    dark: 'var(--color-text-dark)',<br/>
                                    auto: 'var(--color-social)',<br/>
                                    &#125;,<br/>
                                &#125;,<br/>
                                backgroundColor: &#123;<br/>
                                    skin: &#123;<br/>
                                    fill: 'var(--fill-dark)',<br/>
                                    base: 'var(--color-background)'<br/>
                                    &#125;<br/>
                                &#125;,<br/>
                                fontFamily: &#123;<br/>
                                'Rubik': ['Rubik', 'sans-serif'],<br/>
                                &#125;,<br/>
                                colors: &#123;<br/>
                                'cl-black-carbon': '#16192C',<br/>
                                'cl-grey-light': '#D0CECE',<br/>
                                'cl-grey-dark': '#5E5E5E',<br/>
                                'cl-blue': '#3B82F6',<br/>
                                'cl-secondary': '#D3DEF0',<br/>
                                'cl-red': '#EF233C',<br/>
                                'cl-blue-dark': '#061C3F',<br/>
                                'cl-green': '#25A244',<br/>
                                'cl-pink': '#F72585',<br/>
                                'cl-yellow': '#FFAA00',<br/>
                                'cl-cyan': '#00B4D8',<br/>
                                'cl-orange': '#FF4800',<br/>
                                'cl-violet': '#7209B7',<br/>
                                <br/>
                                // gradients<br/>
                                <br/>
                                'gr_blue': &#123;<br/>
                                    1 : "rgba(59,130,246,1)",<br/>
                                    2 : "rgba(81,196,233,1)"<br/>
                                &#125;,<br/>
                                <br/>
                                'gr_red': &#123;<br/>
                                    1 : "rgba(239,35,60,1)",<br/>
                                    2 : "rgba(239,84,35,1)"<br/>
                                &#125;,<br/>
                                'gr_pink': &#123;<br/>
                                    1 : "rgba(251,10,40,1)",<br/>
                                    2 : "rgba(249,39,203,1)"<br/>
                                &#125;,<br/>
                                'gr_cyan': &#123;<br/>
                                    1 : "rgba(0,180,216,1)",<br/>
                                    2 : "rgba(61,242,231,1)"<br/>
                                &#125;,<br/>
                                'gr_orange': &#123;<br/>
                                    1 : "rgba(255,72,0,1)",<br/>
                                    2 : "rgba(255,187,13,1)"<br/>
                                &#125;,<br/>
                                'gr_yellow': &#123;<br/>
                                    1 : "rgba(255,170,0,1)",<br/>
                                    2 : "rgba(240,210,54,1)"<br/>
                                &#125;,<br/>
                                'gr_green': &#123;<br/>
                                    1 s "rgba(37,162,68,1)",<br/>
                                    2 : "rgba(91,223,45,1)"<br/>
                                &#125;,<br/>
                                'gr_violet': &#123;<br/>
                                    1 : "rgba(114,9,183,1)",<br/>
                                    2 : "rgba(180,9,183,1)"<br/>
                                &#125;,<br/>
                                &#125;,<br/>
                            &#125;,<br/>
                            &#125; ,<br/>
                            plugins: [],<br/>

                    </code>
                    </pre>
                </div>
            <h2 className="text-2xl font-medium text-skin-dark my-5"><strong>[config.js code]</strong></h2>

            <p className="my-4 text-skin-light">Now you have custom colors in your tailwind.config.js file.</p>

            <p className="my-4 text-skin-light">To use any color:-&nbsp;</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">Use our custom color as background</h2><br />
            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10">// Background color example</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 text-white language-html flex' id='code1'>

                        &lt;button className=&quot;<div className="w-3 h-3 bg-cl-red relative top-1"></div>bg-cl-red&quot;&gt;Contact me&lt;/button&gt;

                    </code>
                    </pre>
                </div>

            

            <p className="my-4 text-skin-light">Use our custom color as text color:-</p>

            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10">// Text color example</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 text-white language-html flex' id='code1'>

                        &lt;p className=&quot;<div className="w-3 h-3 bg-cl-green relative top-1"></div><span className="text-cl-pink">text-cl-green</span>&quot;&gt;Contact me&lt;/p&gt;

                    </code>
                    </pre>
                </div>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="set-up">Setup TailUI Theme</h2>

            <p className="my-4 text-skin-light">Please do not be confused, above we added custom colors to our project, so we can use TailUI color easily.</p>

            <p className="my-4 text-skin-light">Now let us set up Light and Dark theme.</p>

            <p className="my-4 text-skin-light">Add this code to your main.css file</p>

            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10">// main.css</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                        @tailwind base;<br/>
                        @tailwind components;<br/>
                        @tailwind utilities;<br/>
                        <br/>
                        @layer base&#123;<br/><br/>
                            :root &#123;<br/><br/>
                                --color-background: #ede8ea;<br/>
                                --color-text-light: #5E5E5E;<br/>
                                --color-text-dark: #16192C;<br/>
                                --color-text-red: #EF233C;<br/>
                                --fill-dark: #16192C;<br/>
                                --color-social: #ebebeb;<br/>
                            &#125;<br/>
                            .theme-dark &#123;<br/>
                                --color-background: #16192C;<br/>
                                --color-text-light: #D3DEF0;<br/>
                                --color-text-dark: #ffffff;<br/>
                                --color-text-red: #EF233C;<br/>
                                --fill-dark: #ffffff;<br/>
                                --color-social: #000000;<br/>
                            &#125;&#125;<br/>
                        

                    </code>
                    </pre>
                </div>

            <p className="my-4 text-skin-light">Now we have a theme, but to use it we will have to define it in tailwind.config.js file.</p>

            <p className="my-4 text-skin-light">Now simply copy this code and paste it in your tailwind.config.js file inside extend: []</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="For-More">For More</h2>

            <p className="my-4 text-skin-light">Please checkout our <Link href={'/documentation/theme-guide'} passHref><a className="text-cl-red">Theme Guide</a></Link> for TailUI, If you face any issue please join our <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord channel</a></Link>, there you can ask all your doubts. For any correction to the page or project, go to our <Link href={'https://github.com/&#123;mra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>Github Repository</a></Link>.</p>



            
        </div>
    )
}
