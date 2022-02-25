import SVG from "../../../svg"
import Link from 'next/link'

export default function GettingStarted() {
    return (
        <div className="p-4 sm:p-10 min-h-screen">
            <h1 className="text-4xl font-bold text-skin-dark">Getting Started</h1>
            <p className="my-4 text-skin-light">Hero blocks are the top or the first component user see when come to index page.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Why-TailUI">Why TailUI</h2>

            <p className="my-4 text-skin-light">We have made TailUI because, there are very less number of web UI component available for free, either they are paid or the quality is not that good. We made TailUI so we can provide free quality components.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="How-to-use">How to use Tailwind Components?</h2>

            <p className="my-4 text-skin-light">We have used Tailwind css framework to make our components, So css will not be a headache for both of us.</p>

            <p className="my-4 text-skin-light">To use our components you will have to setup Tailwind Framework to your awesome project.</p>

            <p className="my-4 text-skin-light">Now let us dive into, How you can setup Tailwind css?</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Install">1. Install and setup Tailwind css</h2>

            <p className="my-4 text-skin-light">This is true way to setup and use Tailwind for production projects. To setup Tailwind please prefer to their <Link href={'https://tailwindcss.com/docs/installation'} passHref><a className="text-cl-red" target={'_blank'}>oficial documentation</a></Link> page. So you can get the latest information correctly.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Use-CDN">2. Use CDN</h2>

            <p className="my-4 text-skin-light">If you do not want to setup the&nbsp; whole Tailwind but just want to test our components, then you can also use this CDN for development time.</p>

            <p className="my-4 text-skin-light">Note:- Please do not use this for your production app.</p>

            <div className='w-full bg-cl-blue-dark rounded-xl pb-5'>
                <p className="text-cl-secondary py-3 ml-10 italic">&#47;&#47; tailwind cdn</p>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-max-96 block text-white language-html' id='code1'>

                    &lt;script src=&quot;https://cdn.tailwindcss.com&quot;&gt;&lt;/script&gt;

                    </code>
                    </pre>
                </div>


            <p className="my-4 text-skin-light">Place this cdn code to your header</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Watch-this-video">Watch this video</h2>

            <p className="my-4 text-skin-light">If you find any problem reading Tailwind Documentations or just do not want, then you can watch this video.</p>
            <div className="aspect-w-16 aspect-h-9">
            <iframe src="https://www.youtube.com/embed/L2KHCWJ3gjs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
            </div>


            <h2 className="text-2xl font-medium text-skin-dark my-5" id="Use-TailUI-Components">Use TailUI Components</h2>

            <p className="my-4 text-skin-light">Now if you have followed above steps carefully and have setup Tailwind successfully. Then you are ready to go.</p>

            <p className="my-4 text-skin-light">How to use:-</p>

            <p className="my-4 text-skin-light">Just copy/paste Components</p>

            <p className="my-4 text-skin-light">Steps-&nbsp;</p>

            <p className="my-4 text-skin-light"><span className="font-size:36px"><strong>[Component image]</strong></span><br />
            First sep is select the component or block you want from 50+ options.</p>

            <div className="aspect-w-16 aspect-h-9 border-2 border-gray-400">
                <img src="/assets/posts/copy_code_tailui.png" alt="Code copy image" />
            </div>

            <p className="my-4 text-skin-light">Now copy the code available below the component.</p>
            <br/>
            <br/>

            <div className="aspect-w-16 aspect-h-9 border-2 border-gray-400">
                <img src="/assets/posts/code_editor.png" alt="Code copy image" />
            </div>

            <p className="my-4 text-skin-light">paste it to wherever you want it in your project.</p>
            <br/>
            <br/>

            <div className="aspect-w-16 aspect-h-9 border-2 border-gray-400">
                <img src="/assets/posts/component_preview.png" alt="Code copy image" />
            </div>

            <p className="my-4 text-skin-light">HOORAY! You are now officially a TailUI user.</p>

            <h2 className="text-2xl font-medium text-skin-dark my-5" id="For-more">For more</h2>

            <p className="my-4 text-skin-light">Please checkout our <Link href={'/documentation/theme-guide'} passHref><a className="text-cl-red">Theme Guide</a></Link> for TailUI, If you face any issue please join our <Link href={'https://discord.gg/KX6DnfQAuj'} passHref><a className="text-cl-red" target={'_blank'}>Discord Server</a></Link>, there you can ask all your doubts. For any correction to the page or project, go to our <Link href={'https://github.com/rohitmra/TailUI'} passHref><a className="text-cl-red" target={'_blank'}>Github Repository</a></Link>.</p>

        </div>
    )
}
