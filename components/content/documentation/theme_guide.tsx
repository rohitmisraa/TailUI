import SVG from "../../../svg"
import Link from 'next/link'

export default function Themeguide() {
    return (
        <div className='p-4 sm:p-10 min-h-screen'>
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
                <p className="text-cl-secondary py-3 ml-10 italic">&#47;&#47; tailwind.config.js</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                    
                        module.exports = &#123;<br/>
                            content: [&apos;*&apos;],<br/>
                            theme: &#123;<br/>
                            extend: &#123;<br/>
                                textColor: &#123;<br/>
                                    skin: &#123;<br/>
                                    light: &apos;var(--color-text-light)&apos;,<br/>
                                    dark: &apos;var(--color-text-dark)&apos;,<br/>
                                    auto: &apos;var(--color-social)&apos;,<br/>
                                    &#125;,<br/>
                                &#125;,<br/>
                                backgroundColor: &#123;<br/>
                                    skin: &#123;<br/>
                                    fill: &apos;var(--fill-dark)&apos;,<br/>
                                    base: &apos;var(--color-background)&apos;<br/>
                                    &#125;<br/>
                                &#125;,<br/>
                                fontFamily: &#123;<br/>
                                &apos;Rubik&apos;: [&apos;Rubik&apos;, &apos;sans-serif&apos;],<br/>
                                &#125;,<br/>
                                colors: &#123;<br/>
                                &apos;cl-black-carbon&apos;: &apos;#16192C&apos;,<br/>
                                &apos;cl-grey-light&apos;: &apos;#D0CECE&apos;,<br/>
                                &apos;cl-grey-dark&apos;: &apos;#5E5E5E&apos;,<br/>
                                &apos;cl-blue&apos;: &apos;#3B82F6&apos;,<br/>
                                &apos;cl-secondary&apos;: &apos;#D3DEF0&apos;,<br/>
                                &apos;cl-red&apos;: &apos;#EF233C&apos;,<br/>
                                &apos;cl-blue-dark&apos;: &apos;#061C3F&apos;,<br/>
                                &apos;cl-green&apos;: &apos;#25A244&apos;,<br/>
                                &apos;cl-pink&apos;: &apos;#F72585&apos;,<br/>
                                &apos;cl-yellow&apos;: &apos;#FFAA00&apos;,<br/>
                                &apos;cl-cyan&apos;: &apos;#00B4D8&apos;,<br/>
                                &apos;cl-orange&apos;: &apos;#FF4800&apos;,<br/>
                                &apos;cl-violet&apos;: &apos;#7209B7&apos;,<br/>
                                <br/>
                                &#47;&#47; gradients<br/>
                                <br/>
                                &apos;gr_blue&apos;: &#123;<br/>
                                    1 : &quot;rgba(59,130,246,1)&quot;,<br/>
                                    2 : &quot;rgba(81,196,233,1)&quot;<br/>
                                &#125;,<br/>
                                <br/>
                                &apos;gr_red&apos;: &#123;<br/>
                                    1 : &quot;rgba(239,35,60,1)&quot;,<br/>
                                    2 : &quot;rgba(239,84,35,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_pink&apos;: &#123;<br/>
                                    1 : &quot;rgba(251,10,40,1)&quot;,<br/>
                                    2 : &quot;rgba(249,39,203,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_cyan&apos;: &#123;<br/>
                                    1 : &quot;rgba(0,180,216,1)&quot;,<br/>
                                    2 : &quot;rgba(61,242,231,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_orange&apos;: &#123;<br/>
                                    1 : &quot;rgba(255,72,0,1)&quot;,<br/>
                                    2 : &quot;rgba(255,187,13,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_yellow&apos;: &#123;<br/>
                                    1 : &quot;rgba(255,170,0,1)&quot;,<br/>
                                    2 : &quot;rgba(240,210,54,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_green&apos;: &#123;<br/>
                                    1 s &quot;rgba(37,162,68,1)&quot;,<br/>
                                    2 : &quot;rgba(91,223,45,1)&quot;<br/>
                                &#125;,<br/>
                                &apos;gr_violet&apos;: &#123;<br/>
                                    1 : &quot;rgba(114,9,183,1)&quot;,<br/>
                                    2 : &quot;rgba(180,9,183,1)&quot;<br/>
                                &#125;,<br/>
                                &#125;,<br/>
                            &#125;,<br/>
                            &#125; ,<br/>
                            plugins: [],<br/>

                    </code>
                    </pre>
                </div>

            <p className="my-4 text-skin-light">Now you have custom colors in your tailwind.config.js file.</p>

            <p className="my-4 text-skin-light">To use any color:-&nbsp;</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5">Use our custom color as background</h2><br />
            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10 italic">&#47;&#47; Background color example</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 text-white language-html flex' id='code1'>

                        &lt;button className=&quot;<div className="w-3 h-3 bg-cl-red relative top-1"></div>bg-cl-red&quot;&gt;Contact me&lt;/button&gt;

                    </code>
                    </pre>
                </div>

            

            <p className="my-4 text-skin-light">Use our custom color as text color:-</p>

            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10  italic">&#47;&#47; Text color example</p>
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
                <p className="text-cl-secondary py-3 ml-10  italic">&#47;&#47; main.css</p>
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

            <p className="my-4 text-skin-light">Please checkout our <Link href={'/documentation/theme-guide'} passHref><a className="text-cl-red">Theme Guide</a></Link> for TailUI, If you face any issue please join our <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord server</a></Link>, there you can ask all your doubts. For any correction to the page or project, go to our <Link href={'https://github.com/&#123;mra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>Github Repository</a></Link>.</p>



            
        </div>
    )
}
