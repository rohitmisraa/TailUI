import React, { useState } from 'react'
import SVG from "../../../svg"
import Link from 'next/link'

export default function Portfolios() {
    const [code1, setcode1] = useState(false)
    const [code2, setcode2] = useState(false)
    const [code3, setcode3] = useState(false)
    const [code4, setcode4] = useState(false)
    function codeshow1() {
        if (code1) {
            setcode1(false)
        } else {
            setcode1(true)

        }
    }
    function codeshow2() {
        if (code2) {
            setcode2(false)
        } else {
            setcode2(true)

        }
    }
    function codeshow3() {
        if (code3) {
            setcode3(false)
        } else {
            setcode3(true)

        }
    }
    function codeshow4() {
        if (code4) {
            setcode4(false)
        } else {
            setcode4(true)

        }
    }
    return (
        <div className='p-10 min-h-screen'>
            <h1 className='text-4xl font-bold text-skin-dark'>Hero blocks</h1>
            <p className='my-4 text-skin-light'>Hero blocks are the top or the first component user see when come to index page.</p>
            <h2 className='text-2xl font-medium text-skin-dark my-5'>Simple Tracking app Hero</h2>
            <p className='my-4 text-skin-light'>This hero is best for simple sites like app landing page, and other simple design websites.</p>
            <Link href={'/blocks/hero-simple'} passHref><a target={'_blank'}>
                <button className="py-1 px-6 bg-gradient-to-r from-gr_pink-1 to-gr_pink-2 text-white text-base rounded-full">Live Demo</button>
                </a></Link>
            <div className="flex justify-between my-10 space-x-3 overflow-auto pb-10 sm:pb-0">
                <img src="/assets/posts/bg-hero-simple.jpg" alt="hero simple screenshot" />
            </div>
            <div className=' w-full bg-cl-blue-dark rounded-xl'>
                <div className='h-12 flex justify-between pt-3'>
                    <button className='relative bottom-1 left-4 text-white' onClick={codeshow1}>
                        {code1 ? SVG.down : SVG.arrow_right}
                    </button>
                </div>
                <div style={{ height: code1 ? '400px' : '0', display: code1 ? 'block' : 'none' }} className='w-full bg-cl-blue-dark rounded-xl'>
                    <pre className='px-5 block overflow-auto whitespace-pr'><code className='px-5 overflow-auto h-96 block text-white language-html' id='code1'>
                        &lt;div className=&quot;w-full overflow-x-hidden bg-skin-bas bg-cl-violet min-h-screen&quot;&gt;<br />
                            &lt;div className=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between&quot;&gt;<br />
                                &lt;div className=&quot;h-10 w-32 flex&quot;&gt;<br />
                                    &lt;img src=&quot;/assets/tailui-icon.svg&quot; alt=&quot;Logo&quot; className=&quot;object-contain h-8 w-h-8&quot; /&gt;<br />
                                    &lt;span className=&quot;text-xl ml-3 relative top-1 text-white&quot;&gt;<br />
                                        TailUI&lt;/span&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;div className=&quot;py-1 w-max px-2 text-lg font-medium hidden sm:flex&quot;&gt;<br />
                                    &lt;button className=&quot;py-1 px-6 text-skin-dark  hover:relative hover:bottom-2&quot;&gt;<br />
                                        Home&lt;/button&gt;<br />
                                    &lt;button className=&quot;py-1 px-6 text-skin-light  hover:relative hover:bottom-2&quot;&gt;<br />
                                        About&lt;/button&gt;<br />
                                    &lt;button className=&quot;py-1 px-6 text-skin-light hover:relative hover:bottom-2&quot;&gt;<br />
                                        Contact&lt;/button&gt;<br />
                                &lt;/div&gt;<br />
                            &lt;/div&gt;<br />
                            &lt;div className=&quot;py-3 px-5 sm:px-20 w-screen flex justify-between pt-44 space-x-4&quot;&gt;<br />
                                &lt;div className=&quot;w-full lg:w-3/6&quot;&gt;<br />
                                    &lt;h1 className=&quot;lg:text-7xl w-full text-5xl xl:w-[650px] text-white&quot;&gt;<br />&lt;span className=&quot;font-bold text-cl-cyan&quot;&gt;<br />Track&lt;/span&gt;<br /> your Daily activity anytime&lt;/h1&gt;<br />
                                    &lt;p className=&quot;text-xl text-cl-secondary xl:w-[650px]&quot;&gt;<br />Track your active time spend running, walking or cycling. Also get the sight of progress from anywhere no matter, its phone, tablet or pc.&lt;/p&gt;<br />
                                    &lt;div className=&quot;flex space-x-4 mt-10&quot;&gt;<br />
                                        &lt;button className=&quot;py-1 px-6 bg-cl-blue text-white text-base rounded-full&quot;&gt;<br />Learn More&lt;/button&gt;<br />
                                        &lt;button className=&quot;py-1 px-6 bg-cl-secondary text-cl-blue-dark text-base rounded-full&quot;&gt;<br />Check our blog&lt;/button&gt;<br />
                                    &lt;/div&gt;<br />
                                &lt;/div&gt;<br />
                                &lt;img src=&quot;/assets/undraw_fitness_tracker_3033.svg&quot; alt=&quot;Fitness image&quot; className=&quot;sm:w-3/6 lg:w-[500px] xl:w-[700px] my-5 xl:my-0 m-auto hidden md:block relative bottom-16&quot; /&gt;<br />
                            &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                    </code>
                    </pre>
                </div>
            </div>

            
        </div>
    )
}
